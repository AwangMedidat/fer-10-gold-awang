import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Container, Form, Row, Col } from "react-bootstrap";
import ReactSelect from "react-select";

function Searchform(props) {
  const navigate = useNavigate();

  const {
    withButtonSearchCar = false,
    withValueForm = false,
    disabledForm = false,
  } = props;
  const [name, setName] = useState();
  const [kategori, setKategori] = useState();
  const [harga, setHarga] = useState();
  const [status, setStatus] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log("edit");
    navigate(
      `/result?name=${name}&kategori=${kategori}&harga=${harga}&status=${status}`
    );
    window.location.reload();
  };

  return (
    <Container className="py-3 search-form">
      <Card className="py-3 px-3 my-5">
        <Form onSubmit={handleSubmit}>
          <Row>
            {withButtonSearchCar && <h5>Pencarian mu</h5>}
            <Col lg={3} sm={12}>
              <Form.Group>
                <Form.Label>Nama Mobil</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ketik nama / tipe mobil"
                  className="search-input"
                  defaultValue={withValueForm ? name : ""}
                  onChange={(evt) => setName(evt.target.value)}
                  disabled={disabledForm ? true : false}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col lg={3} sm={12}>
              <Form.Group>
                <Form.Label>Kategori</Form.Label>
                <ReactSelect
                  className="search-input"
                  placeholder="Kategori"
                  isDisabled={disabledForm ? true : false}
                  options={[
                    {
                      label: "2 - 4 orang",
                      value: "small",
                    },
                    {
                      label: "4 - 6 orang",
                      value: "medium",
                    },
                    {
                      label: "6 - 8 orang",
                      value: "large",
                    },
                  ]}
                  onChange={(selected) => setKategori(selected.value)}
                />
              </Form.Group>
            </Col>
            <Col lg={3} sm={12}>
              <Form.Group>
                <Form.Label>Harga</Form.Label>
                <ReactSelect
                  className="search-input"
                  placeholder="Pilih Rentang Harga"
                  isDisabled={disabledForm ? true : false}
                  options={[
                    {
                      label: "< 400.000",
                      value: "0-399999",
                    },
                    {
                      label: "400.000 - 600.000",
                      value: "400000-600000",
                    },
                    {
                      label: "> 600.000",
                      value: "600001-99999999999",
                    },
                  ]}
                  onChange={(selected) => setHarga(selected.value)}
                />
              </Form.Group>
            </Col>
            <Col lg={3} sm={12}>
              <div className="d-flex align-items-end gap-3">
                <Form.Group className="flex-fill">
                  <Form.Label>Status</Form.Label>
                  <ReactSelect
                    placeholder="Pilih Status"
                    className="search-input"
                    isDisabled={disabledForm ? true : false}
                    options={[
                      {
                        label: "Disewa",
                        value: true,
                      },
                      {
                        label: "Belum Disewa",
                        value: false,
                      },
                    ]}
                    onChange={(selected) => setStatus(selected.value)}
                  />
                </Form.Group>
                {withButtonSearchCar ? (
                  disabledForm ? (
                    <></>
                  ) : (
                    <Button type="submit" variant="outline-primary">
                      Edit
                    </Button>
                  )
                ) : (
                  <Button type="submit" variant="success">
                    Cari Mobil
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
}

export default Searchform;
