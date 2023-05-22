import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Cards() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState();
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const numberBeRp = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const fetchCarsData = async () => {
    try {
      const response = await axios.get(
        "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car",
        {
          params: {
            name: searchParams.get("name"),
            category:
              searchParams.get("kategori") === "undefined"
                ? ""
                : searchParams.get("kategori"),
            isRented:
              searchParams.get("status") === "undefined"
                ? ""
                : searchParams.get("status"),
            minPrice: searchParams.get("harga") === "undefined" ? "" : minPrice,
            maxPrice: searchParams.get("harga") === "undefined" ? "" : maxPrice,
          },
        }
      );
      setData(response.data.cars);
    } catch (error) {
      console.log("error > ", error);
    }
  };

  const goToDetail = (id) => {
    // console.log(id, "<<< id");
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    if (searchParams.get("harga") === "0-399999") {
      setMinPrice(0);
      setMaxPrice(399999);
    } else if (searchParams.get("harga") === "400000-600000") {
      setMinPrice(400000);
      setMaxPrice(600000);
    } else if (searchParams.get("harga") === "600001-99999999999") {
      setMinPrice(600001);
      setMaxPrice(99999999999);
    } else {
      setMinPrice(0);
      setMaxPrice(0);
    }
    fetchCarsData();
  }, [searchParams]);

  return (
    <Container className="pt-5 cardCar">
      <Row>
        {data?.length > 0 ? (
          data.map((car) => {
            return (
              <Col lg={4}>
                <Card>
                  {car && car.image ? (
                    <Card.Img variant="top" src={car.image}></Card.Img>
                  ) : (
                    <div
                      style={{
                        minHeight: "5rem",
                        background: "gray",
                        borderRadius: "10px",
                      }}
                    >
                      Default Background
                    </div>
                  )}
                  <Card.Body>
                    <Card.Title>{car.name}</Card.Title>
                    <Card.Text>{numberBeRp.format(car.price)} / hari</Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repudiandae inventore natus voluptate nobis vitae odit
                      accusamus neque! Vero similique praesentium ullam iste in,
                      laboriosam ut laborum commodi maiores odit ea.
                    </Card.Text>
                    <Button
                      type="button"
                      variant="success"
                      // className="d-block"
                      style={{ width: "100%" }}
                      onClick={() => goToDetail(car.id)}
                    >
                      Pilih Mobil
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <>Kata kunci {searchParams.get("name")} tidak ada</>
        )}
      </Row>
    </Container>
  );
}

export default Cards;
