import React from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../App.css";
import { Card } from "react-bootstrap";

export default function About() {
  const videoUrl = "https://www.youtube.com/watch?v=7WABxk9DAuw";
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Container fluid>
        <Row fluid>
          <Col>
            <div className="d-flex justify-content-around">
              <Card style={{ width: "18rem" }} className="mt-5">
                <Card.Img
                  variant="top"
                  src={require("../Assets/Images/profilePictures/Arth_Profile.jpg")}
                />
                <Card.Body>
                  <Card.Title>
                    <h1>Arth Vasavada</h1>
                  </Card.Title>
                  <Card.Text>Web Developer</Card.Text>
                  <Button variant="primary-outline">Know more</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-around">
              <Card style={{ width: "18rem" }} className="mt-5">
                <Card.Img
                  variant="top"
                  src={require("../Assets/Images/profilePictures/Naisargi_Profile.jpg")}
                />
                <Card.Body>
                  <Card.Title>
                    <h1>Naisargi Antani</h1>
                  </Card.Title>
                  <Card.Text>Web Designer</Card.Text>
                  <Button variant="primary-outline">Know more</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}
