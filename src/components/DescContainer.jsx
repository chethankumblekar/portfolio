import { Link } from 'react-router-dom'
import { BioText, DescWrapper, Heading, SubHeading } from '../styles/Home.style'
import Button from './Button'
import * as emoji from 'node-emoji'

const DescContainer = () => {
  return (
    <>
      <DescWrapper>
        <Heading>Hi,</Heading>
        <SubHeading>
          {emoji.emojify(':thinking:')}Oh. something dragged! It&apos;s great to have you here!
        </SubHeading>
        <div style={{ marginBottom: '30px' }}>
          <Link to="resume">
            <Button>Resume</Button>
          </Link>
          <Link to="projects">
            <Button backgroundcolor="#fff" color="#000" border="1px solid #000">
              Projects
            </Button>
          </Link>
        </div>
        <BioText>
          I&apos;m A Full Stack Software Developer with a robust skill set in React, REST API
          development. Proficient in .NET Core and Azure with Experience in working with azure cloud
          automation.
        </BioText>
        <BioText>
          I always {emoji.emojify(':heart:')} to deliver what i passion about. and my passion is
          <span>{emoji.emojify(':computer: :keyboard:')} </span>
        </BioText>
      </DescWrapper>
    </>
  )
}

export default DescContainer
