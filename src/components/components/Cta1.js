import React from "react"
import styled from "styled-components"
import { ButtonPrimaryDark } from "../buttons"
import { Container, Section, Actions } from "../layoutComponents"

const Wrapper = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    #0080ff;
  color: var(--txt-light);
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
      <Section>
        <Container>
          <Text className="spacing">
            <div>
              <p className="subheader upper bold">web support from the best</p>
              <h2 className="title">how can I help you?</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Volutpat pretium turpis
              velit sit massa in elementum urna. Mi non arcu ornare id hac sed
              gravida porta elit. Mollis consectetur nunc nisl cursus sem et
              dis.
            </p>
            <Actions>
              <ButtonPrimaryDark to="/contact">
                Let's get in touch &#8594;
              </ButtonPrimaryDark>
            </Actions>
          </Text>
        </Container>
      </Section>
    </Wrapper>
  )
}
