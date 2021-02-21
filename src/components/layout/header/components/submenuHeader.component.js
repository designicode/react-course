import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComment } from '@fortawesome/free-solid-svg-icons';

const SubmenuHeader = ({props}) => {
    const {avatar} = props;
    const avatarStyle = {backgroundImage : `url(${avatar})`};
    return (
        <div className="dsc-header__submenu">
            <FontAwesomeIcon icon={faBell} className="dsc-header__submenu-icon"/>
            <FontAwesomeIcon icon={faComment} className="dsc-header__submenu-icon"/>
            <div className="dsc-header__submenu-usr" style={avatarStyle}></div>
        </div>
    )
}

export default SubmenuHeader;