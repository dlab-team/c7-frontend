import React from 'react'
import SectionSinJrsNoHaySrs from '../../components/Section_sinJrsNoHaySrs/SectionSinJrsNoHaySrs.js';
import Footer from '../../components/Footer/Footer.js';

// encargada de renderizar todos los componentes de la vista home
const Ui_home = () => {
    return (
        <div>Ui_home
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