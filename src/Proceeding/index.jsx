import React from "react";
import Navbar from "../components/Navbar";
import Itempanel from "../components/Itempanel";

const index = () => {
  return (
    <div className="page-section">
      <Navbar menuIdx={2} />
      <Itempanel pageTitle="Proceeding Items" />
    </div>
  );
};

export default index;