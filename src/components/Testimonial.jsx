import React from "react";

function Testimonial() {
  return (
    <div>
      <section id="testimonial" className="mb-3">
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
                    <div className="card p-5">
                      <div className="d-flex flex-column justify-content-center">
                        <div className="text-center">Photo</div>
                        <div className="text-center">stars</div>
                        <div className="my-2">
                          <p className="fw-bold">
                            "Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum, cumque neque? Aperiam nihil delectus,
                            et magnam laboriosam molestias a vero commodi
                            distinctio reiciendis fugiat saepe. Iste ullam vero
                            quo labore!"
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
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card p-5">
                      <div className="d-flex flex-column justify-content-center">
                        <div className="text-center">Photo</div>
                        <div className="text-center">stars</div>
                        <div className="my-2">
                          <p className="fw-bold">
                            "Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum, cumque neque? Aperiam nihil delectus,
                            et magnam laboriosam molestias a vero commodi
                            distinctio reiciendis fugiat saepe. Iste ullam vero
                            quo labore!"
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
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card p-5">
                      <div className="d-flex flex-column justify-content-center">
                        <div className="text-center">Photo</div>
                        <div className="text-center">stars</div>
                        <div className="my-2">
                          <p className="fw-bold">
                            "Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum, cumque neque? Aperiam nihil delectus,
                            et magnam laboriosam molestias a vero commodi
                            distinctio reiciendis fugiat saepe. Iste ullam vero
                            quo labore!"
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
          <div className="my-3 d-flex justify-content-center align-items-center gap-2">
            <button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
            >
              Prev
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
