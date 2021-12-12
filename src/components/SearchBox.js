import React from "react"
import styled from "styled-components"
import { FaSearch } from "react-icons/fa"

function SearchBox({placeholder,handleChange,value}) {
  return (
    <SearchBoxWrapper>
      <input 
        value={value} onChange={handleChange} placeholder={placeholder} type="text" />
      <SearchIcon>
      <FaSearch size={20} color="#fff" />
      </SearchIcon>
    </SearchBoxWrapper>
    
  )
}

export default SearchBox

const SearchBoxWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  align-items: center;
  /* padding: 10px 1rem; */
  width: 60%;
  height: 50px;
  background: var(--pure-white);
  box-shadow: 0px 0px 45px -15px rgba(0,0,0,0.57);
-webkit-box-shadow: 0px 0px 45px -15px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 0px 45px -15px rgba(0,0,0,0.57);
  :focus-within {
    box-shadow: 0px 0px 39px -5px rgba(0,0,0,0.57);
-webkit-box-shadow: 0px 0px 39px -5px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 0px 39px -5px rgba(0,0,0,0.57);
  }

  @media screen and (max-width: 768px) {
        width: 90vw
    }

  input {
    height: 45px;
    border-radius: 10px;
    border: none;
    width: 100%;
    font-size: 24px;
    padding-left: 0.5rem;
    color: var(--grey);
    :focus {
      outline: none;
    }
    
  }

  input::placeholder {
    color: var(--grey);
    font-size: 1rem;
  
  }


  `
const SearchIcon = styled.span`
  background: var(--primary-violet);
  width: 55px;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
` 
