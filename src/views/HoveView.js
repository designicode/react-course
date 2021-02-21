import React from 'react';
import SolidButton from '../components/buttons/solidButton/SolidButton';

const HomeView = (props) => {
    return (
        <>
            <h1>{process.env.REACT_APP_ENV}</h1>
            <SolidButton txt="Default Button"/>
            <SolidButton txt="Default Button" type="primary"/>
            <SolidButton txt="Default Button" type="success"/>
            <SolidButton txt="Default Button" type="danger"/>
        </>
    )
}

export default HomeView;