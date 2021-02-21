import React, { useReducer } from 'react';
import LayoutContext from './layout.context';
import { LayoutReducer } from './reducer/layout.reducer';
import { LAYOUT_TYPES } from './types/layout.types';

const LayoutProvider = (props) => {
    const {children} = props;

    const onShowHideLeftNav = () => {
        setState({type: LAYOUT_TYPES.SHOW_HIDE_LEFT_NAV});
    }

    const initialState = {
        show: false,
        logo: 'https://elparche.co/wp-content/uploads/2018/05/netflix-n-logo-png.png',
        onShowHideLeftNav
    };

    const [state, setState] = useReducer(LayoutReducer, initialState);

    return (
        <LayoutContext.Provider value={state}>
            {children}
        </LayoutContext.Provider>
    )
}

export default LayoutProvider;