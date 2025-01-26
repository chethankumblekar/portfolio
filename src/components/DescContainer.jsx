import { Link } from 'react-router-dom'
import ReactTypingEffect from 'react-typing-effect'
import { BioText, DescWrapper, Heading } from '../styles/Home.style'
import Button from './Button'

const DescContainer = () => {
  return (
    <>
      <DescWrapper>
        <Heading>
          <ReactTypingEffect text="Hey There!" />
        </Heading>
        <div style={{ marginTop: '30px' }}>
          <BioText>
            Hi! I&apos;m Chethan K, a Software Engineer with a knack for full stack development,
            DevOps, and cloud magic. I love solving puzzles and building scalable solutions.
          </BioText>
          <BioText>
            My tech stack: C#, .NET Core,TypeScript, Python, Docker, and Kubernetes. I ❤️ delivering
            what I&apos;m passionate about, and my passion is 👨‍💻.
          </BioText>
        </div>
        <div style={{ marginTop: '50px' }}>
          <Link to="experience">
            <Button>My Journey</Button>
          </Link>
          <Link to="projects">
            <Button backgroundcolor="#fff" color="#000" border="1px solid #000">
              My Work
            </Button>
          </Link>
        </div>
      </DescWrapper>
    </>
  )
}

export default DescContainer
