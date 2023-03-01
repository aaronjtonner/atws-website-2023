import React from "react"
import styled from "styled-components"
import { ButtonInline, ButtonPrimaryDark } from "../buttons"
import { Container, Section, Actions } from "../layoutComponents"

const Wrapper = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #0080ff;
  color: var(--txt-light);
  padding: 4em 0;
`

const Text = styled.div`
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

export default function Cta1() {
  return (
    <Wrapper>
      <Container>
        <Text className="spacing">
          <div>
            <p className="subheader">let's make magic happen</p>
            <h2 className="title">
              Transform Your Website into a Revenue-Generating Machine
            </h2>
          </div>
          <p className="">
            Don't settle for a website that's going to sit there doing nothing
            for you. Hire your new{" "}
            <ButtonInline to="/services/web-design-calgary">
              web designer in Calgary
            </ButtonInline>{" "}
            to captivate your audience while you outshine, outrank, and
            outperform your online competition...{" "}
            <span className="italics bold">in your sleep!</span>
          </p>
          <Actions>
            <ButtonPrimaryDark to="/contact">
              Let's get in touch &#8594;
            </ButtonPrimaryDark>
          </Actions>
        </Text>
      </Container>
    </Wrapper>
  )
}
