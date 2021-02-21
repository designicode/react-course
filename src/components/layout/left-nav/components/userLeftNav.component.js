import React from 'react';

const UserLeftNavComponent = ({props}) => {
    const {name, avatar, position} = props;
    const avatarStyle = {backgroundImage : `url(${avatar})`};
    return (
        <div className="dsc-left-nav-usr">
            <div className="dsc-left-nav-usr__avatar" style={avatarStyle}></div>
            <h4 className="dsc-left-nav-usr__name">{name}</h4>
            <h6 className="dsc-left-nav-usr__position">{position}</h6>
        </div>
    )
}

export default UserLeftNavComponent;