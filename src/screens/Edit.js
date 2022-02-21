import React, { useState } from "react"
import styled from "styled-components"
import Header from "../components/Header"
import { ImLocation, ImLink } from "react-icons/im"
import { MdLocalPhone, MdEmail } from "react-icons/md"
import { BsCalendar, BsDot } from "react-icons/bs"
const Edit = () => {
  const initalState = {
    fullName: "Aditya Singh",
    mobNum: "9117423989",
  }

  const [fullName, setFullName] = useState(initalState.fullName)
  const [mobNum, setMobNum] = useState(initalState.mobNum)
  const [email, setEmail] = useState("imadityadi@gmail.com")
  const [socialLink, setSocialLink] = useState("github.com/imadityadi")
  const [address, setAddress] = useState("Patna, Bihar, India")
  const [universityName, setUniversityName] = useState(
    "University/College Name"
  )
  const [yearOfPassing, setYearOfPassing] = useState("2018-2021")
  const [uniMarks, setUniMarks] = useState("70%")
  const [degreeName, setDegreeName] = useState("Bachelor's in computer science")
  const [schoolName, setSchoolName] = useState('School Name')
  const [matric, setMatric] = useState('10th')
  const [matricDate, setMatricDate] = useState('2016')
  const [matricMarks, setMatricMarks] = useState('10CGPA')
  const [highSchoolName, setHighSchoolName] = useState('High School Name')
  const [inter, setInter] = useState('12th')
  const [interMarks, setInterMarks] = useState('60%')
  const [interPassYear, setInterPassYear] = useState('2018')
  const [skills, setSkills] = useState([])

  const homeIcon = <ImLocation size={15} color="#c5c5c5" />
  const linkIcon = <ImLink size={15} color="#c5c5c5" />
  const phoneIcon = <MdLocalPhone size={15} color="#c5c5c5" />
  const emailIcon = <MdEmail size={15} color="#c5c5c5" />
  const calendarIcon = <BsCalendar size={10} color="000" />
  const dotIcon = <BsDot size={15} color="#000" />

  const handleSkillInput = e => {
    let string = e.target.value
    let stringArr = string.split(",")
    console.log(stringArr)
    setSkills(stringArr)
  }

  const SkillsTag = ({ skillName }) => {
    return (
      <span className="rounded-sm bg-gray-200 h-fit p-0.1 m-1 text-xs dropshadow-sm">
        {skillName}
      </span>
    )
  }

  const FormInput = ({ value, handleOnChange }) => {
    return (
      <input
        className="outline-none drop-shadow-sm h-8 rounded-sm p-1 w-1/2"
        type="text"
        value={value}
        onChange={handleOnChange}
      />
    )
  }
  

  return (
    <>
      <Header />
      <EditScreenWrap>
        <div className="flex-column bg-blue-500 w-1/2">
          <textarea
            className="outline-none drop-shadow-sm h-8 rounded-sm p-1 w-1/2"
            type="text"
            value={skills}
            onChange={handleSkillInput}
          ></textarea>
        </div>
        <CvWrap>
          <ResumeTitle>
            <h1 contentEditable>{fullName}</h1>
            <div className="extra_header_details">
              <span  contentEditable>
                {homeIcon} &nbsp; {address}
              </span>
              <span contentEditable>
                {phoneIcon} &nbsp; {mobNum}
              </span>
              <span contentEditable>
                {emailIcon}&nbsp; {email}
              </span>
              <span>
                {linkIcon}&nbsp; {socialLink}
              </span>
            </div>
          </ResumeTitle>

          <EducationDetails>
            <div className="section_education">
              <SectionTitle>Education</SectionTitle>
              <h6 className="text-xs text-indigo-500" contentEditable>
                {universityName}
              </h6>
              <h6  className="text-xs" contentEditable>{degreeName}</h6>
              <p className="flex item-center"  contentEditable>
                {calendarIcon} &nbsp; {yearOfPassing}
              </p>
              <p className="flex item-center" >
                {`Marks-${uniMarks}`}
              </p>
              {/* Inter */}
              <h6  className="text-xs text-indigo-500" contentEditable>
                {highSchoolName}
              </h6>
              <h6  className="text-xs"contentEditable>{`Class-${inter}`}</h6>
              <p className="flex item-center" contentEditable>
                {calendarIcon} &nbsp; {}
              </p>
              <p className="flex item-center" >
               {`Marks-${interMarks}`}
              </p>
              {/* 10th */}
              <h6  className="text-xs text-indigo-500" contentEditable>
                {schoolName}
              </h6>
              <h6 className="text-xs" contentEditable>{`Class-${matric}`}</h6>
              <p className="flex item-center"  contentEditable>
                {calendarIcon} &nbsp; {matricDate}
              </p>
              <p className="flex item-center" >
              {`Marks-${matricMarks}`}
              </p>
            </div>
            <div className="section_skills">
              <SectionTitle>Skills</SectionTitle>
              <div className="flex flex-wrap justify-around h-full py-2 w-full">
                {skills.map((skill, index) => {
                  return <SkillsTag key={index} skillName={skill.trim()} />
                })}
              </div>
            </div>
            <div className="section_skills ">
              <SectionTitle>Key Strengths</SectionTitle>
              <div className="flex flex-wrap justify-around h-full py-2 w-full">
                {skills.map((skill, index) => {
                  return <SkillsTag key={index} skillName={skill.trim()} />
                })}
              </div>
            </div>
            <div className="section_education">
            <SectionTitle>Key Strengths</SectionTitle>
                <ul>
                    <li>this si tes</li>
                    <li>this si tes</li>
                    <li>this si tes</li>
                </ul>
            </div>
          </EducationDetails>
          
        </CvWrap>
      </EditScreenWrap>
    </>
  )
}

export default Edit

const EditScreenWrap = styled.div`
  display: flex;
  background: #c5c5c5;
  height: 100%;
  justify-content: space-between;
  padding: 1.5rem;
`
const EditorWrap = styled.div`
  display: flex;
  width: 50%;
`
const CvWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 546px;
  height: 920px;
  padding: 1rem;
  background: #f4fafa;
`
const ResumeTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .extra_header_details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    span {
      display: flex;
      align-items: center;
      font-size: 0.8rem;
      padding: 0.5rem 0rem;
    }
  }
`
const EducationDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  .section_education {
    display: flex;
    width: 45%;
    min-width: 45%;
    flex-direction: column;
    justify-content: space-evenly;
    height: fit-content;

    .degree_name {
      color: var(--primary-violet);
    }
    h6 {
      margin: 0;
      padding: 5px 0;
    }
    p {
      font-size: 10px;
      font-family: Poppins;
      margin: 0;
      padding: 5px 0;
    }
  }
  .section_skills {
    width: 45%;
    min-width: 45%;
    max-width: 45%;                        
    height: fit-content;
    flex-direction: row;
  }
`
const SectionTitle = styled.div`
  padding: 5px 0;
  border-bottom: 2px solid var(--primary-violet);
`
