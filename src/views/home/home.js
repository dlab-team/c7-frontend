import React from "react";
import SectionSinJrsNoHaySrs from "../../components/SectionSinJrsNoHaySrs/index";
import Navbar from "../../components/Navbar/Navbar.js";
import Footer from "../../components/Footer/Footer.js";
import SectionHomeSystem from "../../components/Section_home_system/index.js";
import Banner from "../../components/Banner/Banner.js";
import BigBanner from "../../components/BigBanner/BigBanner.js";
import ContactForm from "../../components/ContactForm/index.js";

// encargada de renderizar todos los componentes de la vista home
const Ui_home = () => {
  return (
    <div>
      <Navbar />
      <BigBanner />
      <Banner />
      <SectionSinJrsNoHaySrs />
      <div className="row">
        <div className="col-md-6">
          <SectionHomeSystem />
        </div>
        <div className="col-md-6">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ui_home;
