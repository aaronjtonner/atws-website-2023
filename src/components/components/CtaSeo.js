import React from "react"
import styled from "styled-components"
import { ButtonInlineLight, ButtonPrimaryDark } from "../buttons"
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

export default function CtaSeo(props) {
  return (
    <Wrapper>
      <Container>
        <Text className="spacing">
          <div>
            <p className="subheader">let's make magic happen</p>
            <h2 className="title">{props.title}</h2>
          </div>
          <p className="">{props.body}</p>
          <Actions>
            <ButtonPrimaryDark to="/contact">
              {props.cta} &#8594;
            </ButtonPrimaryDark>
          </Actions>
        </Text>
      </Container>
    </Wrapper>
  )
}
