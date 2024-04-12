import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  var nav = useNavigate();
  const GoToHome = () => {
    nav("/");
  };
  return (
    <>
      <div className="row m-0 p-5">
        <div className="col-12 m-0 p-0 text-center">
          <h1 className="text-danger fw-bold">Page Not Found</h1>
          <button className="btn btn_2" onClick={() => GoToHome()}>
            Go To Home
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
