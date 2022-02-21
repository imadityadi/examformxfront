import React, { useState } from 'react'
import styled from 'styled-components'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'
import {theme} from '../Theme'


const Accordian = ({ title, children, titleBG, titleFontColor, contentBG, titleBGHover }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleAccordian = () => {
      setIsOpen(!isOpen)
    }
  return (
    <AccWrap isOpen={isOpen} titleBg={titleBG} titleFontColor={titleFontColor} contentBG={contentBG} titleBGHover={titleBGHover}>
   <div onClick={toggleAccordian} className="title_cont">
     <label htmlFor="toggleIcon">{title}</label>
     {
       isOpen?
       <AiOutlineUp size={20}  color={theme.brand} />
       :
       <AiOutlineDown size={20}  color={theme.brand} />
     }
   </div>
   <div className="content_open" aria-expanded={!isOpen}>
     {children}
   </div>
 </AccWrap>
  )
}

export default Accordian

const AccWrap = styled.div`
    display: flex;
  flex-direction: column;
  background: ${theme.white};
  color:  ${({titleFontColor})=> titleFontColor? titleFontColor: theme.brand};
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s ease all;
  font-family: 'Poppins';
  margin: 0.6rem 0;

  :hover {
    background: ${({titleBGHover})=> titleBGHover? titleBGHover: theme.lightWhite100};
    transition: 0.3s ease all;
  }
  .title_cont {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .plus_icon {
      font-size: 1rem;
      font-weight: bold;
  }

  .content_open {
    height: auto;
    display:  ${({isOpen}) => isOpen ? "block" : "none"};
    max-height: 1000px;
    transition: max-height 1s ease-in-out;
    background: ${({contentBG})=> contentBG? contentBG: theme.lightWhite100};
    padding: ${({isOpen}) => isOpen ? "0.5rem" : "0"};
    border-radius: 5px;
    margin-bottom:  ${({isOpen}) => isOpen ? "5px" : "0"};
    transition: 0.3s;
    font-size: 0.8rem;

  }

  .content_open[aria-expanded="true"] {
    max-height: 0px;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  }
`