import React from 'react'
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import SectionHomeSystem from '../../components/Section_home_system/index.js';
import Banner from '../../components/Banner/Banner.js';
import BigBanner from '../../components/BigBanner/BigBanner.js';
import SectionSinJuniors from '../../components/SectionSinJrsNoHaySrs/index.js';

// encargada de renderizar todos los componentes de la vista home
const UiHome = () => {
    return (
        <div>
            <Navbar />
            <BigBanner />
            <Banner />
            <SectionSinJuniors />
            <SectionHomeSystem />
            <Footer />
        </div>
    )
}
export default UiHome