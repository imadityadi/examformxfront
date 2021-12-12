import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "../components/Header"
import PostItem from "../components/PostItem"
import SearchBox from "../components/SearchBox"
import Loader from "react-loader-spinner"


import {
  collection,
  query,
  getDocs,
  where,
  orderBy,
  limit,
} from "firebase/firestore"
import { db } from "../config/firebase"


function DashBoard() {
  const [quotes, setQuotes] = useState("")
  const [author, setAuthor] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [latestJobData, setlatestJobData] = useState([])
  const [currentShowing, setCurrentShowing] = useState("Latest Jobs")
  const [loading, setLoading] = useState(false)
  const [isTrue, setIsTrue] = useState(false)
  const [admitCardDataArr, setAdmitCardDataArr] = useState([])
  const [admissionArr, setAdmissionArr] = useState([])
  
  // Search STATE
  const [searchPrg, setSearchPrg] = useState(false)
  const [suggestions, setSuggestions] = useState([])


  
  //  filtering data

  // const filterPosts = (data, term) => {
  //   if (!term) {
  //     return data
  //   }

  //   return data.filter(item => {
  //     const postName = item.Title.toLowerCase()
  //     return postName.includes(term.toLowerCase())
  //   })
  // }

  
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



  // Filter Btn Click

  const filterBtnClick = type => {
    if (type == "Latest Jobs") {
      setActive(type)
      getJobData("oldJobData")
      setCurrentShowing("Latest Jobs")
    } else if (type == "Admission") {
      console.log(type)
      setActive(type)
      setCurrentShowing("Admission")
    } else if (type == "Admit Card") {
      setActive(type)
      setCurrentShowing("Admit Card")
      getAdmitCard('oldJobData')
    }
  }

  // Getting  Main Content

  const getJobData = async callName => {
    setLoading(true)
    const jobRef = collection(db, callName)
    const q = query(jobRef, 
      where("category", "==", "examform"), orderBy('lastModified', 'desc'), limit(25))
    try {
      const serverData = await getDocs(q)
      setLoading(false)
      // serverData.docs.map(change => console.log(change.data()))
      setlatestJobData(
        serverData.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      )
      // gotdata =  serverData.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      // console.log("calling data from server")
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  // fetching admit card
  
  const getAdmitCard = async callName => {
    setLoading(true)
    const jobRef = collection(db, callName)
   
    const q = query(jobRef,  where("category", "==", "admitcard"), orderBy('lastModified', 'desc'), limit(25))
    try {
      const serverData = await getDocs(q)
      setLoading(false)
      setAdmitCardDataArr(
        serverData.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      )
      // gotdata =  serverData.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      // console.log("calling data from server")
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }
  // Fetching Dimension for conditional rendring


  useEffect(() => {
    let isfetched = false;
    getQuotes()
    if(!isfetched){
      getJobData('oldJobData')
    }
    return () => {
      isfetched = true;
    }
  }, [])

  

 

  
  useEffect(() => {
    if (searchTerm.length >= 3) {
      setTimeout(() => {
        fetchSearchQuery()
      }, 1200);
        
    }else{
      setSuggestions([])
    }
  }, [searchTerm])

 

  // Styles for tab

  const Tab = styled.button`
    background: var(--secondry-white);
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    color: var(--grey);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.58);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.58);

    ${({ active }) =>
      active &&
      `
    transition: 0.5s;
    color: #fff;
    border-radius: 5px;
    opacity: 1;
    border: 2px solid white;
    background: var(--primary-violet);
  `}
    &:hover {
      transition: 0.9s;
      background: var(--primary-violet);
      color: var(--pure-white);
    }
  `
  const types = ["Admit Card", "Latest Jobs", "Admission"]
  const [active, setActive] = useState(types[1])

  // handling search on change 

  // function onSearchTextChange (event, {newValue}) {
  //   setSearchQuery(newValue)
  // }


  // search function 
    // https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/cities/LA




  const fetchSearchQuery = async () => {
    let filteredData
    const jobRef = collection(db, "oldJobData")
    const q = query(
      jobRef,
      where(
        "searchableKeywords",
        "array-contains",
         searchTerm.trim().toLowerCase()
      )
    )
    try {
      setSearchPrg(true)
      const suggestionData = await getDocs(q)
      filteredData = suggestionData.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }))
      console.log('calling search')
      setSuggestions(filteredData)
      if(suggestions){
        setIsTrue(!isTrue)
      }
      setSearchPrg(false)
    } catch (error) {
      setSearchPrg(false)
      console.error(error)
    }
  
    return filteredData
  }
  
  //************************************************** */ 
  


  return (
    <Wrapper>
      <Header />
      <HeroWrapper>
        <SearchBoxCont>
          <SearchBox
            placeholder="Search Instantly..."
            value={searchTerm}
            handleChange={e => setSearchTerm(e.target.value)}
          />
          {
            searchTerm.length >= 2 &&  
            <ScrollView>
            {
              !searchPrg?
              suggestions.map((item, index) => (
                <PostItem
                  link={`Post/:${item.id}`}
                  key={index}
                  postTitle={item.nameOfPost}
                />
              ))
              :
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Loader type="Oval" color="#754fdf" height={32} width={32}/>
              </div>

            }
          </ScrollView>

          }
         
          
          <FilterSelectorContainer>
            {types.map(type => (
              <Tab
                key={type}
                active={active === type}
                onClick={() => filterBtnClick(type)}
              >
                {type}
              </Tab>
            ))}
          </FilterSelectorContainer>
        </SearchBoxCont>
        <div>
          <Title>{quotes}</Title>
          <Title>{!quotes ? null : "-" + author}</Title>
        </div>
      </HeroWrapper>
      <HeadingCont>
        <ShineHeadline>{currentShowing}</ShineHeadline>
      </HeadingCont>
      {!loading  ?  (
        currentShowing === 'Latest Jobs'?
        <AllPostContainer>
          {latestJobData.map((item, index) => (
            <PostItem
              key={index}
              link={`Post/:${item.id}`}
              postTitle={item.nameOfPost}
            />
          ))}
        </AllPostContainer>
        :
        currentShowing === 'Admission'?
        <AllPostContainer>
           {admissionArr.map((item, index) => (
            <PostItem
              key={index}
              link={`Post/:${item.id}`}
              postTitle={item.nameOfPost}
            />
          ))}
        </AllPostContainer>
        :
        currentShowing === 'Admit Card'?
        <AllPostContainer>
         {admitCardDataArr.map((item, index) => (
            <PostItem
              key={index}
              link={`Post/:${item.id}`}
              postTitle={item.nameOfPost}
            />
          ))}
        </AllPostContainer>
        :
        null
      ) : (
        <AllPostContainer>
          <Loader
            type="Oval"
            color="#754fdf"
            height={50}
            width={50}
            timeout={4000} 
          />
        </AllPostContainer>
      )}
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
  top: 4rem;
  position: absolute;
  overflow-y: auto;
  min-width: 55%;
  height: 15rem;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 1rem 0.1rem;
  border-radius: 5px;
  transition: 0.3s;
  box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.52);
  -webkit-box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.52);
  
  
  @media screen and (max-width: 768px) {
    min-width: unset;
    left: 0.1rem;
    right: 0.1rem;
    z-index: 10;
  }

`

const AllPostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
  transition: 0.5s;
  
  @media screen and (max-width: 768px) {
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
  position: relative;
  z-index: 0;
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
const ShineHeadline = styled.h2`
  color: var(--primary-violet);
  font-size: 1.5rem;
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
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 1.5rem;
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`

const HeadingCont = styled.div`
  box-shadow: 0px -3px 8px -4px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px -3px 8px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px -3px 8px -4px rgba(0, 0, 0, 0.75);
  border-bottom: 2px solid var(--primary-violet);
  display: "flex";
  text-align: center;
  padding-top: "1.5rem";
  justify-content: center;
  align-items: center;
`


