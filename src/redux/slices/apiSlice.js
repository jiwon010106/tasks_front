import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GET_TASKS_API_URL } from "../../utils/apiUrl";
import { getRequest } from "../../utils/requestMethods";

const getItemsFefchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async (userId) => {
    // console.log(apiURL, userId);
    const fullpath = `${apiURL}/${userId}`;
    return await getRequest(fullpath);
  });
};

//get items data
export const fetchGetItemsData = getItemsFefchThunk(
  "fetchGetItems", //action type
  GET_TASKS_API_URL //요청 url
); //thunk 함수 호출

//handleFulfilled 함수 정의: 요청 성공 시 상태 업데이트 로직을 별도의 함수로 분리
const handleFulfilled = (stateKey) => (state, action) => {
  state[stateKey] = action.payload; // action.payload에 응답 데이터가 들어있음
};

//handleRejected 함수 정의: 요청 성공 시 상태 업데이트 로직을 별도의 함수로 분리
const handleRejected = (state, action) => {
  console.log("Error", action.payload);
  state.isError = true;
};

// create slice
const apiSlice = createSlice({
  name: "apis", //slice 기능 이름
  initialState: {
    //초기 상태 지정
    getItemsData: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetItemsData.fulfilled, handleFulfilled("getItemsData")) //요청
      .addCase(fetchGetItemsData.rejected, handleRejected); //요청 실패시
  },
}); //slice 객체 저장

export default apiSlice.reducer;
