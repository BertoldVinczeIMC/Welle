import React, { useEffect, useRef } from "react";

import { motion, useAnimation } from "framer-motion";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Servicecard(props) {
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

  //speed random between 1.5 and 2.5
  const speed = Math.random() * (2.5 - 1.5) + 1.5;

  return (
    <Col lg={3} md={6} sm={12} className="service-card scard">
      <motion.div
        ref={elementRef}
        animate={animationControls}
        initial={{ opacity: 0 }}
        variants={{
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              duration: speed,
            },
          },
        }}
      >
        <Image fluid src={props.img} className="scard-img"/>
        {/* image row */}
        <Row className="justify-content-center text-center service-title">
          {props.title}
        </Row>
        {/* text row */}
        <Row className="justify-content-center">
          <Col className="text-center">
            <p className="service-description">{props.description}</p>
          </Col>
        </Row>
        <div className="d-flex justify-content-center align-items-center service-list-icon-div">
          {props.listIcons &&
            props.listIcons.map((dict, index) => {
              return dict.icon == "dart" ? (
                <svg
                  className="dart-svg"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.582 17.424l-4.138-4.14.016 29.903.05 1.396c.02.66.145 1.4.345 2.17l32.775 11.56 8.2-3.63.007-.012L17.58 17.424z"
                    fill="#00c4b3"
                  />
                  <path
                    d="M13.856 46.753h.003c-.003-.012-.008-.026-.014-.04.007.015.007.03.01.04zm40.966 7.93l-8.2 3.63-32.77-11.56c.625 2.404 2.012 5.106 3.502 6.58l10.69 10.637 23.788.03 2.98-9.317z"
                    fill="#22d3c5"
                  />
                  <g fill="#0075c9">
                    <path d="M13.556 13.285L.813 32.53c-1.058 1.13-.53 3.462 1.173 5.18l7.356 7.416 4.624 1.63c-.2-.768-.326-1.5-.345-2.17l-.05-1.396-.015-29.903z" />
                    <path d="M46.9 13.67c-.77-.195-1.508-.318-2.173-.337l-1.478-.054-29.805.007 41.392 41.386 3.636-8.2-11.57-32.8z" />
                  </g>
                  <path
                    d="M46.862 13.663c.013.005.027.008.038.01v-.004c-.013-.003-.025-.003-.038-.008zm6.615 3.518c-1.505-1.515-4.17-2.9-6.577-3.508L58.47 46.47l-3.64 8.2 8.882-2.838.02-24.352-10.256-10.3z"
                    fill="#00a8e1"
                  />
                  <path
                    d="M45.278 9.075l-7.4-7.36C36.152.018 33.82-.512 32.7.544l-19.244 12.74 29.805-.007 1.478.054c.665.02 1.404.142 2.173.337L45.28 9.073zm-31.833 4.2"
                    fill="#00c4b3"
                  />
                </svg>
              ) : (
                <FontAwesomeIcon
                  color={dict.color}
                  icon={dict.icon}
                  key={index}
                  className="service-list-icon"
                />
              );
            })}
        </div>
      </motion.div>
    </Col>
  );
}
