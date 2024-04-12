import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Fixed = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      
    }, 4000);
  }, []);
  return (
    <>
      <div>
        {show && (
          <>
            <div class="modal" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Modal body text goes here.</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="top-to-btm">
        {showTopBtn && (
          <>
            <div
              id="div"
              className="bg-danger text-light fw-bold px-3 py-2"
              style={{
                borderRadius: "15px",
                position: "fixed",
                right: "20px",
                bottom: "80px",
              }}
            >
              <a href="#header">
                <i
                  class="bi bi-chevron-up text-light fw-bold"
                  style={{ fontSize: "25px" }}
                ></i>
              </a>
            </div>
          </>
        )}
      </div>
      <div
        id="div"
        className="bg-danger text-light fw-bold px-3 py-2"
        style={{
          borderRadius: "15px",
          position: "fixed",
          right: "20px",
          bottom: "80px",
          display: "none",
        }}
      >
        <a href="#header">
          <i
            class="bi bi-chevron-up text-light fw-bold"
            style={{ fontSize: "25px" }}
          ></i>
        </a>
      </div>
      <div
        className="d-flex justify-content-center align-items-center px-3 py-2 bg-success"
        style={{
          borderRadius: "50%",
          position: "fixed",
          right: "20px",
          bottom: "20px",
        }}
      >
        <i
          className="bi bi-whatsapp text-light fw-bold"
          style={{ fontSize: "25px" }}
        ></i>
      </div>
    </>
  );
};

export default Fixed;
