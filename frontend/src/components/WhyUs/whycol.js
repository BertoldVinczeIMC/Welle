import React, { useEffect, useRef } from "react";

import Col from "react-bootstrap/Col";

import { motion, useAnimation } from "framer-motion";

export default function WhyCol(props) {
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
  const randomDuration = Math.random() * 2 + 1;
  return (
    <Col lg={6} md={6} sm={12} xs={12} className="">
      <motion.div
        ref={elementRef}
        animate={animationControls}
        initial="hidden"
        variants={{
          visible: {opacity: 1 },
          hidden: {opacity: 0 },
        }}
        transition={{ duration: randomDuration }}
      >
        <h1 className="us-title">{props.title}</h1>
        <p className="us-description">{props.description}</p>
      </motion.div>
    </Col>
  );
}
