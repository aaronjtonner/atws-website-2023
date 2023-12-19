import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Container, GridAuto, Section } from "../layoutComponents"
import { ButtonInline, ButtonPrimary } from "../buttons"

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
                overcome those common business challenges is to work with a{" "}
                <ButtonInline to="/reviews">trusted</ButtonInline> website
                design Calgary professional whose mission is to advance your
                sales and marketing efforts so you can grow and expand your
                business by increasing your customer connections and revenue
                through a standout online presence.
              </p>
              <h3>A Calgary web design company with a twist</h3>
              <p>
                <span className="italics">
                  Save thousands with a wildly affordable Calgary website design
                  subscription and get lifetime edits and hosting for less than
                  $100 per month.
                </span>{" "}
                <br /> <br /> Want a web designer that’ll offer lifetime edits
                without the wait? Want to the freedom to cancel or pause your
                Calgary web design subscription at anytime without losing your
                website? Want to save thousands of dollars every year on your
                website and marketing costs? Want a custom SEO website design
                Calgary that will propel your business to new heights at an
                insane return? Look no further! This plan is perfect for you,
                especially if you want a robust website in less than 48 hours
                after signing up. Just hit the button below to get started with
                your Calgary web designer!
              </p>
              <ButtonPrimary to="/contact">
                get your $100 website &#8594;
              </ButtonPrimary>
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
