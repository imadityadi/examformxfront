import React from "react"
import styled from "styled-components"

function PostContainer({ children, postCategory }) {
  return (
    <PostWrapper>
      <PostCategoryCont>
        <Title>{postCategory}</Title>
      </PostCategoryCont>
      <PostListCont>{children}</PostListCont>
    </PostWrapper>
  )
}

export default PostContainer

const PostWrapper = styled.div`
  width: 30%;
  border-radius: 10px;
  background: var(--pure-white);
  box-shadow: 0px 0px 26px 0px rgba(117, 79, 223, 0.34);
  -webkit-box-shadow: 0px 0px 26px 0px rgba(117, 79, 223, 0.34);
  -moz-box-shadow: 0px 0px 26px 0px rgba(117, 79, 223, 0.34);

  @media screen and (max-width: 768px){
      width: 90%;
      margin: 1rem 0rem
  }
`

const PostCategoryCont = styled.div`
    border-bottom: 2px solid var(--primary-violet);
`

const Title = styled.h1`
    font-size: 18px;
    color: var(--primary-violet);
    text-align: center;
`

const PostListCont = styled.div``
