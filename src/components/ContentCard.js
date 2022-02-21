import React, { useState } from 'react'
import styled from 'styled-components'
import {ImPointRight} from 'react-icons/im'
import {FaSortDown, FaSortUp} from 'react-icons/fa'

function ContentCard({content, cardTitle, pointOneTitle,
    pointOneValue,
    pointTwoTitle,
    pointTwoValue,
    pointThreeTitle,
    pointThreeValue,
    pointFourTitle,
    pointFourValue,
    isTitle1,
    isTitle2,
    isTitle3,
    isTitle4,
    isDate1,
isDate2,
isDate3,
date1Title,
date2Title,
date3Title,
date4Title,
isDate4,
date1Value,
date2Value,
date3Value,
date4Value,
card2Title,
docReq,
otherDates,
otherFeeDetails
}) {

    const icon = <ImPointRight size={20} color="#754fdf" />
    const documentReq = 'Photo, sign, aadhar, cast'
    let   feeNote = 'SC / ST / PH / Saharia: 60/'

    const [showFullDetails, setShowFullDetails] = useState(false)

    function toggleFullDetails () {
        setShowFullDetails(!showFullDetails)
    }
    return (
        <Card>
          <CardContainer> 
          <div className='datacontainer'>
          <h4>{cardTitle}</h4>
          <div  className="value-cont" style={{display: isDate1}}>
              <div className="icon-title-cont">
             <p className="titleLabel"> {`${date1Title}`}</p>
             {icon}
              </div>

             <p> {date1Value}</p>
          </div>
          <div className="value-cont" style={{display: isDate2}}>
          <div className="icon-title-cont">
             <p id="lastDate" className="titleLabel">{date2Title}</p>
             {icon} 
             </div>
             <p id="lastdate" > {date2Value}</p>
          </div>
          <div  className="value-cont" style={{display: isDate3}}>
             <div className="icon-title-cont">
             <p className="titleLabel"> {date3Title}</p>
             {icon}
             </div>
             <p> {date3Value}</p>
          </div>
          <div className="value-cont" style={{display: isDate4}}>
          <div className="icon-title-cont">
             <p className="titleLabel"> {date4Title}</p>
              {icon} 
              </div>
             <p className=""> {date4Value} </p>
          </div>
          </div>
          {/* 2nd */}
          <div className='datacontainer'>
          <h4>{card2Title}</h4>
          <div  className="value-cont" style={{display: isTitle1}}>
          <div className="icon-title-cont">
             <p className="titleLabel"> {`${pointOneTitle}`}</p>
             {icon}
             </div>
             <p> {pointOneValue}</p>
          </div>
          <div  className="value-cont"style={{display: isTitle2}}>
            <div className="icon-title-cont">
             <p id="" className="titleLabel">{pointTwoTitle}</p>
             {icon}
             </div>
             <p > {pointTwoValue}</p>
          </div>
          <div className="value-cont" style={{display: isTitle3}}>
            <div className="icon-title-cont">
             <p className="titleLabel"> {pointThreeTitle}</p>
             {icon}
             </div>
             <p> {pointThreeValue}</p>
          </div>
          {/* <div className="value-cont" style={{display: isTitle4}}>
          <div style={{
              width: '20%',
              display: 'flex',
              alignItems:"center",
              justifyContent: "space-between"
          }}>

             <p className="titleLabel"> {pointFourTitle}</p>
             {icon}
             </div>
             <p className="pointfourval"> {pointFourValue}</p>
          </div> */}
          {/* <div className="note-container">
              <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, labore deleniti. Natus, provident veritatis asperiores dolorum eos consequuntur nulla vero pariatur sed voluptates cupiditate alias eligendi deserunt adipisci perspiciatis blanditiis!
              </p>
          </div> */}
          </div>
          </CardContainer>

              <>
              <OtherDetailTitle onClick={toggleFullDetails}>Other Useful Details

                        <div style={{transform:showFullDetails?  'rotate(180deg)': ' rotate(0deg)'}} className='downicon'>
                        <FaSortDown  onClick={toggleFullDetails} className='downicon' size={25} color="#754fdf" /> 

                        </div>
              </OtherDetailTitle>
              
          <OtherDetailsCard style={{maxHeight: showFullDetails? '100rem': '0rem', }}>

              {
                  docReq === undefined || otherDates === undefined || otherFeeDetails === undefined ?
                  <p style={{textAlign: 'center'}}>
                      Other Details Not Available
                  </p>
                  :
               <>
                 <div className='content_details'>
                  <strong>Document Required</strong>
                    <div dangerouslySetInnerHTML={{ __html: docReq }}>

                    </div>
              </div>
              <div  className='content_details'>
              <strong>Dates</strong>
              <div dangerouslySetInnerHTML={{ __html: otherDates }}>

                </div>
              </div>
              <div  className='content_details'>
              <strong>Other Fee</strong>
              <div dangerouslySetInnerHTML={{ __html: otherFeeDetails }}>
                    
                </div>
              </div>
               </>   
              }
             
          </OtherDetailsCard>
              </>
        </Card>
    )
}

export default ContentCard

const Card = styled.div`
    display: flex;
    background: var(--pure-white);
    height: fit-content;
    justify-content: space-evenly;
    /* align-items: center; */
    flex-direction: column;
    color: black;
    border-radius: 10px;
    padding: 0.5rem 1.5rem;
    margin: 1rem 0rem;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);



  


  
 
`

const CardContainer = styled.div`
     display: flex;
    background: var(--pure-white);
    height: fit-content;
    justify-content: space-between;
    flex-direction: row;
    color: black;
    border-radius: 10px;
    padding: 0.5rem 1.5rem;
    margin: 1rem 0rem;

    @media(max-width: 768px) {
        flex-direction: column;
    }

    .datacontainer {
        display:flex;
        width: 45%;
        flex-direction: column;

    }
    
    #lastdate {
        color: red;
        font-weight: 500;
    }

    h4 {
        color: var(--primary-purp);
        border-bottom: 2px solid var(--primary-violet);
        text-align: center;
       padding-bottom: 0.5rem;
    }

    .value-cont {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
    }
    .value-cont p {
        font-size: 1rem;
        width: 5rem;
    }
    

    .titleLabel{
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 1rem;
    }

    .icon-title-cont {
        width: 50%;
        display: flex;
        align-items:center;
        justify-content: space-between;
   
    }

    .pointfourval {
        font-size: 0.8rem;
        background: cyan;
        width: 45%;
    }
    

    @media(max-width: 768px) {
        .titleLabel{
        font-weight: '500';
        font-size: 0.9rem;
    }
    .value-cont p {
        font-size: 0.8rem;
        width: 5rem;
    }

    .value-cont {
            width: 100%;
         }

     .datacontainer {
         width: 100%;
     }  
     
     .note-container {
         position: absolute;
         width: 100%;
     }
    }

`
const OtherDetailsCard = styled.div`
    display: flex;
    background: var(--pure-white);
    height: fit-content;
    justify-content: space-evenly;
    flex-direction: row;
    overflow: hidden;
    color: #fff;
    width: 95%;
    /* height: fit-content; */
    /* min-height: fit-content; */
    /* border: 2px solid var(--primary-violet); */
    border-radius: 5px;
    background: var(--primary-violet);
    margin: 0 2rem;
    transition: max-height 500ms ease;
    div {
        height: fit-content;
    }
    @media (max-width: 768px){
        flex-direction: column;
        margin: 0;
        /* min-height: 100%; */
    }

    .content_details {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0.5rem;
        width: 30%;
        min-width: 30%;
        @media (max-width: 768px){
            width: 90%;
            min-width: unset;
        }
    }
    .content_details strong {
        text-align: center;
    }
`
const OtherDetailTitle = styled.h4`
    padding: 0rem 2rem;
    cursor: pointer;
    .downicon {
  float: right;
cursor: pointer;
transition: 1s ease;

       
    }
`