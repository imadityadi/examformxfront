import React, { useState } from "react"
import styled from "styled-components"
import {NavLink as Link } from "react-router-dom"
import logo from "../assets/images/logo.svg"
import {FaBars} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'
import { theme } from "../Theme"

function Header() {
  const [toggleMenu, showToggleMenu] = useState(false);
  return (
    <>
      <Nav>
        <NavLink to="" >
          <img src={logo} alt="logo" />
        </NavLink>
        {
            !toggleMenu?
            <Hamburger onClick={() => showToggleMenu(!toggleMenu)} />
            :
            <CloseBtn onClick={() => showToggleMenu(!toggleMenu)} />
        }
        <NavMenu className={!toggleMenu? '': "showPanel"} >
          <NavLink to="/">Home</NavLink>
          <NavLink to="#Admission">Admission</NavLink>
          <NavLink to="#Latest Jobs">Jobs Release</NavLink>
          <NavLink to="#Admit Card">Admit Card</NavLink>
          {/* <NavLink to="/image-resizer">
            <ShineHeadline>
              Image Resizer
            </ShineHeadline>
            </NavLink> */}
           
              <MenuBtnLink to="/image-resizer" >
              Image Resizer
          </MenuBtnLink>
        </NavMenu>
        <NavBtn>
        {/* <PrimaryButton
              handleBtn={() => setshowModal(!showModal)}
             btnLabel="Resize Image"
             /> */}
            <MainButton variant="outline" to="/resume" >
                Make Resume
            </MainButton>
            <NavBtnLink to="/image-resizer" >
                Image Resizer
            </NavBtnLink>
           
        </NavBtn>
      </Nav>
           </>
  )
}

export default Header

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: var(--pure-white);
  height: 80px;
  z-index: 5;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
`


const NavMenu = styled.div`
  display: flex;
  align-items: center;
  transition: 0.5s; 
  @media screen and (max-width: 768px) {
      transition: 2s;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 80px;
      left: -1000px;
      justify-content: center;
      align-items: center;
      height: 200px;
      width: 100vw;
      background: var(--primary-violet);
  }
  &.showPanel {
      transition: 0.8s;
      display:  flex;
      flex-direction: column;
      position: absolute;
      top: 80px;
      left: 0px;
      justify-content: center;
      align-items: center;
      height: 250px;
      width: 100vw;
      z-index: 99;
      padding-bottom: 1rem;
      background: var(--primary-violet);
  }

`
const NavLink = styled(Link)`
  display:flex;
  font-size: 1rem;
  color: var(--grey);
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;  
  cursor: pointer;
  height: 100%;
  text-transform: uppercase;
  :hover {
    transition: 0.5s;
    color: var(--primary-violet);
  }
  &.active {
     
  }

  img {
      padding: 0rem 1rem;
      height: 60px;
  }

  @media screen and (max-width: 768px) {
      color: var(--pure-white)
  }
`

const Hamburger = styled(FaBars)`
    display: none;
    color: var(--primary-violet);
    transition: 1s ease;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        right: 0;
        padding: 0rem 1rem;
        font-size: 1.8rem;
        cursor: pointer;
    }
`
const CloseBtn = styled(MdClose)`
    display: none;
    color: var(--primary-violet);
    transition: 1s ease;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        right: 0;
        padding: 0rem 1rem;
        font-size: 1.8rem;
        cursor: pointer;
    }
`

const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px){
        display: none;
    }
`

const NavBtnLink = styled(Link)`
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
        transition: 0.2s ease-in-out;
        background: #fff;
        outline: 1.5px solid var(--primary-violet);
        color: var(--grey);
    }

    @media(max-width: 768px) {
      background: #fff;
      color: black;
      &:hover{
        transition:none;
        background: #fff;
        border: #fff;
        color: black;
    }
    }
`


const MenuBtnLink = styled(Link)`
   display: none;

    @media(max-width: 768px) {
      display: block;
      border-radius: 5px;
    background: white;
    padding: 10px 22px;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        border: 1px solid var(--primary-violet);
        color: #000;
    }

  }

`

const ShineHeadline = styled.h2`
  color: var(--primary-violet);
  font-size: 1rem;
  color: var(--grey);
  text-transform: uppercase;
  cursor: pointer;
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #754fdf 0%,
    #754fdf 29%,
    #755fdf 67%,
    #ffff 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: inline-block;
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`
const MainButton = styled(Link)`
  background: ${({variant}) => variant === "outline"? '#fff' : theme.brand};
  color: ${({variant}) => variant === "outline"? theme.brand : theme.white};
  padding: 0.5rem 0.6rem;
  margin-right: 10px;
  max-height: 3rem;
  width: 8rem;
  font-size: 1.1rem;
  font-weight: 400;
  border-radius: 8px;
  border: ${({variant}) => variant === "outline"? `1.5px solid ${theme.brand}` : "none"};
  cursor: pointer;
  font-family: Poppins;
  transition: 0.2s ease;
  text-decoration: none;

  :hover {
    background: ${theme.brandHover};
    transition: 0.2s ease;
    color: ${({variant}) => variant === "outline"? theme.white : theme.white};

  }
  :active {
    background: ${theme.brandActive};
    transition: 0.2s ease;
    outline: 1px solid ${theme.lightWhite100};
  }

  
`