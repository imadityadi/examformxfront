import React from 'react'
import styled from 'styled-components'

function PrimaryButton({btnLabel}) {
    return (
       <Button>
           {btnLabel}
       </Button> 
    )
}

export default PrimaryButton

const Button = styled.button`
    padding: 0.5rem 2rem;
    background: var(--primary-violet);
    border-radius: 10px;
    font-size: medium;
    font-weight: 500;
    border: none;
    color: var(--pure-white);
    cursor: pointer;
`