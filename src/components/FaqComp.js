import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComp = () => {
  return (
    <div className="faq" id="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold" data-aos="fade-up">FAQ</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="200">
              Tentang Student Portal
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4">
          <Col data-aos="fade-up" data-aos-delay="400">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Apa itu Student Portal?</Accordion.Header>
                <Accordion.Body>
                Student Portal adalah platform daring yang dirancang khusus untuk memberikan akses kepada mahasiswa ke berbagai informasi, layanan akademik, jadwal kuliah, dan sumber daya lainnya yang berkaitan dengan kehidupan kampus.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="500">
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Informasi apa saja yang dapat diakses?</Accordion.Header>
                <Accordion.Body>
                Melalui Student Portal, Anda dapat mengakses jadwal kuliah, nilai akademik, informasi pribadi, pengumuman kampus, materi kuliah, dan sumber daya digital lainnya.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="600">
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Bagaimana cara saya mengakses Student Portal?</Accordion.Header>
                <Accordion.Body>
                Setelah mendaftar sebagai mahasiswa, Anda akan diberikan informasi login yang dapat digunakan untuk mengakses portal. Biasanya, Anda akan memasukkan nama pengguna dan kata sandi unik.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="700">
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Apakah Student Portal aman?</Accordion.Header>
                <Accordion.Body>
                a, keamanan informasi pribadi dan akademik adalah prioritas utama dalam pengembangan Student Portal. Protokol keamanan modern diterapkan untuk melindungi data Anda dari akses yang tidak sah.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="800">
            <Accordion>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Bisakah saya merubah informasi pribadi saya melalui Student Portal?</Accordion.Header>
                <Accordion.Body>
                Ya, Student Portal sering menyediakan opsi untuk mengubah dan memperbarui informasi pribadi Anda, seperti alamat, nomor telepon, atau alamat email. Ada baiknya silahkan menghubungi staff kampus.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="900">
            <Accordion>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Dapatkah saya mendaftar mata kuliah melalui Student Portal?</Accordion.Header>
                <Accordion.Body>
                Tidak, untuk saat ini banyak Student Portal memungkinkan Anda mendaftar dan mengelola mata kuliah secara daring. Anda dapat memilih mata kuliah, melihat ketersediaan, dan merancang jadwal kuliah. Namun, saat ini akses tersebut belum tersedia.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="1000">
            <Accordion>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Apakah saya dapat mengakses Student Portal dari perangkat seluler?</Accordion.Header>
                <Accordion.Body>
                  Tidak, untuk saat ini student portal hanya tersedia on website saja.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="11000">
            <Accordion>
              <Accordion.Item eventKey="7">
                <Accordion.Header>Apa manfaat Student Portal ini?</Accordion.Header>
                <Accordion.Body>
                Student Portal memberikan kenyamanan dan aksesibilitas. Anda dapat mengakses informasi akademik dan administratif yang memudahkan mahasiswa.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqComp;
