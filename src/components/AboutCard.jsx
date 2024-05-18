import { AboutCardFooter, AboutCardWrapper, Separator } from '../styles/Home.style'
import avatar from '../assets/profile-avatar.png'
import { Name } from '../styles/Navbar.style'
import { CardRole } from '../styles/Home.style'
import { Link } from 'react-router-dom'
import Dev from './Icons/Dev'
import Github from './Icons/Github'
import Linkedin from './Icons/Linkedin'
import Gmail from './Icons/Gmail'
import FlexBox from './containers/FlexBox'

const AboutCard = () => {
  return (
    <>
      <AboutCardWrapper>
        <img src={avatar} alt="" width="220" height="220" style={{ borderRadius: '50%' }} />
        <FlexBox align="center" justify="center" direction="column" style={{ marginTop: '25px' }}>
          <Name>Chethan K</Name>
        </FlexBox>
        <Separator />
        <CardRole>software developer</CardRole>
        <AboutCardFooter>
          <Link
            to="https://www.linkedin.com/in/chethan-k-901078170/"
            target="_blank"
            rel="noopener noreferrer">
            <Linkedin width="28" height="28" />
          </Link>
          <Link to="https://github.com/chethankumblekar" target="_blank" rel="noopener noreferrer">
            <Github width="28" height="28" />
          </Link>
          <Link to="https://dev.to/chethankumblekar" target="_blank" rel="noopener noreferrer">
            <Dev width="28" height="28" />
          </Link>
          <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=chethankumblekar@gmail.com">
            <Gmail width="28" height="28" />
          </Link>
        </AboutCardFooter>
      </AboutCardWrapper>
    </>
  )
}

export default AboutCard
