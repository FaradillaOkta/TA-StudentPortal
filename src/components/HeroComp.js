import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const HeroComp = () => {
    return <div className="hero min-vh-100 w-100" id="home">
        <Container>
            <Row>
                <Col>
                <h1 className="text-white text-center fs-1 animate__animated animate__fadeInUp">Welcome Student!!!</h1>
                </Col>
            </Row>
        </Container>
        </div>
};
export default HeroComp;
