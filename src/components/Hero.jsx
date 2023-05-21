import React, { useEffect } from "react";
import CarImg from "../images/car.png";
import { useNavigate } from "react-router-dom";
import Searchform from "./Searchform";
import { Container } from "react-bootstrap";
// import { useSearchParams } from "react-router-dom";

function Hero(props) {
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();
  const {
    withRentButton = true,
    withSearchForm = false,
    withHeroContent = true,
    withSearchResultForm = false,
    // disabledForm = false,
    withSearchFormDetail = false,
  } = props;

  const toSearch = () => {
    navigate("/search");
  };

  // useEffect(() => {
  //   searchParams.get("name", "nama mobil");
  // }, []);

  return (
    <div>
      <section id="hero" className="mb-3" style={{ position: "relative" }}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="/">
              <span className="logo"></span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-lg-flex justify-content-lg-end me-lg-5"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item me-3">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#features"
                  >
                    Our Services
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#why-us">
                    Why Us
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Container className="hero-content">
          {withHeroContent &&
            withSearchResultForm === false &&
            withSearchFormDetail === false && (
              <div className="row g-0">
                <div className="col-sm-12 col-lg-6">
                  <div className="row">
                    <div className="col-lg-10">
                      <h1>
                        Sewa dan Rental Mobil Terbaik di Kawasan (Lokasimu)
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quos, unde ab! Consequatur culpa perspiciatis
                        doloremque distinctio vero, corrupti sunt ad impedit
                        suscipit optio harum aperiam natus similique esse enim
                        totam?
                      </p>
                      {withRentButton ? (
                        <>
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={toSearch}
                          >
                            Mulai Sewa Mobil
                          </button>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="hero-image">
                    <img
                      src={CarImg}
                      className="img-fluid object-fit-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
        </Container>
        {withSearchForm && <Searchform />}
        {withSearchResultForm && (
          <Searchform withButtonSearchCar withValueForm />
        )}
        {withSearchFormDetail && (
          <Searchform withButtonSearchCar disabledForm />
        )}
      </section>
    </div>
  );
}

export default Hero;
