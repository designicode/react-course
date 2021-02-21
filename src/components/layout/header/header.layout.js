import React, { useContext } from 'react';
import BrandHeaderComponent from './components/brandHeader.component';
import SubmenuHeader from './components/submenuHeader.component';
import LayoutContext from '../../../hooks/layout/layout.context';
import UserContext from '../../../hooks/user/user.context';

const HeaderLayout = () => {
    const layout$ = useContext(LayoutContext);
    const user$ = useContext(UserContext);
    return(
        <header className="dsc-header">
            <BrandHeaderComponent props={layout$}/>
            <SubmenuHeader props={user$}/>
        </header>
    )
}

export default HeaderLayout;