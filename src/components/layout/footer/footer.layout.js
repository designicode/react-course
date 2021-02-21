import React from 'react';
import SocialsFooterComponent from './components/socialsFooter.component';

const FooterLayout = () => {
    return(
        <footer className="dsc-footer">
            <h6 className="text-inverse text-center">
                Designicode
            </h6>
            <SocialsFooterComponent/>
            <h6 className="text-inverse text-center">
                | Todos los derechos reservados
            </h6>
        </footer>
    )
}

export default FooterLayout;