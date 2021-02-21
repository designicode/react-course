import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialsFooterComponent = () => {
    return (
        <div className="dsc-footer__socials">
            <FontAwesomeIcon icon={faFacebook} className="dsc-footer__socials-social"/>
            <FontAwesomeIcon icon={faYoutube} className="dsc-footer__socials-social"/>
            <FontAwesomeIcon icon={faTwitter} className="dsc-footer__socials-social"/>
        </div>
    )
}

export default SocialsFooterComponent;