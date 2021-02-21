import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const BrandHeaderComponent = ({props}) => {
    const {onShowHideLeftNav, logo} = props;
    return (
        <div className="dsc-header__brand">
            <FontAwesomeIcon icon={faBars} className="dsc-header__brand-menu" onClick={onShowHideLeftNav}/>
            <div className="dsc-header__brand-logo">
                <img src={logo} alt="designicode-logo"/>
                <span>etFlix</span>
            </div>
        </div>
    )
}

export default BrandHeaderComponent;