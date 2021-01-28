import React from 'react';
import styled from 'styled-components';
import PropTypes, { checkPropTypes } from 'prop-types';

const InputBase = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "palevioletred"};
    background: #e3f2fd;
    border: 1px solid #1e88e5;
    border-radius: 3px;
    margin: 1px 35px;
    width:80%;
`;

export default function Input(props){
    return(
        <div>
            <InputBase placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    );
}

Input.defaultProps = {
    value : ''

}

Input.prototypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  
}