import React from "react";
import Thumb from "../images/logo/thumbs-logo.png";
import Tag from "../images/logo/tag-logo.png";
import Clock from "../images/logo/clock-logo.png";
import Award from "../images/logo/award-logo.png";

function Whyus() {
  return (
    <div>
      <section id="why-us" className="mb-3">
        <div className="container my-5">
          <div className="text-center text-lg-start">
            <h1>Why Us?</h1>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
          <div className="row g-3">
            <div className="col-sm-12 col-lg-3">
              <div className="card p-3">
                <div className="mb-4">
                  <span className="icon-w yellow">
                    <img src={Thumb} alt="" />
                  </span>
                </div>
                <div>
                  <span className="d-block mb-2">Mobil Lengkap</span>
                  <span className="d-block mb-2">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3">
              <div className="card p-3">
                <div className="mb-2">
                  <span className="icon-w red">
                    <img src={Tag} alt="" />
                  </span>
                </div>
                <div>
                  <span className="d-block mb-2">Harga Murah</span>
                  <span className="d-block mb-2">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3">
              <div className="card p-3">
                <div className="mb-2">
                  <span className="icon-w blue">
                    <img src={Clock} alt="" />
                  </span>
                </div>
                <div>
                  <span className="d-block mb-2">Layanan 24 Jam</span>
                  <span className="d-block mb-2">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3">
              <div className="card p-3">
                <div className="mb-2">
                  <span className="icon-w green">
                    <img src={Award} alt="" />
                  </span>
                </div>
                <div>
                  <span className="d-block mb-2">Sopir Profesional</span>
                  <span className="d-block mb-2">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Whyus;
