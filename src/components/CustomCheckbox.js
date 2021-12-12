import React from "react"
import styled from 'styled-components'

function CustomCheckbox({checkLabel}) {
  return (
    <CheckBoxContainer className="container">
      {checkLabel}
      <ToggleSwitch className="toggle-switch">
        <Checkbox type="checkbox" className="checkbox" 
               name={checkLabel} id={checkLabel} />
        <Label className="label" htmlFor={checkLabel}>
          <span className="inner" />
          <span className="switch" />
        </Label>
      </ToggleSwitch>
    </CheckBoxContainer>
  )
}

export default CustomCheckbox
const CheckBoxContainer = styled.div`
    
`

const Checkbox = styled.input`
position: absolute;
display: none;

`
const ToggleSwitch = styled.div`
  position: relative;
  width: 75px;
  display: inline-block;
  text-align: left;
  top: 8px;
`

const Label = styled.label`
   display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #bbb;
  border-radius: 20px;
  inner {
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
}
&.inner::before,
&.inner::after {
  float: left;
  width: 50%;
  height: 36px;
  padding: 0;
  line-height: 36px;
  color: #fff;
  font-weight: bold;
  box-sizing: border-box;
}
&.inner::before {
  content: "YES";
  padding-left: 10px;
  background-color: #060;
  color: #fff;
}
&.inner::after {
  content: "NO";
  padding-right: 10px;
  background-color: #bbb;
  color: #fff;
  text-align: right;
}

switch {
  display: block;
  width: 24px;
  margin: 5px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  border: 0 solid #bbb;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
}
&.checkbox:checked + .label .inner {
  margin-left: 0;
}
&.checkbox:checked + .label .switch {
  right: 0px;
}
`
