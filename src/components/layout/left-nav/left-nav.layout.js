import React, { useContext } from 'react';
import UserLeftNavComponent from './components/userLeftNav.component';
import { LEFT_NAV_MENUS } from './constants/left-nav.const';
import MenuLaftNavComponent from './components/menuLeftNav.component';
import BrandLeftNavComponent from './components/brandLeftNav.component';
import LayoutContext from '../../../hooks/layout/layout.context';
import UserContext from '../../../hooks/user/user.context';

const LeftNavLayout = () => {
    const layout$ = useContext(LayoutContext);
    const user$ = useContext(UserContext);
    const { show } = layout$;
    return(
        <React.Fragment>
            { show &&
                <nav className="dsc-left-nav">
                    <BrandLeftNavComponent props={layout$}/>
                    <UserLeftNavComponent props={user$}/>
                    {
                        LEFT_NAV_MENUS.map((i, index) => {
                            return <MenuLaftNavComponent props={{menu: i}} key={index}/>
                        })
                    }
                </nav>  
            }
        </React.Fragment>
    )
}

export default LeftNavLayout;