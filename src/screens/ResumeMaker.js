import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { theme } from '../Theme'

const ResumeMaker = () => {
    return (
        <>
          <Header/>  
          <HeroWrapper>
                <HeroButton>Build My Resume</HeroButton>
          </HeroWrapper>
        </>
    )
}

export default ResumeMaker

const HeroWrapper = styled.div`
    display: flex;
    height: 80vh;
    background: linear-gradient(237deg, #8160db, #754fdf, #6538e1);
    background-size: 600% 600%;;
    -webkit-animation: AnimationName 5s ease infinite;
    -moz-animation: AnimationName 5s ease infinite;
    animation: AnimationName 5s ease infinite;


    @-webkit-keyframes AnimationName {
    0%{background-position:0% 83%}
    50%{background-position:100% 18%}
    100%{background-position:0% 83%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 83%}
    50%{background-position:100% 18%}
    100%{background-position:0% 83%}
}
@keyframes AnimationName {
    0%{background-position:0% 83%}
    50%{background-position:100% 18%}
    100%{background-position:0% 83%}
}


`

const HeroButton = styled(Link)`
     border-radius: 5px;
    background: ${theme.lightWhite100};
    min-width: 8rem;
    max-width: fit-content;
    max-height: 3rem;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: 0.2s ease;
        background: #fff;
        outline: 1.2px solid var(--primary-violet);
        color: var(--grey);
    }

`
