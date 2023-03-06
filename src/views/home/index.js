import React from 'react'
import SectionSinJrsNoHaySrs from '../../components/Section_sinJrsNoHaySrs/SectionSinJrsNoHaySrs.js';
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import Banner from '../../components/Banner/Banner.js';
import NewContratArticle from '../../components/Contrato_articulo/NewContrat.js';

// encargada de renderizar todos los componentes de la vista home
const Ui_home = () => {
    return (
        <div>
            <Navbar />
            <NewContratArticle />
            <Banner />
            <SectionSinJrsNoHaySrs/>
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