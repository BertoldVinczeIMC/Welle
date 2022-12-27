import React from "react";

import Servicecard from "./servicecard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  faDatabase,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { faReact,faWordpress,faShopify,faNodeJs, faApple } from "@fortawesome/free-brands-svg-icons";

import web from "../../assets/img/web.jpg";
import mobile from "../../assets/img/mobile.png";
import database  from "../../assets/img/design.jpg";
import seo from "../../assets/img/seo.jpg";

const webIcons = [
  { icon: faReact, color: "#61DBFB" },
  { icon: faNodeJs, color: "#68A063" },
  { icon: faWordpress, color: "#21759b" },
  { icon: faShopify, color: "#96bf48" },
];

const mobileIcons = [
  { icon: faReact, color: "#61DBFB" },
  { icon: "dart", color: "#00c4b3" },
  { icon: faApple, color: "#555555" },
];

const databaseIcons = [
  { icon: faDatabase, color: "#012970" }
];

const seoIcons = [
  { icon: faSearch, color: "#012970" }
];

export default function Services() {
  return (
    <section className="services">
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={12} md={12} sm={12} xs={12} className="text-center service-card">
            <h1 className="section-title">Services</h1>
            <p className="service-description">
              We offer a wide range of services. From web development to mobile
              development, database design and SEO. We can do it all.
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center service-row">
          <Servicecard title={"Website development"} img={web} description={"We create custom, unique, niche websites, webapps and webshops for your needs with the most modern technologies in the shortest time possible."} listIcons={webIcons}/>
          <Servicecard title={"Mobile development"} img={mobile} description={"We create custom mobile application for your needs. IOS? Swift. Android? Java. Both? ReactNative or Dart"} listIcons={mobileIcons}/>
          <Servicecard title={"Databases"} img={database} description={"We can design,create and even optimize database schemas for you in MySQL, PostgreSQL or MongoDB."}/>
          <Servicecard title={"Search Engine Optimization"} img={seo} description={"What is SEO? Search Engine Optimization is the way to be more visible. We offer SEO services based on a monthly subscription. It includes: Keyword Research & Strategy, Link building, Technical SEO, Local SEO, On-Page SEO, Off-Page SEO."}/>
        </Row>
      </Container>
    </section>
  );
}
