import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "../buttons"
import { Container, GridThree, Section } from "../layoutComponents"

const StyledImg = styled(GatsbyImage)`
  max-height: 100px;
  max-width: 100px;
`

const BenefitItem = styled.div`
  box-shadow: var(--shadow-light);
  //   background: var(--clr-dark);
  //   color: var(--clr-light);
  padding: 2em;
  border-radius: var(--br);
`

export default function Benefits() {
  return (
    <Section>
      <Container className="spacing-md">
        <div className="center">
          <h2 className="title">
            The Benefits Of Hiring Me As Your Calgary Web Designer
          </h2>
        </div>
        <GridThree>
          <BenefitItem className="spacing center">
            <StaticImage
              src="../../images/5-star-calgary-web-design-services.svg"
              alt="5 star calgary web design services"
              height={80}
            />
            <h3 className="title caps">5-star services</h3>
            <p>
              I provide 5-star Calgary web design services and have a background
              in engineering and solving complex problems which have translated
              to my ability in solving sales and marketing challenges that might
              be preventing you from reaching your business goals.
            </p>
          </BenefitItem>
          <BenefitItem className="spacing center">
            <StaticImage
              src="../../images/trusted-web-designer-calgary.svg"
              alt="results based calgary webdsite design"
              height={80}
            />
            <h3 className="title caps">results-based solutions</h3>
            <p>
              I am confident that you will begin to see results for your
              business 90 days after working with me on your Calgary website
              design, SEO, and online visibility efforts. Here are a few results
              I’ve gotten for past clients: helped a client in the construction
              industry{" "}
              <span className="italics accent">
                double their website traffic for increased sales,{" "}
              </span>
              helped a business receive funding from investors and acquire
              multiple international clients for their professional IT services.
            </p>
          </BenefitItem>
          <BenefitItem className="spacing center">
            <StaticImage
              src="../../images/results-based-calgary-website-design.svg"
              alt="trusted web designer calgary"
              height={80}
            />
            <h3 className="title caps">direct communication</h3>
            <p>
              Working with your trusted web designer in Calgary means that you
              will always have easy and direct contact with me whether it be
              through phone or email. No more waiting on hold with your web
              design company or agency that has to go through 5 different people
              to talk to the right person. Anytime you reach out to me, I’ll be
              there.
            </p>
          </BenefitItem>
        </GridThree>
        <center>
          <ButtonPrimary to="/contact">get a website quote</ButtonPrimary>
        </center>
      </Container>
    </Section>
  )
}
