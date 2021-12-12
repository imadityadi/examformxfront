import React from 'react'
import styled from 'styled-components'
import {BsChevronDoubleRight} from 'react-icons/bs'
import { Link} from 'react-router-dom'
function PostItem({postTitle, link}) {
    return (
            <PostLink to={link}>
            <PostItemCont>
                {postTitle}
            </PostItemCont>
            <BsChevronDoubleRight size={20} color='#754FDF' />
            </PostLink>
    )
}

export default PostItem

const PostItemCont = styled.div`
   
`

const PostLink = styled(Link)`
    font-size: 0.9rem;
    text-decoration: none;
    color: var(--grey);
    display: flex;
    background: var(--pure-white);
    height: fit-content;
    width: 20rem;
    border: 1px solid var(--grey);
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;
    padding: 0.9rem 1rem;
    transition: 0.5s;
    margin-bottom: 1rem;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
    &:hover{
        /* font-size: 0.99rem; */
        transition: 0.5s;
        color: var(--primary-violet)
    }
    @media screen and (max-width: 768px){
        width: 17.5rem;
    }

`