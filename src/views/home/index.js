import React from 'react'
import SectionSinJrsNoHaySrs from '../../components/Section_sinJrsNoHaySrs/SectionSinJrsNoHaySrs.js';
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import Banner from '../../components/Banner/Banner.js';

// encargada de renderizar todos los componentes de la vista home
const UiHome = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <SectionSinJrsNoHaySrs />
            <Footer />
        </div>
    )
}

export default UiHome