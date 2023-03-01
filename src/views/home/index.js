import React from 'react'
import SectionSinJrsNoHaySrs from '../../components/Section_sinJrsNoHaySrs/SectionSinJrsNoHaySrs.js';
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import SectionHomeSystem from '../../components/Section_home_system/index.js';
import Banner from '../../components/Banner/Banner.js';


// encargada de renderizar todos los componentes de la vista home
const Ui_home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <SectionSinJrsNoHaySrs/>
            <SectionHomeSystem/>
            <Footer />
        </div>
        // <Componente_Banner/>
        // <Componente_Seccion1/>
        // <Componente_Seccion_Galleria/>
        // <Componente_SeccionX/>
        // <Componente_SeccionY/>
    )
}

export default Ui_home