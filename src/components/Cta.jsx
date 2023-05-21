import React from "react";
import { useNavigate } from "react-router-dom";

function Cta() {
  const navigate = useNavigate();
  const toSearch = () => {
    navigate("/search");
  };
  return (
    <div>
      <section id="cta" className="mb-3">
        <div className="container">
          <div className="card" style={{ height: "25rem" }}>
            <div
              className="d-flex gap-4 flex-column text-center justify-content-center align-items-center p-5"
              style={{ height: "100%" }}
            >
              <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                quae
              </p>
              <div>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={toSearch}
                >
                  Mulai Sewa Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta;
