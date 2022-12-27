import React, { useEffect, useRef } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";

import ref1 from "../../assets/img/ref1.jpg";

export default function Reference() {
  const elementRef = useRef(null);
  const animationControls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the animation when the element enters the viewport
          animationControls.start("visible");
        } else {
          // Stop the animation when the element leaves the viewport
          animationControls.stop();
        }
      });
    });
    observer.observe(elementRef.current);
  }, []);

  return (
    <section className="references">
      <motion.div
        ref={elementRef}
        animate={animationControls}
        initial="hidden"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ duration: 1 }}
      >
        <Container fluid>
          <Row className="justify-content-center">
            <Col lg={12} md={12} sm={12} xs={12} className="service-card">
              <h2 className="text-center section-title">
                What to expect from us? Take a look in this
              </h2>
              <Container>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={ref1}
                      alt="First slide"
                      style={{ maxWidth: "100%", maxHeight: "600px" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={ref1}
                      alt="Second slide"
                      style={{ maxWidth: "100%", maxHeight: "600px" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={ref1}
                      alt="Third slide"
                      style={{ maxWidth: "100%", maxHeight: "600px" }}
                    />
                  </Carousel.Item>
                </Carousel>
              </Container>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </section>
  );
}
