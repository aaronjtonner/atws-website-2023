import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonInline } from "../buttons"
import { Container, Section } from "../layoutComponents"

const GridAuto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  grid-gap: 2em;

  & > * {
    justify-self: center;
    align-self: center;
  }
`

const Text = styled.div`
  max-width: 90ch;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

export default function Clients() {
  return (
    <Section>
      <Container className="spacing">
        <Text>
          <h2 className="title center">
            some of my <span className="italics text-shadow">awesome</span> web
            design & SEO clients...
          </h2>
          <p>
            Since starting a{" "}
            <ButtonInline to="/about">
              web design & development business
            </ButtonInline>{" "}
            in early 2020, I have had the pleasure of working with a variety of
            industries on their{" "}
            <ButtonInline to="/services/web-design-calgary">
              website
            </ButtonInline>{" "}
            and{" "}
            <ButtonInline to="/services/calgary-seo-services">
              SEO services
            </ButtonInline>
            , including construction & home services, lodging, automotive,
            manufacturing, engineering, health & wellness, fine arts,
            advertising, and more. Below are a few of those lucky clients!
          </p>
        </Text>
        <GridAuto>
          <StaticImage
            src="../../images/clients/web-design-calgary-client-1.svg"
            alt="web design calgary, AB client"
          />
          <StaticImage
            src="../../images/clients/calgary-web-design-client-2.svg"
            alt="calgary web design client"
          />
          <StaticImage
            src="../../images/clients/calgary-website-design-client-3.svg"
            alt="calgary website design client"
          />
          <StaticImage
            src="../../images/clients/website-design-calgary-client-4.svg"
            alt="website design calgary client"
          />
          <StaticImage
            src="../../images/clients/web-designer-calgary-client-5.svg"
            alt="web designer calgary client"
          />
          <StaticImage
            src="../../images/clients/calgary-web-designer-client-6.svg"
            alt="calgary web designer client"
          />
          <StaticImage
            src="../../images/clients/best-calgary-web-design-client-7.svg"
            alt="best calgary web design client"
          />
          <StaticImage
            src="../../images/clients/best-calgary-website-designer-client-8.svg"
            alt="best calgary website designer client"
          />
          <StaticImage
            src="../../images/clients/website-designers-calgary-client-9.svg"
            alt="website designers calgary client"
          />
          <StaticImage
            src="../../images/clients/calgary-website-designers-client-10.svg"
            alt="calgary website designers client"
          />
          <StaticImage
            src="../../images/clients/web-designers-calgary-client-11.svg"
            alt="website designers calgary client"
          />
          <StaticImage
            src="../../images/clients/web-design-calgary-client-12.svg"
            alt="web design calgary client"
          />
          <StaticImage
            src="../../images/clients/web-design-calgary-client-13.svg"
            alt="web design calgary client"
          />
          <StaticImage
            src="../../images/clients/web-design-calgary-client-14.svg"
            alt="web design calgary client"
          />
          <StaticImage
            src="../../images/clients/web-design-calgary-client-15.svg"
            alt="web design calgary client"
          />
        </GridAuto>
      </Container>
    </Section>
  )
}
