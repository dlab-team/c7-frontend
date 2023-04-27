import React from "react";
import SectionSinJrsNoHaySrs from "../../components/Home/SectionSinJrsNoHaySrs/index.js";
import SectionHomeSystem from "../../components/Home/SectionHomeSystem/index.js";
import Banner from "../../components/Home/Banner/index.js";
import BigBanner from "../../components/Home/BigBanner/index.js";
import ContactForm from "../../components/Home/ContactForm/index.js";

const Ui_home = () => {

  return (
    <div>
      <BigBanner />
      <Banner />
      <SectionSinJrsNoHaySrs />
      <div className="row mt-5 p-3">
        <div className="col-lg-6 mb-3">
          <SectionHomeSystem />
        </div>
        <div className="col-lg-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Ui_home;