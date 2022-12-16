import React from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import landing from '../assets/img/landing_bg.svg'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Banner
    () {
    return (
        <>
            <section className="hero">
                <motion.animate>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0, duration: 2 }}
                    >
                        <Container fluid className="banner" style={{ width: "90%" }}>
                            <Row style={{ marginLeft: "3rem", paddingTop:"5rem" }}>
                                <Col lg={6} className="">
                                    <motion.animate>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5, duration: 1 }}
                                        >
                                            <Row className='mb-4' style={{ paddingTop: "15%", marginRight: "1rem" }} id="banner-header">
                                                <Col lg={12} className="d-flex align-items-center justify-content-center">
                                                    <h1 className='title-h1'>We offer modern solutions for growing your business</h1>
                                                </Col>
                                            </Row>
                                        </motion.div>
                                    </motion.animate>
                                    <motion.animate>
                                        <motion.div
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.75, duration: 1 }}
                                        >
                                            <Row>
                                                <Col lg={12} className="d-flex align-items-center mb-3">
                                                    <p style={{ fontSize: "1.25rem" }} className="text-mute">We offer modern solutions for growing your business
                                                        We are team of talented designers making websites with Bootstrap.</p>
                                                </Col>
                                            </Row>
                                        </motion.div>
                                    </motion.animate>
                                    <motion.animate>
                                        <motion.div
                                            initial={{ opacity: 0, y: 100 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1, duration: 1 }}
                                        >
                                            <Row className="w-100" style={{ paddingBottom: "50%" }}>
                                                <Col lg={3} className="d-flex align-items-center flex-direction-column">
                                                    <Button className="w-100" style={{ backgroundColor: "#3c008b", borderColor: "#3c008b" }}>Get Started&nbsp;
                                                    <FontAwesomeIcon icon={faLongArrowRight}/>
                                                    </Button>
                                                </Col>
                                                <Col lg={9} className="d-flex align-items-center flex-direction-column">
                                                </Col>
                                            </Row>
                                        </motion.div>
                                    </motion.animate>
                                </Col>
                                <Col lg={6}>
                                    <motion.animate>
                                        <motion.div
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.15, duration: 1 }}
                                        >
                                            <Image src={landing} alt="landing" fluid />
                                        </motion.div>
                                    </motion.animate>
                                </Col>
                            </Row>
                        </Container >
                    </motion.div>
                </motion.animate>
            </section>
        </>
    )
}
