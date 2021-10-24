import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FilterButton from "../components/FilterButton"
import Header from "../components/Header"
import PostContainer from "../components/PostContainer"
import PostItem from "../components/PostItem"
import SearchBox from "../components/SearchBox"
import {get} from 'firebase/database'
import {data} from '../data'
function DashBoard() {
  const post = <PostItem postTitle="IB ACIO Tier II Result 2021" />
  const [quotes, setQuotes] = useState("")
  const [author, setAuthor] = useState("")
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])

  //  filtering data

  const filterPosts = (data, term) => {
    if (!term) {
        return data;
    }

    return data.filter((item) => {
        const postName = item.Title.toLowerCase();
        return postName.includes(term.toLowerCase());
    });
};

  const filtredJobs = filterPosts(data, searchTerm)


  // getting quotes
  const getQuotes = () => {
    fetch("https://api.quotable.io/random?maxLength=70")
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        if (data.content != null || undefined) {
          setQuotes(data.content)
          setAuthor(data.author)
        }
      })
  }


    const viewh = window.innerHeight;
    const viewW= window.innerWidth;
  

  
  // console.log(data)
  // useEffect(() => {
  //   data.filter(item => {
  //     if(item.Title.toLowerCase().includes(searchTerm.toLowerCase)){
  //       setSearchResult(output=> [...output, item])
  //     }
  //     console.log(searchTerm)
  //     console.log( searchResult);
  //   })
    
  // }, [searchTerm])

  

  useEffect(() => {
    getQuotes()
    
  }, [])

 const fetchJobs = () => {
   const res = get('/').then(() => console.log(res))
    // govpostindia-default-rtdb

   
  }

  return (
    <Wrapper>
      <Header />
      <HeroWrapper>
        <SearchBoxCont>
          <SearchBox 
            value={searchTerm}
            handleChange={(e) => setSearchTerm(e.target.value)}
            />
          <FilterSelectorContainer>
            <FilterButton 
                handleOnClick={() => fetchJobs()}
                btnLabel="Latest Jobs" />
            <FilterButton btnLabel="Result" />
            <FilterButton btnLabel="Admit Card" />
          </FilterSelectorContainer>
        </SearchBoxCont>
        <div>
          <Title>{quotes}</Title>
          <Title>{!quotes ? null : "-" + author}</Title>
        </div>
        {
          viewh <= 812 && searchTerm !== "" && viewW <= 450?
           <ScrollView>
             {
            filtredJobs.map(item => (
              <PostItem 
               postTitle={item.Title} />
  
            ))
            }
            </ScrollView>
          :
          null
        }
      </HeroWrapper>

      <AllPostContainer>
        {
          filtredJobs.map(item => (
            <PostItem 
             postTitle={item.Title} />

          ))
        }
      </AllPostContainer>
    </Wrapper>
  )
}

export default DashBoard

const Wrapper = styled.div`
  background-color: var(--secondry-white);
  height: 100vh;
`
const HeroWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 50vh;
    padding: 0rem 2rem;
    justify-content: space-between;
       background: linear-gradient(237deg, #8160db, #754fdf, #6538e1);
    background-size: 600% 600%;
    &.div {
        display: flex;
        align-items: flex-end;
        padding: 0rem 1rem;

        @media screen and (max-width: 768px) {
        align-items: center;
        
    }

    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: space-evenly;
        height: 25rem;
        padding: 1rem 1rem;
    }
    -webkit-animation: AnimationName 12s ease infinite;
    -moz-animation: AnimationName 12s ease infinite;
    animation: AnimationName 12s ease infinite;
}

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



   


`

const ScrollView = styled.div`
  top: 60%;
  position: absolute;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem 0.5rem ;
  border-radius: 5px;

`

const AllPostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
  transition: 0.5s;
  


  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }
`

const SearchBoxCont = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 60vw;
  @media screen and (max-width: 768px) {
    
    
  }
`

const FilterSelectorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 27vw;
  padding: 1rem 0rem;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`
const Title = styled.p`
  font-size: 1.2rem;
  color: #fff;
  animation: 2s ease-out 0s 1 slideInFromLeft;
  line-height: 40px;
  transition: 0.5s;
  text-align: right;
  text-justify: newspaper;

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`
