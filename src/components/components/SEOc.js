import React from "react"
import styled from "styled-components"
import { AnchorInline, ButtonInline } from "../buttons"
import ServiceForm from "../forms/serviceForm"
import { Container, Flex, Section } from "../layoutComponents"
import { StaticImage } from "gatsby-plugin-image"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 4em;

  @media screen and (max-width: 48em) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Aside = styled.div`
  grid-column: 1 / span 1;

  .service-form {
    @media screen and (max-width: 48em) {
      display: none;
    }
  }
`

const Navigation = styled.div`
  box-shadow: var(--shadow-light);
  border-radius: var(--br);
  padding: 2em;

  ul {
    list-style-type: none;
    margin: var(--spacer) 0 0 0;
    padding: 0;
    text-transform: capitalize;

    & > * + * {
      margin-top: 0.2em;
    }
  }
`

const Content = styled.div`
  grid-column: 2 / -1;
  @media screen and (max-width: 48em) {
    grid-row: 1 / span 1;
  }
`

const Img = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`

const ServiceAreas = styled.div`
  padding: 2em;
  border: 1px solid var(--txt-dark-secondary);
  border-radius: var(--br);
`

export default function SEOc(props) {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Aside className="spacing">
            <Navigation className="spacing">
              <h3 className="caps accent title bold">
                Marketing <br /> services
              </h3>
              <ul>
                <li>
                  <ButtonInline to="/services/web-design-calgary">
                    custom web design calgary
                  </ButtonInline>{" "}
                  <hr />
                </li>
                <li>
                  <ButtonInline to="/services/calgary-seo-services">
                    search engine optimization (SEO)
                  </ButtonInline>{" "}
                  <hr />
                </li>
                <li>
                  <ButtonInline to="/services/web-design-calgary">
                    website development
                  </ButtonInline>{" "}
                  <hr />
                </li>
                <li>
                  <ButtonInline to="/services/web-design-calgary">
                    web maintenance & hosting
                  </ButtonInline>{" "}
                  <hr />
                </li>
              </ul>
            </Navigation>
            <div className="service-form">
              <ServiceForm />
            </div>
          </Aside>
          <Content className="spacing">
            <div>
              <p className="subheader accent caps italics">
                unlock the full potential of your website
              </p>
              <h2 className="title">professional SEO services Calgary</h2>
            </div>
            <div className="spacing">
              <div>
                <h3 className="body--small upper  italics">
                  get unmatched on-page Calgary SEO services
                </h3>
                <p>
                  A tried and true method to seeing success on your Calgary SEO
                  campaign. Google loves juicy content that helps guide your
                  customers in the right direction. With a heavy focus on
                  building a strong foundation to your SEO campaign using
                  relevant keywords, you can expect your Calgary SEO services
                  provider to build out 3,000+ word service pages that use your
                  keywords in the places they matter most.
                </p>
              </div>
              <div>
                <h3 className="body--small upper  italics">
                  Off-page SEO Calgary
                </h3>
                <p>
                  The holy grail to a successful Calgary SEO campaign -
                  trustworthy citations and{" "}
                  <span className="italics">backlinks.</span> Get an SEO
                  expert's pair of eyes on the backlinks your competition is
                  using so your website can start gaining trust from customers
                  on more online channels, while gaining love from Google as
                  your website starts to climb the SEO Calgary rankings.
                </p>
              </div>
              <div>
                <h3 className="body--small upper  italics">
                  Google Business Profile Calgary SEO Optimizations
                </h3>
                <p>
                  A wildly effective way to reaching new customers is by
                  focusing on your Google Maps listing (i.e. Google Business
                  Profile). Our friends at Google have put a heavy emphasis on
                  making sure local businesses know their SEO campaigns success
                  depend greatly on this profile. Relevance, proximity, and
                  trust are three key signals that a strong GBP send to Google.
                  Your new Calgary SEO company dedicates a large effort on
                  making sure your GBP is going to be well-loved by Google, and
                  by your customers. We'll do this by starting off on the right
                  foot - getting 5-star customer reviews!
                </p>
              </div>
            </div>
            <Flex>
              <StaticImage
                src="../../images/seo-services-calgary.jpg"
                alt="seo services calgary"
              />
            </Flex>
            <ServiceAreas className="spacing">
              <p className="center bold">
                Are you a business owner who is struggling to grow and expand
                your operations? Are you having a hard time improving your brand
                awareness due to lack of time and marketing? Are you struggling
                to reach your sales goals? Do you want to get more high quality
                customers and increase your revenue?
              </p>
              <hr />
              <center>
                <ButtonInline to="/contact" className="italics caps">
                  get the website help you're looking for &#8594;
                </ButtonInline>
              </center>
            </ServiceAreas>
          </Content>
        </Wrapper>
      </Container>
    </Section>
  )
}
