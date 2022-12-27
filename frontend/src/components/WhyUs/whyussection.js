import React from "react";

import { motion } from "framer-motion";

import { Container, Row, Col } from "react-bootstrap";

import WhyCol from "./whycol";

export default function WhyUsSection() {
  return (
    <section className="why-us">
      <Container fluid>
        <Row className="justify-content-center">
          <Col
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="text-center service-card mb-4"
          >
            <h1 className="section-title">Why do you need our services?</h1>
          </Col>
        </Row>
        <Row className="why-row">
          <WhyCol
            title="Why is it important to have a website?"
            description=" In today's digital age, having a website is essential for any business.
        A website serves as an online hub for your company, allowing customers
        to learn more about your products or services, get in touch with you,
        and even make purchases. Having a website also helps to increase the
        visibility of your business, as it allows customers to easily find you
        online through search engines like Google. This increased visibility can
        lead to more traffic to your website, and ultimately, more business. In
        addition, a website allows you to connect with customers and clients in
        a way that is not possible through traditional marketing channels. You
        can use your website to share updates, news, and important information
        about your business, and engage with your audience through social media
        and other online channels. Overall, having a website is a crucial
        component of any modern business strategy. It allows you to reach a
        wider audience, increase your visibility, and connect with customers in
        a meaningful way."
          />
          <WhyCol
            title="The perks of having a mobile app"
            description=" In today's world, where more and more people are accessing the internet
        through their smartphones and tablets, having a mobile app can give your
        business a significant advantage. A mobile app allows your customers to
        interact with your business on the go, providing them with a convenient
        and easy way to access your products or services. This can lead to
        increased customer loyalty and repeat business. In addition, a mobile
        app can help you to stand out from your competitors, as it allows you to
        offer a unique and personalized experience to your customers. You can
        use your app to send targeted promotions and offers, or provide special
        features and functionality that are not available on your website.
        Finally, a mobile app can help you to collect valuable data and insights
        about your customers, allowing you to better understand their needs and
        preferences. This can help you to improve your products or services and
        make better business decisions."
          />
        </Row>
        <Row className="why-row">
          <WhyCol
            title="What is SEO? Why is it important?"
            description=" SEO, or Search Engine Optimization, is the practice of optimizing your
        website and its content to increase its visibility and ranking in search
        engine results pages (SERPs). This is important because higher
        visibility in search results can lead to more traffic to your website,
        which can in turn lead to more business and revenue. There are several
        key benefits to optimizing your website for SEO: Increased traffic: By
        ranking higher in search results, you can attract more visitors to your
        website, which can lead to more business and revenue. Cost optimization:
        SEO can help you to get more value out of your marketing budget, as it
        allows you to target specific keywords and phrases that are relevant to
        your business. This can be more cost-effective than other forms of
        advertising, as you are targeting a specific audience. Brand awareness:
        SEO can help you to increase your brand awareness, as it allows you to
        target specific keywords and phrases that are relevant to your business.
        This can help you to reach a wider audience, and ultimately, increase
        your sales. Overall, SEO can help you to increase your visibility in
        search results, which can lead to more traffic to your website, and
        ultimately, more business."
          />
          <WhyCol
            title="Why us?"
            description="At [Company Name], we specialize in website development, mobile
              development, database design, and SEO. We are a young, growing
              startup based in Austria, and we are dedicated to delivering
              high-quality solutions to our clients. Our team of experienced
              professionals has a track record of success in delivering
              innovative and effective solutions to a wide range of businesses.
              We take pride in our work and strive to exceed our clients'
              expectations on every project. If you are looking for a reliable
              partner to help you achieve your online goals, look no further.
              Contact us today to learn more about how we can help your business
              succeed."
          />
        </Row>
      </Container>
    </section>
  );
}
