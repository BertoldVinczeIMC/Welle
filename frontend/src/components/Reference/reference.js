import React, { useEffect, useRef } from "react";

import { motion, useAnimation } from "framer-motion";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import ref1 from "../../assets/img/ref1.jpg";
import ref2 from "../../assets/img/ref2.png";

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
            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              className="text-center service-card"
            >
              <h1 className="section-title">References</h1>
              <p className="service-description">
                Take a look at some of our projects and see what we can do for
                you. We are always happy to help. We strive to provide the best
                service possible.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={3} md={6} sm={12} className="ref service-card scard" onClick={()=>{
              // open new tab
              window.open("https://alis-kebap-c3a40b.ingress-comporellon.ewp.live")
            }}>
              <motion.div
                ref={elementRef}
                animate={animationControls}
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 2,
                    },
                  },
                }}
              >
                <Image fluid src={ref2} className="scard-img" />
                {/* image row */}
                <Row className="justify-content-center text-center service-title">
                  Haus des Istanbul
                </Row>
                {/* text row */}
                <Row className="justify-content-center">
                  <Col className="text-center">
                    <p className="service-description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standar text.
                    </p>
                  </Col>
                </Row>
              </motion.div>
            </Col>
            <Col lg={3} md={6} sm={12} className="ref service-card scard" onClick={()=>{
              // open new tab
              window.open("https://alis-kebap-c3a40b.ingress-comporellon.ewp.live")
            }}>
              <motion.div
                ref={elementRef}
                animate={animationControls}
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 2,
                    },
                  },
                }}
              >
                <Image fluid src={ref2} className="scard-img" />
                {/* image row */}
                <Row className="justify-content-center text-center service-title">
                  Haus des Istanbul
                </Row>
                {/* text row */}
                <Row className="justify-content-center">
                  <Col className="text-center">
                    <p className="service-description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standar text.
                    </p>
                  </Col>
                </Row>
              </motion.div>
            </Col>
            <Col lg={3} md={6} sm={12} className="ref service-card scard" onClick={()=>{
              // open new tab
              window.open("https://alis-kebap-c3a40b.ingress-comporellon.ewp.live")
            }}>
              <motion.div
                ref={elementRef}
                animate={animationControls}
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 2,
                    },
                  },
                }}
              >
                <Image fluid src={ref2} className="scard-img" />
                {/* image row */}
                <Row className="justify-content-center text-center service-title">
                  Haus des Istanbul
                </Row>
                {/* text row */}
                <Row className="justify-content-center">
                  <Col className="text-center">
                    <p className="service-description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standar text.
                    </p>
                  </Col>
                </Row>
              </motion.div>
            </Col>
            <Col lg={3} md={6} sm={12} className="ref service-card scard" onClick={()=>{
              // open new tab
              window.open("https://alis-kebap-c3a40b.ingress-comporellon.ewp.live")
            }}>
              <motion.div
                ref={elementRef}
                animate={animationControls}
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 2,
                    },
                  },
                }}
              >
                <Image fluid src={ref2} className="scard-img" />
                {/* image row */}
                <Row className="justify-content-center text-center service-title">
                  Haus des Istanbul
                </Row>
                {/* text row */}
                <Row className="justify-content-center">
                  <Col className="text-center">
                    <p className="service-description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standar text.
                    </p>
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </section>
  );
}
