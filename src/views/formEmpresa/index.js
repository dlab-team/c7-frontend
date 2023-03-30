import React from 'react'
import SectionHomeSystem from "../../components/Section_home_system/index";
import ContactForm from "../../components/ContactForm/index";

export default function formEmpresa() {
  return (
    <div className="row">
        <div className="col-md-6">
            <SectionHomeSystem />
        </div>
        <div className="col-md-6">
            <ContactForm />
        </div>
    </div>
  )
}
