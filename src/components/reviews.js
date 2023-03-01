import React from "react"
import styled from "styled-components"
import { FaStar, FaGoogle } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { StaticImage } from "gatsby-plugin-image"
import { Container, GridAuto, Section } from "./layoutComponents"
import { ButtonInline, ButtonPrimary } from "./buttons"

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 2em auto 4em auto;
  grid-template-rows: 8em auto 4em;

  @media screen and (max-width: 48em) {
    display: flex;
    flex-direction: column;
    background: var(--clr-dark);
    padding-bottom: 4em;
  }
`

const Bg = styled.div`
  background: var(--clr-dark);
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 1;
  @media screen and (max-width: 48em) {
    display: none;
    
`

const Text = styled.div`
  padding: 4em 0;
  grid-row: 2 / -1;
  grid-column: 4 / -1;
  z-index: 2;

  .light {
    color: var(--txt-light);
  }
`

const Reviews = styled.div`
  grid-row: 1 / span 2;
  grid-column: 2 / span 1;
  z-index: 2;
`

const Wrapper = styled.div`
  background: var(--clr-light-secondary);
  color: var(--txt-dark);
  padding: 2em;
  border-radius: var(--br);
  box-shdaow: var(--shadow-bottom-light);
  height: 100%;
  a {
    text-decoration: underline;
    font-size: var(--fs-sm);
  }
`

const FlexStars = styled.div`
  display: flex;
  & > * + * {
    margin-left: 5px;
  }
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  & * + * {
    margin-left: 2px;
  }
`

const fontStyle = {
  color: "var(--clr-accent)",
}

const Review = props => {
  return (
    <Wrapper className="spacing">
      <FlexStars>
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
        <FaStar style={fontStyle} />
      </FlexStars>
      <p className="italics">"{props.review}"</p>

      <Flex>
        <FcGoogle size={35} />
        <div>
          <p className="caps bold">{props.name}</p>
          <a
            href="https://www.google.com/maps/place/Aaron+Tonner+Web+Solutions/@51.0276233,-114.087835,10z/data=!4m8!3m7!1s0x8984d19ad4196043:0xa41e3748c364663b!8m2!3d51.0276233!4d-114.087835!9m1!1b1!16s%2Fg%2F11p001rjcp"
            target="_blank"
            className="accent"
          >
            Read more Google reviews &#8594;
          </a>
        </div>
      </Flex>
    </Wrapper>
  )
}

const AllReviews = props => {
  return (
    <Section>
      <GridWrapper>
        <Bg />
        <Text>
          <Container className="spacing-lg">
            {/* <FlexStars>
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
            </FlexStars> */}
            <div className="spacing-md">
              <div>
                <p className="subheader accent">{props.subheader}</p>
                <h2 className="title light">{props.title}</h2>
              </div>
              <div className="spacing">
                <p className="light">
                  Working with your new adept{" "}
                  <ButtonInline
                    to="/services/web-design-calgary"
                    className="bold italics"
                  >
                    Calgary web design service
                  </ButtonInline>{" "}
                  provider means it is completely up to you on how involved you
                  would like to be on your next website, landing page,
                  eCommerce, or{" "}
                  <ButtonInline to="/services/calgary-seo-services">
                    SEO
                  </ButtonInline>{" "}
                  project.
                </p>
                <p className="light">
                  Some clients love when I take full control of their website
                  design or SEO campaign because it’ll be unique and spot on to
                  your branding. Other’s love a more collaborative approach that
                  is taken for the overall look and feel of their new website,
                  or{" "}
                  <ButtonInline to="/services/calgary-seo-services">
                    SEO campaign
                  </ButtonInline>{" "}
                  messaging.
                </p>
                <p className="light">
                  Either way, the priority remains:{" "}
                  <span className="bold italics">
                    you will see real results{" "}
                  </span>
                  come from getting an expert to{" "}
                  <ButtonInline to="/services/web-design-calgary">
                    improve your website
                  </ButtonInline>{" "}
                  , SEO, and online presence.
                </p>
              </div>
              <ButtonPrimary to="/contact">
                get real results &#8594;
              </ButtonPrimary>
            </div>
            {/* <FlexStars>
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
              <FaStar style={fontStyle} />
            </FlexStars> */}
          </Container>
        </Text>
        <Reviews className="spacing">
          <Container className="spacing">
            <Review
              name="Rob Thiessen, 3'D Revolution Technologies Inc"
              review="I really enjoyed working collaboratively with Aaron. He's very adept at what he does, and efficient as well. I also appreciated the professionalism he brought to my online communications with clients. His advise was always solid and thoughtful, and with his help I've been able to communicate my unique business and value proposition to clients much more effectively. This includes website and direct communications. I wouldn't hesitate to recommend Aaron Tonner Web Solutions to other business owners!"
            />
            <Review
              name="James Ross, Royco Electric Ltd"
              review="We hired him for our website / business solutions for better exposure and marketing and with very little input on my end his initial design and layout was spot on to our branding.  A true start to finish turn key operation - answered emails promptly, took the time for video calls, handled our changes and suggestions almost instantly and was always patient and willing to go the extra mile for our needs.  I highly recommend Aaron to any business not only looking for a great website but to increase revenue and exposure.  The tools he installed have already increased our customer connections."
            />
            <Review
              name="Kathryn Kessler, Pacha Mamma Massage & Misty Ridge Retreat B&B"
              review="Before seeking Aaron’s help, our websites (Misty Ridge Retreat B&B & Pacha Mamma Massage) were bare bones, made quickly without the bells and whistles or any SEO research. Creating a vital, viable website was something that eluded us as well as finding time to learn. Aaron recreated both sites masterfully. We would recommend Aaron to anyone who is having the same struggle as we did. Aaron is very knowledgeable, creative and patient with clients, like me, who do not know the technical side of website building."
            />
          </Container>
        </Reviews>
      </GridWrapper>
    </Section>
  )
}

export default AllReviews
