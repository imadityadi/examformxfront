import React from 'react'
import styled from 'styled-components'
import { theme } from '../Theme'

const InputField = ({type, placeholder, label, value, onChange, id, name}) => {
  return (
    <InputWrap>
        <label htmlFor={id}>{label}</label>
        <input name={name} className='label' id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </InputWrap>
  )
}

export default InputField

const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
    border: 1.5px solid ${theme.brand};
    padding: 5px;
    border-radius: 5px;
    background: ${theme.white};
    margin: 0.4rem 0;
    label {
        user-select: none;
    }

    input {
        outline: none;
        border: none;
        color: ${theme.black};
    }
`