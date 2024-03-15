import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Container, Row } from "react-bootstrap";
import "../css/CustomerHome.css";

function CustomerHome() {
  return (
    <Container fluid="md border">
      <Row className="p-1 navbar d-flex align-items-center">
        <Col className="col-md-4 col-12">
          <div className="logo">
            <h3>Cargo</h3>
          </div>
        </Col>
        <Col className="col-md-8 col-12 ">
          <ul className="d-flex gap-3  align-items-center justify-content-md-end justify-content-center  p-1">
            <li className="text-center ">
              <button>Price Finder</button>
            </li>
            <li className="">
              <button>Sign In</button>
            </li>
            <li className="">
              <button>Sign Up</button>
            </li>
          </ul>
        </Col>
      </Row>
      <section>
          <div className="row text-center mt-4 d-flex flex-column align-items-center">
            <h1>Grow Your Business. <span>We will</span> </h1>
            <h2><span>take care</span> all your logistics</h2>
            <div className="col-10">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit modi magnam sed excepturi explicabo obcaecati officiis cum veritatis nisi quae?</p>
            </div>
            <div className="col-10">
              <img src="" alt="C:\cargo-main\src\assests\img\AdobeStock_619151417_Preview.jpeg" />
            </div>
          </div>
      </section>
      {/* <section>

        </section>
        <section>

        </section> */}
      <Row>
        <section className="footer border p-2">
          <Row className="m-1">
            <div className="col-md-8 border p-2"></div>
            <div className="col-md-4 border p-2"></div>
          </Row>
        </section>
      </Row>
    </Container>
  );
}

export default CustomerHome;
