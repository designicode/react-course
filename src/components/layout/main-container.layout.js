import React, { useContext } from 'react';
import LayoutContext from '../../hooks/layout/layout.context';

const MainContainerLayout = (props) => {
    const layout$ = useContext(LayoutContext);
    const { show } = layout$;
    const classContainer = show ?  'dsc-main-container' : 'dsc-main-container-full'
    const {children} = props;
    return(
        <section className={classContainer}>{children}</section>
    )
}

export default MainContainerLayout;