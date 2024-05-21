import { StyledButton } from '../styles/Button.style'
import { GeometricShape } from '../styles/Containers.style'
import { Heading, ResumeContent, ResumeWrapper, SubHeading } from '../styles/Resume.style'
import ResumeCard from '../components/ResumeCard'
import { useState, useEffect } from 'react'
import experiences from '../data/experience.json'

const Experience = () => {
  const [experience, setExperience] = useState(null)
  const resumeLink = 'https://shorturl.at/fC2mo'

  useEffect(() => {
    setExperience(experiences)
  }, [experiences])
  return (
    <>
      <ResumeWrapper>
        <Heading>
          <GeometricShape />
          <h1>Experience</h1>
        </Heading>
        <ResumeContent>
          <SubHeading>
            <StyledButton width="150px" size="10px">
              <a href={resumeLink} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </StyledButton>
          </SubHeading>
          {experience?.map((data, index) => {
            return <ResumeCard content={data} key={index} />
          })}
        </ResumeContent>
      </ResumeWrapper>
    </>
  )
}

export default Experience
