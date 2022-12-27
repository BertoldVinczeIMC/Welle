import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import landing from "../../assets/img/landing_bg.svg";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
  return (
    <section className="hero">
      <Row className="hero-row-main">
        <Col lg={6} md={6} sm={12} xs={12} className="hero-title-col">
          <motion.animate>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Row className="hero-title-title-row text-wrap">
                <h1> Quickly growing Austrian startup</h1>
              </Row>
            </motion.div>
          </motion.animate>
          <motion.animate>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75, duration: 1 }}
            >
              <Row className="hero-title-description-row">
                <h2 className="text-mute">
                  We offer modern solutions for growing and already established
                  buisinesses. Young team of professionals with a lot of
                  experience in the field of IT and business.
                </h2>
              </Row>
            </motion.div>
          </motion.animate>
          <motion.animate>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="d-flex justify-content-center"
            >
              <Row className="w-100 hero-btn-row">
                <Col
                  lg={3}
                  className="d-flex align-items-center flex-direction-column"
                >
                  <Button
                    className="w-100"
                    style={{
                      backgroundColor: "#3c008b",
                      borderColor: "#3c008b",
                    }}
                  >
                    Get Started
                  </Button>
                </Col>
                <Col
                  lg={9}
                  className="d-flex align-items-center flex-direction-column"
                ></Col>
              </Row>
            </motion.div>
          </motion.animate>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="hero-img-col">
          <motion.animate>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 1 }}
            >
              <Row className="hero-img-row">
                <Image src={landing} alt="landing" fluid />
              </Row>
            </motion.div>
          </motion.animate>
        </Col>
      </Row>
    </section>
  );
}
