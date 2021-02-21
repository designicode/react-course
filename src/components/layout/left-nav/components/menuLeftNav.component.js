import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuLaftNavComponent = ({props}) => {
    const {menu} = props;
    return (
        <div className="dsc-left-nav-menu">
            <h5 className="dsc-left-nav-menu__title">{menu.title}</h5>
            <ul className="dsc-left-nav-menu__links">
                {
                    menu.links.map((i, index) => {
                        return (
                            <li className="dsc-left-nav-menu__links-link" key={index}>
                                <FontAwesomeIcon icon={i.icon}/>
                                <span>{i.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MenuLaftNavComponent;