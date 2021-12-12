import React from "react"
import Header from "../components/Header"
import styled from 'styled-components'

function ResultView() {
  return (
    <>
      <Header />
      <div style={{}}>
        <HeadingContainer>
        <h1>Railway RRB NTPC Varoius Post All Phase I Result Date & Phase II Exam Date 2021</h1>
        </HeadingContainer>
      </div>
    </>
  )
}

export default ResultView

const HeadingContainer = styled.title`
    display: flex;
    background-color: rebeccapurple;
    align-items: center;

    h1 {
        margin: 0 5%;
        font-size: 2rem;
    }
`

const ImportantDatesBox = styled.article`
    
`