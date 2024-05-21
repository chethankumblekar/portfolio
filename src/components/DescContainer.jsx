import { Link } from 'react-router-dom'
import { BioText, DescWrapper, Heading } from '../styles/Home.style'
import Button from './Button'

const DescContainer = () => {
  return (
    <>
      <DescWrapper>
        <Heading>Hello!</Heading>
        <div style={{ marginTop: '30px' }}>
          <BioText>
            I&apos;m A Full Stack Software Developer with a robust skill set in React, REST API
            development. Proficient in .NET Core and Azure with Experience in working with azure
            cloud automation.
          </BioText>
          <BioText>I always ❤️ to deliver what i passion about. and my passion is 👨‍💻</BioText>
        </div>
        <div style={{ marginTop: '50px' }}>
          <Link to="experience">
            <Button>Resume</Button>
          </Link>
          <Link to="projects">
            <Button backgroundcolor="#fff" color="#000" border="1px solid #000">
              Projects
            </Button>
          </Link>
        </div>
      </DescWrapper>
    </>
  )
}

export default DescContainer
