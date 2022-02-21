import React, { useState } from "react"
import styled from "styled-components"
import Logo from "../assets/images/logo.svg"
import { theme } from "../Theme"
import { ImLocation, ImLink } from "react-icons/im"
import { MdLocalPhone, MdEmail, MdClose, MdAdd } from "react-icons/md"
import { BsCalendar, BsDot } from "react-icons/bs"
import Accordian from "../components/Accordian"
import InputField from "../components/InputField"
import { Link, useHistory } from "react-router-dom"

const homeIcon = <ImLocation size={15} color="#c5c5c5" />
const linkIcon = <ImLink size={15} color="#c5c5c5" />
const phoneIcon = <MdLocalPhone size={15} color="#c5c5c5" />
const emailIcon = <MdEmail size={15} color="#c5c5c5" />
const calendarIcon = <BsCalendar size={10} color="000" />

const Builder = () => {
  const [userPersonalDetails, setUserPersonalDetails] = useState({
    fullName: "Aditya Singh",
    mobNum: "9117423989",
    address: "Patna, India",
    email: "imadityadi@gmail.com",
    linkedin: "linkedin.com/adityaksi",
    github: "github.com/imadityadi",
  })

  const [educationDetails, setEducationDetails] = useState({
    universityName: "Patliputra University",
    gradyearOfPassing: "2020",
    gradMark: "60%",
    gradDegreeName: "BCA (Bachelor's of Computer Science)",
    schoolName: "SDV Public School",
    schoolClass: "X",
    matricYearOfPassing: "2016",
    matricMarks: "9.8CGPA",
    highSchoolName: "BD college",
    highSchoolClass: "XII",
    highSchoolMarks: "60%",
    highSchoolyearOfPassing: "2016-2018",
  })

  const [skills, setSkills] = useState([
    { title: "React" },
    { title: "React Native" },
    { title: "Javascript/ES6" },
    { title: "Styled-components" },
    { title: "CSS" },
    { title: "HTML" },
    { title: "Firebase" },
    { title: "Bootstrap" },
    { title: "Tailwind CSS" },
  ])

  const expTemplate = { title: "", description: "", duration: "" }

  const [expData, setExpData] = useState([
    {
      title: "Freelancer",
      description:
        "Developed Scalable Websites, worked with React, React Native, Styled-components, Firebase, React-Router, Redux",
      duration: "1 Year",
    },
    {
      title: "FrontEnd Developer",
      description:
        "Developed Scalable Websites, worked with React, React Native, Styled-components, Firebase, React-Router, Redux",
      duration: "6 Months",
    },
  ])

  const activityTemp = { title: "" }

  const [activityData, setActivityData] = useState([
    { title: "Organized Fresher Party" },
  ])

  const achievementTemp = { title: "" }
  const [achievementData, setAchievementData] = useState([
    { title: "1st prize in General Knowledge competition" },
    {
      title:
        "Won Hackathon organised by bluelearn, our project was solving a problem of not getting good resource while trying to learn anything.",
    },
  ])

  const hobbiesTemp = { title: "" }
  const [hobbiesData, setHobbiesData] = useState([
    { title: "Reading" },
    { title: "Listening Songs" },
    { title: "Photography" },
  ])

  const projectTemp = { title: "", description: "" }
  const [projectsData, setProjectsData] = useState([
    {
      title: "Disney Clone",
      description: "Built with react and styled-components",
    },
    {
      title: "Blog Job Search App",
      description: "built with firebase and react as frontend",
    },
    { title: "Quotes App", description: "Built on React" },
  ])
  const [isPdf, setIsPdf] = useState(false)
  const ref = React.createRef()
  const history = useHistory()

  const resetState = () => {
    setAchievementData([
      { title: "1st prize in General Knowledge competition" },
      {
        title:
          "Won Hackathon organised by bluelearn, our project was solving a problem of not getting good resource while trying to learn anything.",
      },
    ])
    setHobbiesData([
      { title: "Reading" },
      { title: "Listening Songs" },
      { title: "Photography" },
    ])
    setUserPersonalDetails({
      fullName: "Aditya Singh",
      mobNum: "9117423989",
      address: "Patna, India",
      email: "imadityadi@gmail.com",
      linkedin: "linkedin.com/adityaksi",
      github: "github.com/imadityadi",
    })
    setProjectsData([
      {
        title: "Disney Clone",
        description:
          "Built with react and styled-components, google auth with help of firebase authentication",
      },
      {
        title: "Blog Job Search App",
        description:
          "Built with firebase and react as frontend, implemented full text search with autosuggest feature so that user can find any from easily tried to cancel token request so we get low read request",
      },
      {
        title: "Quotes App",
        description:
          "Built on React with a open quotes API found on github, render a one line quote.",
      },
    ])
    setExpData([
      {
        title: "Freelancer",
        description:
          "Developed Scalable Websites, worked with React, React Native, Styled-components, Firebase, React-Router, Redux",
        duration: "1 Year",
      },
      {
        title: "Freelancer",
        description:
          "Developed Scalable Websites, worked with React, React Native, Styled-components, Firebase, React-Router, Redux",
        duration: "1 Year",
      },
    ])
    setActivityData([{ title: "Organized Fresher Party" }])
    setEducationDetails({
      universityName: "Patliputra University",
      gradyearOfPassing: "2020",
      gradMark: "60%",
      gradDegreeName: "BCA (Bachelor's of Computer Science)",
      schoolName: "SDV Public School",
      schoolClass: "X",
      matricYearOfPassing: "matricYearOfPassing",
      matricMarks: "9.8CGPA",
      highSchoolName: "BG college",
      highSchoolClass: "XII",
      highSchoolMarks: "60%",
      highSchoolyearOfPassing: "2016-2018",
    })
    setSkills([
      { title: "React" },
      { title: "React Native" },
      { title: "Javascript/ES6" },
      { title: "Styled-components" },
      { title: "CSS" },
      { title: "HTML" },
      { title: "Firebase" },
      { title: "Bootstrap" },
      { title: "Tailwind CSS" },
    ])
  }

  // Views of  Resume page

  const ResumeTitleView = () => {
    return (
      <ResumeTitle>
        <h1>{userPersonalDetails.fullName}</h1>
        <div className="extra_header_details">
          <span>
            {homeIcon} &nbsp; {userPersonalDetails.address}
          </span>
          <span>
            {phoneIcon} &nbsp; {userPersonalDetails.mobNum}
          </span>
          <span>
            {emailIcon}&nbsp; {userPersonalDetails.email}
          </span>
          <span>
            {linkIcon}&nbsp; {userPersonalDetails.linkedin}
          </span>
        </div>
      </ResumeTitle>
    )
  }

  const EducationView = () => {
    return (
      <EducationDetail>
        <SectionTitle>Education</SectionTitle>
        <h6 className="edu_title">{educationDetails.universityName}</h6>
        <h6 className="edu_description">{educationDetails.gradDegreeName}</h6>
        <p className="edu_date">
          {calendarIcon} &nbsp; {educationDetails.gradyearOfPassing}
        </p>
        <p className="edu_description">{`Marks-${educationDetails.gradMark}`}</p>
        {/* Inter */}
        <h6 className="edu_title">{educationDetails.highSchoolName}</h6>
        <h6 className="edu_description">{`Class-${educationDetails.highSchoolClass}`}</h6>
        <p className="edu_date">
          {calendarIcon} &nbsp; {educationDetails.highSchoolyearOfPassing}
        </p>
        <p className="edu_description">{`Marks-${educationDetails.highSchoolMarks}`}</p>
        {/* 10th */}
        <h6 className="edu_title">{educationDetails.schoolName}</h6>
        <h6 className="edu_description">{`Class-${educationDetails.schoolClass}`}</h6>
        <p className="flex item-center">
          {calendarIcon} &nbsp; {educationDetails.matricYearOfPassing}
        </p>
        <p className="edu_description">{`Marks-${educationDetails.matricMarks}`}</p>
      </EducationDetail>
    )
  }

  const handleAddSkill = () => {
    setSkills([...skills, { title: "" }])
  }

  const handleRemoveSkill = index => {
    const values = [...skills]
    values.splice(index, 1)
    setSkills(values)
  }
  const handleSkillChange = (index, e) => {
    const updatedSkill = skills.map((field, i) =>
      index == i
        ? Object.assign(field, { [e.target.name]: e.target.value })
        : field
    )
    setSkills(updatedSkill)
  }

  const SkillsView = () => {
    return (
      <SkillViewWrap>
        <SectionTitle>Skills</SectionTitle>
        <div className="skills_container">
          {skills.map((skill, index) => {
            return <SkillTag key={index}>{skill.title}</SkillTag>
          })}
        </div>
      </SkillViewWrap>
    )
  }

  const ExpItem = ({ title, description, duration }) => {
    return (
      <ExpItemWrap>
        <span className="title">{title}</span>

        <span className="description">{description}</span>
        <span className="duration">{duration}</span>
      </ExpItemWrap>
    )
  }

  const ExperinceView = () => {
    return (
      <ExperinceWrap>
        <SectionTitle>Experience</SectionTitle>
        {expData.map((item, index) => {
          return (
            <ExpItem
              title={item.title}
              description={item.description}
              duration={item.duration}
            />
          )
        })}
        <ExpItem />
      </ExperinceWrap>
    )
  }

  const handleAddView = () => {
    setExpData([...expData, expTemplate])
  }

  const handleRemoveView = index => {
    const values = [...expData]
    values.splice(index, 1)
    setExpData(values)
  }

  const handleDynamicChange = (index, e) => {
    const updatedExp = expData.map((field, i) =>
      index == i
        ? Object.assign(field, { [e.target.name]: e.target.value })
        : field
    )
    setExpData(updatedExp)
  }

  const addActivity = () => {
    setActivityData([...activityData, activityTemp])
  }

  const removeActivity = index => {
    const values = [...activityData]
    values.splice(index, 1)
    setActivityData(values)
  }

  const handleActivityChange = (index, e) => {
    const updatedAct = activityData.map((item, i) =>
      index == i
        ? Object.assign(item, { [e.target.name]: e.target.value })
        : item
    )
    setActivityData(updatedAct)
  }

  const BulletItem = ({ title }) => {
    return (
      <BulletItemWrap>
        <BsDot size={25} color={theme.shadeBlack} />
        <span>{title}</span>
      </BulletItemWrap>
    )
  }

  const Activities = () => {
    return (
      <ActivityWrap>
        <SectionTitle>Activity</SectionTitle>
        {activityData.map((activity, index) => {
          return <BulletItem title={activity.title} key={index} />
        })}
      </ActivityWrap>
    )
  }

  const AchievementView = () => {
    return (
      <AchieveWrapper>
        <SectionTitle>Achievements</SectionTitle>
        {achievementData.map((ach, index) => {
          return <BulletItem key={index} title={ach.title} />
        })}
      </AchieveWrapper>
    )
  }

  //achievement handlers

  const handleAddAchievement = () => {
    setAchievementData([...achievementData, achievementTemp])
  }
  const handleRemoveAchivement = index => {
    const values = [...achievementData]
    values.splice(index, 1)
    setAchievementData(values)
  }

  const handleAchChange = (index, e) => {
    const updatedAch = achievementData.map((item, i) =>
      index === i
        ? Object.assign(item, { [e.target.name]: e.target.value })
        : item
    )
    setAchievementData(updatedAch)
  }

  // Hobbie handlers

  const handleAddHobbie = () => {
    setHobbiesData([...hobbiesData, hobbiesTemp])
  }
  const handleRemoveHobbie = index => {
    const values = [...hobbiesData]
    values.splice(index, 1)
    setHobbiesData(values)
  }

  const handleHobbieChange = (index, e) => {
    const updatedHobb = hobbiesData.map((item, i) =>
      index === i
        ? Object.assign(item, { [e.target.name]: e.target.value })
        : item
    )
    setHobbiesData(updatedHobb)
  }
  const HobbiesView = () => {
    return (
      <HobbiesWrap>
        <SectionTitle>Hobbies</SectionTitle>
        {hobbiesData.map((item, index) => {
          return <BulletItem title={item.title} key={index} />
        })}
      </HobbiesWrap>
    )
  }

  const ProjectsView = () => {
    return (
      <ProjectWrap>
        <SectionTitle>Projects</SectionTitle>
        {projectsData.map((item, index) => {
          return (
            <div key={index} className="project_item">
              <span className="project_title">{item.title}</span>
              <span className="description">{item.description}</span>
            </div>
          )
        })}
      </ProjectWrap>
    )
  }

  // project handler
  const handleAddProject = () => {
    setProjectsData([...projectsData, projectTemp])
  }

  const handleRemoveProject = index => {
    const values = [...projectsData]
    values.splice(index, 1)
    setProjectsData(values)
  }
  const handleProjectChange = (index, e) => {
    const updatedProject = projectsData.map((field, i) =>
      index == i
        ? Object.assign(field, { [e.target.name]: e.target.value })
        : field
    )
    setProjectsData(updatedProject)
  }

  const downloadPdf = () => {
    const changeTitle = title => {
      document.title = title
    }
    window.addEventListener(
      "beforeprint",
      changeTitle(`${userPersonalDetails.fullName}-resume`)
    )
    window.print()
    window.addEventListener("afterprint", changeTitle("ExamFormX"))
  }

  return (
    <>
      <NavBar className="deco">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
        <div className="nav_action">
          <MainButton variant="outline" onClick={resetState}>
            Reset
          </MainButton>
          <MainButton onClick={downloadPdf}>Download</MainButton>
        </div>
      </NavBar>
      <Notice className="notice">Best works in Desktop View</Notice>
      <PageWrapper>
        {/* Page Divide into two parts */}
        <ActionView className="deco">
          <Accordian title="Personal Details">
            <InputField
              type="text"
              id="fullname"
              label="FullName"
              value={userPersonalDetails.fullName}
              onChange={e =>
                setUserPersonalDetails({
                  ...userPersonalDetails,
                  fullName: e.target.value,
                })
              }
            />
            <InputField
              type="text"
              id="address"
              label="Address"
              value={userPersonalDetails.address}
              onChange={e =>
                setUserPersonalDetails({
                  ...userPersonalDetails,
                  address: e.target.value,
                })
              }
            />
            <InputField
              type="phone"
              id="mobileNumber"
              label="Mobile Number"
              value={userPersonalDetails.mobNum}
              onChange={e =>
                setUserPersonalDetails({
                  ...userPersonalDetails,
                  mobNum: e.target.value,
                })
              }
            />
            <InputField
              type="email"
              id="email"
              label="Email"
              value={userPersonalDetails.email}
              onChange={e =>
                setUserPersonalDetails({
                  ...userPersonalDetails,
                  email: e.target.value,
                })
              }
            />
            <InputField
              type="text"
              id="linkedin"
              label="Social"
              value={userPersonalDetails.linkedin}
              onChange={e =>
                setUserPersonalDetails({
                  ...userPersonalDetails,
                  linkedin: e.target.value,
                })
              }
            />
          </Accordian>
          <Accordian title="Education Details">
            <InputField
              type="text"
              label="University/College Name"
              value={educationDetails.universityName}
              onChange={e =>
                setEducationDetails({
                  ...educationDetails,
                  universityName: e.target.value,
                })
              }
            />
            <InputField
              type="text"
              label="Degree Name"
              value={educationDetails.gradDegreeName}
              onChange={e =>
                setEducationDetails({
                  ...educationDetails,
                  gradDegreeName: e.target.value,
                })
              }
            />
            <InputField
              type="text"
              label="Year of Passing"
              value={educationDetails.gradyearOfPassing}
              onChange={e =>
                setEducationDetails({
                  ...educationDetails,
                  gradyearOfPassing: e.target.value,
                })
              }
            />
            <InputField
              type="text"
              label="Marks"
              value={educationDetails.gradMark}
              onChange={e =>
                setEducationDetails({
                  ...educationDetails,
                  gradMark: e.target.value,
                })
              }
            />
            <InputField
              type="text"
              label="High School Name"
              value={educationDetails.highSchoolName}
              onChange={e =>
                setEducationDetails({
                  ...educationDetails,
                  highSchoolName: e.target.value,
                })
              }
            />
            <InputField
              type="text"
              label="Year of Passing"
              value={educationDetails.highSchoolyearOfPassing}
              onChange={e =>
                setEducationDetails({
                  ...educationDetails,
                  highSchoolyearOfPassing: e.target.value,
                })
              }
            />
            <InputField
              type="text"
              label="Marks"
              value={educationDetails.highSchoolMarks}
              onChange={e =>
                setEducationDetails({
                  ...educationDetails,
                  highSchoolMarks: e.target.value,
                })
              }
            />
            <InputField
              type="text"
              label="School Name"
              value={educationDetails.schoolName}
              onChange={e =>
                setEducationDetails({
                  ...educationDetails,
                  schoolName: e.target.value,
                })
              }
            />
            <InputField
              type="text"
              label="Year of Passing"
              value={educationDetails.matricYearOfPassing}
              onChange={e =>
                setEducationDetails({
                  ...educationDetails,
                  matricYearOfPassing: e.target.value,
                })
              }
            />
            <InputField
              type="text"
              label="Marks"
              value={educationDetails.matricMarks}
              onChange={e =>
                setEducationDetails({
                  ...educationDetails,
                  matricMarks: e.target.value,
                })
              }
            />
          </Accordian>
          <Accordian title="Projects">
            {projectsData.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <InputField
                    name="title"
                    type="text"
                    label="Project Name"
                    value={item.title}
                    onChange={e => handleProjectChange(index, e)}
                  />
                  <InputField
                    name="description"
                    type="text"
                    label="Description"
                    value={item.description}
                    onChange={e => handleProjectChange(index, e)}
                  />
                  <MdAdd
                    title="Add More"
                    onClick={handleAddProject}
                    size={25}
                    color={theme.brand}
                  />
                  <MdClose
                    title="Remove"
                    onClick={() => handleRemoveProject(index)}
                    size={index === 0 ? 0 : "25px"}
                    color={index === 0 ? "white" : "red"}
                  />
                </React.Fragment>
              )
            })}
          </Accordian>
          <Accordian title="Experience">
            {expData.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <InputField
                    name="title"
                    type="text"
                    label="Exp Title"
                    value={item.title}
                    onChange={e => handleDynamicChange(index, e)}
                  />
                  <InputField
                    name="description"
                    type="text"
                    label="Description"
                    value={item.description}
                    onChange={e => handleDynamicChange(index, e)}
                  />
                  <InputField
                    name="duration"
                    type="text"
                    label="Duration"
                    value={item.duration}
                    onChange={e => handleDynamicChange(index, e)}
                  />
                  <MdAdd
                    title="Add More"
                    onClick={handleAddView}
                    size={25}
                    color={theme.brand}
                  />
                  <MdClose
                    title="Remove"
                    onClick={() => handleRemoveView(index)}
                    size={25}
                    color={index === 0 ? "white" : "red"}
                  />
                </React.Fragment>
              )
            })}
          </Accordian>
          <Accordian title="Skills">
            {skills.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <InputField
                    name="title"
                    type="text"
                    label="Skill Name"
                    value={item.title}
                    onChange={e => handleSkillChange(index, e)}
                  />
                  <MdAdd
                    title="Add More"
                    onClick={handleAddSkill}
                    size={25}
                    color={theme.brand}
                  />
                  <MdClose
                    title="Remove"
                    onClick={() => handleRemoveSkill(index)}
                    size={index === 0 ? 0 : "25px"}
                    color={index === 0 ? "white" : "red"}
                  />
                </React.Fragment>
              )
            })}
          </Accordian>

          <Accordian title="Activity">
            {activityData.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <InputField
                    name="title"
                    type="text"
                    label="Activity Name"
                    value={item.title}
                    onChange={e => handleActivityChange(index, e)}
                  />

                  <MdAdd
                    title="Add More"
                    onClick={addActivity}
                    size={25}
                    color={theme.brand}
                  />
                  <MdClose
                    title="Remove"
                    onClick={() => removeActivity(index)}
                    size={25}
                    color={index === 0 ? "white" : "red"}
                  />
                </React.Fragment>
              )
            })}
          </Accordian>
          <Accordian title="Achievments">
            {achievementData.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <InputField
                    name="title"
                    type="text"
                    label="Achievement"
                    value={item.title}
                    onChange={e => handleAchChange(index, e)}
                  />

                  <MdAdd
                    title="Add More"
                    onClick={handleAddAchievement}
                    size={25}
                    color={theme.brand}
                  />
                  <MdClose
                    title="Remove"
                    onClick={() => handleRemoveAchivement(index)}
                    size={25}
                    color={index === 0 ? "white" : "red"}
                  />
                </React.Fragment>
              )
            })}
          </Accordian>
          <Accordian title="Hobbies">
            {hobbiesData.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <InputField
                    name="title"
                    type="text"
                    label="Hobby"
                    value={item.title}
                    onChange={e => handleHobbieChange(index, e)}
                  />

                  <MdAdd
                    title="Add More"
                    onClick={handleAddHobbie}
                    size={25}
                    color={theme.brand}
                  />
                  <MdClose
                    title="Remove"
                    onClick={() => handleRemoveHobbie(index)}
                    size={25}
                    color={index === 0 ? "white" : "red"}
                  />
                </React.Fragment>
              )
            })}
          </Accordian>
        </ActionView>

        {/* Template View */}

        <TemplateView>
          {/* Template View */}
          <ResumePage id="resume_page" ref={ref}>
            <TopSection>
              <ResumeTitleView />
            </TopSection>
            <MainSection>
              <ColOne>
                <EducationView />
                <ProjectsView />
              </ColOne>
              <ColTwo>
                <SkillsView />
                <ExperinceView />
                <Activities />
                <AchievementView />
                <HobbiesView />
              </ColTwo>
            </MainSection>
          </ResumePage>
        </TemplateView>
      </PageWrapper>
    </>
  )
}

export default Builder

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    width: 95%;
  }
  img {
    padding: 0rem 1rem;
    height: 60px;

    @media screen and (max-width: 768px) {
      height: 30px;
      width: 100px;
    }
  }

  .nav_action {
    display: flex;
    justify-content: space-around;
    width: 30%;
    align-items: center;

    @media screen and (max-width: 768px) {
      width: 50%;
      justify-content: space-between;
    }
  }

  @media print {
    display: none;
  }
`
const NavLink = styled(Link)`
  display: flex;
  font-size: 1rem;
  color: var(--grey);
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  width: 20%;
  cursor: pointer;
  height: 100%;
  text-transform: uppercase;
  :hover {
    transition: 0.5s;
    color: var(--primary-violet);
  }
  &.active {
  }

  img {
    padding: 0rem 1rem;
    height: 60px;
  }

  @media screen and (max-width: 768px) {
    color: var(--pure-white);
    padding: 0;
    justify-content: space-between;
  }
`

const PageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #ccc;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    box-sizing: border-box;
  }
`
const MainButton = styled.button`
  background: ${({ variant }) =>
    variant === "outline" ? "#fff" : theme.brand};
  color: ${({ variant }) =>
    variant === "outline" ? theme.brand : theme.white};
  padding: 0.5rem 0.6rem;
  max-height: 3rem;
  width: 8rem;
  font-size: 1.1rem;
  font-weight: 400;
  border-radius: 8px;
  border: ${({ variant }) =>
    variant === "outline" ? `1.5px solid ${theme.brand}` : "none"};
  cursor: pointer;
  font-family: Poppins;
  transition: 0.2s ease;

  :hover {
    background: ${theme.brandHover};
    transition: 0.2s ease;
    color: ${({ variant }) =>
      variant === "outline" ? theme.white : theme.white};
  }
  :active {
    background: ${theme.brandActive};
    transition: 0.2s ease;
    outline: 1px solid ${theme.lightWhite100};
  }

  @media screen and (max-width: 768px) {
    width: fit-content;
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`

const TemplateView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.white};
  width: 595px;
  height: fit-content;
  /* position: relative; */
  overflow-y: auto;
  @page {
    size: auto;
    margin: 0mm;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media print {
    width: 100%;
    height: 100%;
  }
`
const ResumePage = styled.div`
  width: 100%;
  padding: 1rem;
  height: 100%;
  /* margin: 1rem; */
  border-radius: 5px;
  box-sizing: border-box;
  background: ${theme.white};
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.22);

  @media print {
    width: 100%;
    height: 100%;
    padding: 1rem;
    box-shadow: none;
  }
`
const ActionView = styled.div`
  width: 50%;
  height: 75vh;
  overflow-y: auto;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  ::-webkit-scrollbar {
    width: 0.2rem;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
  @media print {
    display: none;
  }
`

const TopSection = styled.div`
  min-height: 4rem;
`
const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
`
const ColOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  max-width: 48%;
  min-width: 45%;
`
const ColTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  max-width: 48%;
  min-width: 45%;
`

const ResumeTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  color: ${theme.shadeBlack};
  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: ${theme.shadeBlack};
  }

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
const SectionTitle = styled.div`
  padding: 5px 0;
  border-bottom: 2px solid ${theme.brandActive};
`
const EducationDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  color: ${theme.shadeBlack};

  .education_title {
    color: ${theme.brandActive};
    font-size: 14px;
  }

  .edu_description {
    color: ${theme.shadeBlack};
    font-size: 12px;
  }

  .edu_date {
    display: flex;
    align-items: center;
  }
  h6 {
    margin: 0;
    padding: 5px 0;
    color: ${theme.brandActive};
    font-size: 14px;
    font-weight: 500;
  }
  p {
    font-size: 12px;
    margin: 0;
    padding: 5px 0;
  }
`

const SkillTag = styled.span`
  border-radius: 5px;
  background: ${theme.lightGrey};
  color: ${theme.shadeBlack};
  user-select: none;
  font-size: 12px;
  width: fit-content;
  box-sizing: border-box;
  height: fit-content;
  padding: 0.2rem;
  box-sizing: border-box;
  margin: 5px;
`
const SkillViewWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${theme.shadeBlack};
  .skills_container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5px 0;
  }
`
const ExperinceWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  margin: 0.5rem 0;
`

const ExpItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;

  .title {
    color: ${theme.brandActive};
    font-weight: 500;
    font-size: 14px;
  }
  .description,
  .duration {
    font-size: 12px;
    color: ${theme.shadeBlack};
  }
`

const ActivityWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100%;
  margin: 0.5rem 0;
`
const BulletItemWrap = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 0.5rem;

  span {
    font-size: 12px;
    color: ${theme.shadeBlack};
  }
`
const AchieveWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const HobbiesWrap = styled.div`
  display: flex;
  flex-direction: column;
`
const ProjectWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.9rem;

  .project_item {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
  }

  .project_title {
    font-size: 14px;
    font-weight: 500;
    color: ${theme.brandActive};
  }

  .description {
    font-size: 12px;
    color: ${theme.shadeBlack};
  }
`
const Notice = styled.div`
  background: ${theme.brand};
  height: 2rem;
  padding: 0 0.5rem;
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.white};
  text-align: center;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media print {
    display: none;
  }
`
