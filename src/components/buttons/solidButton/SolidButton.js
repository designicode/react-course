import React from 'react';
import StyledSolidButton from './components/StyledSolidButton';

const SolidButton = ({onClick, props, txt, type}) => {
    return (
        <React.Fragment>
            <StyledSolidButton onClick={onClick} {...props} type={type}>{txt}</StyledSolidButton>
        </React.Fragment>
    )
}

export default SolidButton;