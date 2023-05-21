import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Container } from "react-bootstrap";
import axios from "axios";

function CardDetail() {
  let { id } = useParams();
  const [dataDetail, setDataDetail] = useState();
  const numberBeRp = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  const fetchCarsDetail = async () => {
    try {
      const response = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`
      );
      setDataDetail({
        category: categoryPerson(response.data.category),
        image: response.data.image,
        name: response.data.name,
        price: response.data.price,
      });
      //   setDataDetail(response.data);
    } catch (error) {
      console.log("error ", error);
    }
  };

  const categoryPerson = (level) => {
    if (level === "small") {
      return "2 - 4 orang";
    } else if (level === "medium") {
      return "4 - 6 orang";
    } else {
      return "6 - 8 orang";
    }
  };

  useEffect(() => {
    fetchCarsDetail();
  }, []);
  return (
    <Container className="mb-3 cardCarDetail">
      <Row>
        <Col className="col-8">
          <Card>
            <Card.Body>
              <Card.Title>Tentang Paket</Card.Title>
              <Card.Title>Include</Card.Title>
              <Card.Text style={{ color: "#8A8A8A" }}>
                <ul>
                  <li>
                    Apa saja yang termasuk dalam paket misal durasi max 12 jam
                  </li>
                  <li>
                    Sudah termasuk bensin selama 12 jam Sudah termasuk Tiket
                  </li>
                  <li>Wisata Sudah termasuk pajak</li>
                </ul>
              </Card.Text>
              <Card.Title>Exclude</Card.Title>
              <Card.Text style={{ color: "#8A8A8A" }}>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp. 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                    Rp.20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </Card.Text>
              <Card.Title>Refund, Reschedule, Overtime</Card.Title>
              <Card.Text style={{ color: "#8A8A8A" }}>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                    Rp.20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                    Rp.20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam, akan ada tambahan biaya
                    Rp.20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-4">
          <Card>
            {dataDetail && dataDetail.image ? (
              <Card.Img className="p-3" src={dataDetail.image}></Card.Img>
            ) : (
              <Card.Img
                className="p-3"
                src="https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg"
              ></Card.Img>
            )}

            <Card.Body>
              <Card.Title>
                {dataDetail && dataDetail.name ? dataDetail.name : ""}
              </Card.Title>
              <Card.Title>
                {dataDetail && dataDetail.category ? dataDetail.category : ""}
              </Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title className="">Total</Card.Title>
                <Card.Title className="">
                  {numberBeRp.format(
                    dataDetail && dataDetail.price ? dataDetail.price : ""
                  )}
                </Card.Title>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardDetail;
