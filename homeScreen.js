import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/categoriesBar";

const HomeScreen = () => {
    return (
        <Container>
            <CategoriesBar />
            <Row>
                {[...new Array(20)].map((_, index) => (
                    <Col key={index} lg={3} md={4}>
                        <Video />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default HomeScreen;
