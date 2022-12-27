import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/header";
import Banner from "./components/Banner/banner";
import Services from "./components/Services/services";
import WhyUsSection from "./components/WhyUs/whyussection";
import Reference from "./components/Reference/reference";
import ContactForm from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <WhyUsSection />
      <Reference />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
