import React, { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocFromServer } from "firebase/firestore"
import { db } from "../config/firebase"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Header from "../components/Header"
import { isWebUri } from "valid-url"
import PrimaryButton from "../components/PrimaryButton"
import ContentCard from "../components/ContentCard"
import Loader from "react-loader-spinner"

function PostDetails() {
  const [serverDataArr, setServerDataArr] = useState("")
  const [currPostId, setCurrPostId] = useState("")
  const { postId } = useParams()
  const [applyLinkUrl, setApplyLinkUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [isUrl, setIsUrl] = useState(false)
  //  Job Fetching Func

  const getJobData = async id => {
    setLoading(true)
    const coll = collection(db, "/oldJobData/")
    const docRef = doc(coll, id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data())
      setServerDataArr(docSnap.data())
      console.log(serverDataArr)
      setLoading(false)
    } else {
      setLoading(false)

      // doc.data() will be undefined in this case
      console.log("No such document!")
    }
  }

  // Url checking

  const checkURL = () => {
    if (!isWebUri(serverDataArr.applylink)) {
      setIsUrl(false)
    } else {
      setIsUrl(true)
    }
  }

  useEffect(() => {
    checkURL()
  }, [serverDataArr.applylink])

  //   console.log(applyLinkUrl)
  console.log(serverDataArr.applylink)

  useEffect(() => {
    let tempPostId = postId.split(":")[1]
    setCurrPostId(tempPostId)
    console.log(currPostId)
    getJobData(tempPostId)
  }, [])

  return (
    <>
      {!loading ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <JobBar>
            <PostNameCont>
              <h1>
                {serverDataArr == "" ? "loading" : serverDataArr.nameOfPost}
              </h1>
              <p style={{color: 'red'}}>{`Last Date: ${serverDataArr.applyLastDate}`}</p>
            </PostNameCont>
            <div>
              <ApplyOnlineBtn target="_blank" href={isUrl ? serverDataArr.applylink : null}>{!isUrl ? serverDataArr.applylink : "Apply Online"}
              </ApplyOnlineBtn>
            </div>
          </JobBar>

          <DetailWrapper>
            {/* <ContentCard
              isTitle1={serverDataArr.applyStartDate != "" ? "" : "none"}
              isTitle2={serverDataArr.applyLastDate != "" ? "" : "none"}
              isTitle3={serverDataArr.lastDateRegister != "" ? "" : "none"}
              isTitle4={serverDataArr.lastdateforfeepay != "" ? "" : "none"}
              cardTitle="Important Dates"
              pointOneTitle="Apply Start"
              pointOneValue={serverDataArr.applyStartDate}
              pointTwoTitle="Last Date"
              pointTwoValue={serverDataArr.applyLastDate}
              pointFourTitle="Last Date to Pay Fee"
              pointFourValue={serverDataArr.lastdateforfeepay}
            /> */}
            

            {/* isTitle1={serverDataArr.applyStartDate != "" ? "" : "none"}
              isTitle2={serverDataArr.applyLastDate != "" ? "" : "none"}
              isTitle3={serverDataArr.lastDateRegister != "" ? "" : "none"}
              isTitle4={serverDataArr.lastdateforfeepay != "" ? "" : "none"} 
              date1Value={serverDataArr.generalFees}
              date2Title="OBC Fee"
              date2Value={serverDataArr.obcFees}
              date3Title="SC/ST Fee"
              date3Value={serverDataArr.scstFees}
              date4Title="Note"
              date4Value={serverDataArr.feeNotes}
              
              
              */
              
              
              }

            <ContentCard
              isDate1={serverDataArr.applyStartDate != "" ? "" : "none"}
              isDate2={serverDataArr.applyLastDate != "" ? "" : "none"}
              isDate3={serverDataArr.lastDateRegister != "" ? "" : "none"}
              isDate4={serverDataArr.lastdateforfeepay != "" ? "" : "none"}
              isTitle1={serverDataArr.generalFees != "" ? "" : "none"}
              isTitle2={serverDataArr.obcFees != "" ? "" : "none"}
              isTitle3={serverDataArr.scstFees != "" ? "" : "none"}
              isTitle4={serverDataArr.feeNotes != "" ? "" : "none"} 
              pointOneTitle="General Fee"
              pointOneValue={serverDataArr.generalFees}
              pointTwoTitle="OBC Fee"
              pointTwoValue={serverDataArr.obcFees}
              pointThreeTitle="SC/ ST Fee"
              pointThreeValue={serverDataArr.scstFees}
              pointFourTitle="Note"
              pointFourValue={serverDataArr.feeNotes}
              cardTitle="Important Date "
              card2Title="Fee Details"
              date1Title="Apply Start"
              date1Value={serverDataArr.applyStartDate}
              date2Title="Last Date"
              date2Value={serverDataArr.applyLastDate}
              date3Title="Last Date to Register"
              date3Value={serverDataArr.lastDateRegister}
              date4Title="Last Date to Pay Fee"
              date4Value={serverDataArr.lastdateforfeepay}
            />
          </DetailWrapper>

          <Content
            dangerouslySetInnerHTML={{ __html: serverDataArr.editorcontent }}
          ></Content>
        </div>
      ) : (
        <LoadingContainer>
          <Loader
            type="Oval"
            color="#754fdf"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </LoadingContainer>
      )}
    </>
  )
}

export default PostDetails

const DetailWrapper = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  background: #fff;
  padding: 1.5rem 0rem;
  margin: 0rem 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`
const JobBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  margin: 1rem;
  padding: 1.5rem 0.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const PostNameCont = styled.div`
  width: 60%;
  

  h1 {
    font-size: 1.5rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

const PostDetailsCont = styled.div`
  display: flex;
  height: fit-content;
  align-items: center;
  background: #fff;
  width: 100vw;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    overflow: scroll;
  }
  h2 {
    color: var(--primary-violet);
    font-size: 1.2rem;
  }
  table {
    /* width: 750px;  */
    border-collapse: collapse;
    /* margin:50px auto; */
    @media (max-width: 768px) {
    }
  }

  /* Zebra striping */
  tr:nth-of-type(odd) {
    background: #eee;
  }

  th {
    background: #3498db;
    color: #754fdf;
    font-weight: bold;
  }

  td,
  th {
    padding: 8px;
    border: 1px solid #ccc;
    text-align: left;
    font-size: 1rem;
    li {
      list-style-type: none;
    }
  }
`

const JobHeader = styled.div`
  display: flex;
  flex-direction: row;
`

const LoadingContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const ApplyOnlineBtn = styled.a`
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

`