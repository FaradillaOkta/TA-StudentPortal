import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComp = () => {
    return (
    <div className="footer pb-3 pt-4">
        <Container>
            <Row>
                <Col>
                <p className="fw-bold text-white text-center">&copy; Copyright by Faradilla Okta 2023, All Right Reserved.</p>
                </Col>
            </Row>
        </Container>

    </div>
    );
};

export default FooterComp;