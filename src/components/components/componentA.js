import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container, GridAuto, Section } from "../layoutComponents"
import { ButtonPrimary } from "../buttons"

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 6em auto 6em;
`

const Content = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;
`

const Text = styled.div`
  max-width: 90ch;
  margin-left: auto;
  margin-right: auto;
  color: var(--txt-light);
  text-align: center;
`

const Bg = styled.div`
  background: var(--clr-dark);
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
`

const ComponentA = () => {
  return (
    <Section>
      <GridWrapper>
        <Bg />
        <Content className="spacing center">
          <Container className="spacing-lg">
            <Text className="spacing">
              <div>
                <p className="subheader">
                  let's take your website to the next level
                </p>
                <h2 className="title">
                  Your New website design calgary professional
                </h2>
              </div>
              <p>
                You’re trying to make more money for your business but your
                current website and online presence isn’t helping you overcome
                the sales and marketing challenges of doing so. The solution to
                overcome those common business challenges is to work with a
                trusted website design Calgary professional whose mission is to
                advance your sales and marketing efforts so you can grow and
                expand your business by increasing your customer connections and
                revenue through a standout online presence.
              </p>
              <ButtonPrimary to="/contact">get in touch &#8594;</ButtonPrimary>
            </Text>
            <StaticImage
              src="../../images/web-design-calgary-image-2.svg"
              alt="web design calgary"
            />
          </Container>
        </Content>
      </GridWrapper>
    </Section>
  )
}

export default ComponentA
