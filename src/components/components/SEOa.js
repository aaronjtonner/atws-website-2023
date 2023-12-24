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

const SEOa = () => {
  return (
    <Section>
      <GridWrapper>
        <Bg />
        <Content className="spacing center">
          <Container className="spacing-lg">
            <Text className="spacing">
              <div>
                <p className="subheader">a wildly affordable SEO plan</p>
                <h2 className="title">Affordable Calgary SEO "Sprint"!</h2>
              </div>
              <p>
                My Calgary SEO Sprint service offer is a "quick & dirty", yet
                highly effective 10-day SEO campaign that zooms in on your
                current website and Google Business Profile to make custom
                adjustments that can quickly skyrocket your Google rankings.
                This is exactly what I did to help a contractor get a 16x
                increase in online bookings just 50 days after getting his
                Calgary SEO Sprint.
              </p>
              <ButtonPrimary to="/contact">
                get your SEO sprint &#8594;
              </ButtonPrimary>
            </Text>
            <StaticImage src="../../images/seo-calgary.png" alt="seo calgary" />
          </Container>
        </Content>
      </GridWrapper>
    </Section>
  )
}

export default SEOa
