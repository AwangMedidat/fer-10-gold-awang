import React from "react";
import rate from "../images/rate.png";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import { useState } from "react";

function Testimonial() {
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  const onClickBtn = (status) => {
    if (status === "prev") {
      setPrev(true);
      setNext(false);
    } else if (status === "next") {
      setPrev(false);
      setNext(true);
    }
  };
  return (
    <div>
      <section id="testimonial" className="mb-3 bg-primary-subtle">
        <div className="container my-5">
          <div className="text-center">
            <h1>Testimonial</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              doloremque iure ullam.
            </p>
          </div>
          <div
            id="carouselExampleRide"
            className="carousel slide border"
            data-bs-ride="true"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card p-5 border-0 rounded">
                      <div className="d-flex flex-column flex-lg-row justify-content-center">
                        <div>
                          <div className="text-center text-lg-start mt-3 mx-4">
                            <img src={person1} alt="" />
                          </div>
                        </div>
                        <div>
                          <div className="text-center text-lg-start">
                            <img src={rate} alt="" />
                          </div>
                          <div className="my-2">
                            <p className="fw-bold">
                              "Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Dolorum, cumque neque? Aperiam
                              nihil delectus, et magnam laboriosam molestias a
                              vero commodi distinctio reiciendis fugiat saepe.
                              Iste ullam vero quo labore!"
                            </p>
                          </div>
                          <div>
                            <span>John Dee 32, Bromo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card p-5 border-0 rounded">
                      <div className="d-flex flex-column flex-lg-row justify-content-center">
                        <div>
                          <div className="text-center text-lg-start mt-3 mx-4">
                            <img src={person2} alt="" />
                          </div>
                        </div>
                        <div>
                          <div className="text-center text-lg-start">
                            <img src={rate} alt="" />
                          </div>
                          <div className="my-2">
                            <p className="fw-bold">
                              "Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Dolorum, cumque neque? Aperiam
                              nihil delectus, et magnam laboriosam molestias a
                              vero commodi distinctio reiciendis fugiat saepe.
                              Iste ullam vero quo labore!"
                            </p>
                          </div>
                          <div>
                            <span>John Dee 32, Bromo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card p-5 border-0 rounded">
                      <div className="d-flex flex-column flex-lg-row justify-content-center">
                        <div>
                          <div className="text-center text-lg-start mt-3 mx-4">
                            <img src={person1} alt="" />
                          </div>
                        </div>
                        <div>
                          <div className="text-center text-lg-start">
                            <img src={rate} alt="" />
                          </div>
                          <div className="my-2">
                            <p className="fw-bold">
                              "Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Dolorum, cumque neque? Aperiam
                              nihil delectus, et magnam laboriosam molestias a
                              vero commodi distinctio reiciendis fugiat saepe.
                              Iste ullam vero quo labore!"
                            </p>
                          </div>
                          <div>
                            <span>John Dee 32, Bromo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 d-flex justify-content-center align-items-center gap-2">
            <button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
              className={`rounded-circle ${
                prev && !next ? "btn btn-success" : "btn btn-outline-dark"
              }`}
              onClick={() => onClickBtn("prev")}
            >
              {`<`}
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
              className={`rounded-circle btn btn-success ${
                !prev && next ? "btn btn-success" : "btn btn-outline-dark"
              }`}
              onClick={() => onClickBtn("next")}
            >
              {`>`}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
