import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const BrandLeftNavComponent = ({props}) => {
    const {onShowHideLeftNav, logo} = props;
    return (
        <div className="dsc-left-nav-brand">
            <FontAwesomeIcon icon={faBars} className="dsc-left-nav-brand__menu" onClick={onShowHideLeftNav}/>
            <div className="dsc-left-nav-brand__logo">
                <img src={logo} alt="designicode-logo"/>
                <span>etflix</span>
            </div>
        </div>
    )
}

export default BrandLeftNavComponent;