import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  DELETE_TASK_API_URL,
  GET_TASKS_API_URL,
  POST_TASK_API_URL,
} from "../../utils/apiUrl";
import {
  deleteRequest,
  getRequest,
  postRequest,
} from "../../utils/requestMethods";

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

const deleteItemFefchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async (id) => {
    // console.log(apiURL, id);
    const options = {
      method: "DELETE",
    };
    const fullpath = `${apiURL}/${id}`;
    return await deleteRequest(fullpath, options);
  });
};

// delete item
export const fetchDeleteItemData = deleteItemFefchThunk(
  "fetchDeleteItem",
  DELETE_TASK_API_URL
);
// Post thunk function 정의
const postItemFefchThunk = (actionType, apiURL) => {
  return createAsyncThunk(actionType, async (postData) => {
    // console.log(postData);
    const options = {
      body: JSON.stringify(postData), // 표준 json 문자열로 변환
    };
    return await postRequest(apiURL, options);
  });
};
// post item
export const fetchPostItemData = postItemFefchThunk(
  "fetchPostItemData",
  POST_TASK_API_URL
);

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
    deleteItemData: null,
    postItemData: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetItemsData.fulfilled, handleFulfilled("getItemsData")) //요청
      .addCase(fetchGetItemsData.rejected, handleRejected) //요청 실패시

      .addCase(fetchDeleteItemData.fulfilled, handleFulfilled("deleteItemData")) //요청
      .addCase(fetchDeleteItemData.rejected, handleRejected) //요청 실패시

      .addCase(fetchPostItemData.fulfilled, handleFulfilled("postItemData")) //요청
      .addCase(fetchPostItemData.rejected, handleRejected); //요청 실패시
  },
}); //slice 객체 저장

export default apiSlice.reducer;