import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServicesComp = () => {
  return (
    <div className="services min-vh-100 d-flex align-items-center" id="services">
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-bold" data-aos="fade-up">Services</h1>
            <p className="text-center" data-aos="fade-up" data-aos-delay="200">
            Student Portal adalah platform daring yang disediakan oleh Universitas XYZ untuk para mahasiswa mereka. Platform ini dirancang dengan tujuan untuk memberikan akses mudah dan terpusat kepada mahasiswa terhadap berbagai layanan, informasi, dan sumber daya yang berkaitan dengan kehidupan kampus dan perkuliahan.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="400">
            <i className="fa-solid fa-coins fs-2 mb-4"></i>
            <h5 className="fw-bold">Harga Terjangkau</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="600">
            <i className="fa-solid fa-thumbs-up fs-2 mb-4"></i>
            <h5 className="fw-bold">Fasilitas Terbaik</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
          <Col className="text-center py-5 px-3" data-aos="fade-up" data-aos-delay="800">
            <i className="fa-solid fa-shield-halved fs-2 mb-4"></i>
            <h5 className="fw-bold">Tersertifikasi</h5>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesComp;
