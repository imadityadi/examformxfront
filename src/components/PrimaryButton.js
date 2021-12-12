import React from 'react'
import styled from 'styled-components'

function PrimaryButton({btnLabel, handleBtn}) {
    return (
       <Button onClick={handleBtn}>
           {btnLabel}
       </Button> 
    )
}

export default PrimaryButton

const Button = styled.button`
    border-radius: 5px;
    background: var(--primary-violet);
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        border: 1px solid var(--primary-violet);
        color: var(--grey);
    }
`