import React, { useState } from "react"
import styled from "styled-components"
import {NavLink as Link } from "react-router-dom"
import logo from "../assets/images/logo.svg"
import {FaBars} from 'react-icons/fa'
import {MdClose} from 'react-icons/md'

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
          <NavLink to="/post-result/:postId">Results</NavLink>
          <NavLink to="/post-admitcard/:postId">Jobs Release</NavLink>
          <NavLink to="">Admit Card</NavLink>
          {/* <NavLink to="/image-resizer">
            <ShineHeadline>
              Image Resizer
            </ShineHeadline>
            </NavLink> */}
            {
              window.innerWidth < '768px'?
              <NavBtnLink to="/image-resizer" >
              Image Resizer
          </NavBtnLink>
              :
              null
            }
            
        </NavMenu>
        <NavBtn>
        {/* <PrimaryButton
              handleBtn={() => setshowModal(!showModal)}
             btnLabel="Resize Image"
             /> */}
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
        transition: all 0.2s ease-in-out;
        background: #fff;
        border: 1px solid var(--primary-violet);
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
// const Modal = styled.div`
//   position: absolute;
//   background-color: cadetblue;
//   width: 40vw;
//   height: 50vh;
//   left: 50%;
// `

// const ModalContent = styled.div`


// `
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