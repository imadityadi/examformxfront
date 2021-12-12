import React from 'react'
import styled from 'styled-components'
import {ImPointRight} from 'react-icons/im'

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
card2Title
}) {

    const icon = <ImPointRight size={20} color="#754fdf" />
    return (
        <Card>
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
          <div  style={{display: isDate3}}>
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
          </div>
        </Card>
    )
}

export default ContentCard

const Card = styled.div`
    display: flex;
    background: var(--pure-white);
    height: fit-content;
    justify-content: space-evenly;
    flex-direction: row;
    color: black;
    border-radius: 10px;
    padding: 0.5rem 1.5rem;
    margin: 1rem 0rem;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);

    @media(max-width: 768px) {
        flex-direction: column;
    }

    .datacontainer {
        display:flex;
        width: 45%;
        flex-direction: column

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
        p {
        font-size: 0.8rem;
    }

    .value-cont {
            width: 100%;
         }

     .datacontainer {
         width: 100%;
     }    
    }



  
 
`