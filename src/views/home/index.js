import React from 'react'
import SectionSinJrsNoHaySrs from '../../components/Section_sinJrsNoHaySrs/SectionSinJrsNoHaySrs.js';
import Navbar from '../../components/Navbar/Navbar.js';

// encargada de renderizar todos los componentes de la vista home
const Ui_home = () => {
    return (
        <div>
            <Navbar />
            <SectionSinJrsNoHaySrs/>
        </div>
        // <Componente_Banner/>
        // <Componente_Seccion1/>
        // <Componente_Seccion_Galleria/>
        // <Componente_SeccionX/>
        // <Componente_SeccionY/>
        // <Componente_Footer/>
    )
}

export default Ui_home