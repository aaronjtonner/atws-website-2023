import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonInline, ButtonPrimary } from "../buttons"
import { Container, GridThree, Section } from "../layoutComponents"

const StyledImg = styled(GatsbyImage)`
  max-height: 100px;
  max-width: 100px;
`

const Text = styled.div`
  max-width: 70ch;
  margin-left: auto;
  margin-right: auto;
`

const BenefitItem = styled.div`
  box-shadow: var(--shadow-light);
  //   background: var(--clr-dark);
  //   color: var(--clr-light);
  padding: 2em;
  border-radius: var(--br);

  h3 {
    color: var(--clr-accent);
  }
`

export default function Benefits() {
  return (
    <Section>
      <Container className="spacing-md">
        <Text className="center">
          <h2 className="title">
            The Benefits Of Hiring Me As Your Calgary Web Designer
          </h2>
        </Text>
        <GridThree>
          <BenefitItem className="spacing center">
            <StaticImage
              src="../../images/5-star-calgary-web-design-services.svg"
              alt="5 star calgary web design services"
              height={80}
            />
            <h3 className="title caps">5-star services</h3>
            <p>
              I provide{" "}
              <ButtonInline to="/reviews" className="italics bold">
                5-star Calgary web design services
              </ButtonInline>{" "}
              and have a background in engineering and solving complex problems
              which have translated to my ability in solving sales and marketing
              challenges that might be preventing you from reaching your
              business goals.
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
              design,{" "}
              <ButtonInline to="/services/calgary-seo-services">
                SEO
              </ButtonInline>
              , and online visibility efforts. Here are a few results I’ve
              gotten for past clients: helped a client in the construction
              industry{" "}
              <span className="italics">
                double their website traffic for increased sales,{" "}
              </span>
              helped a business receive funding from investors and acquire
              multiple international clients for their professional IT services.
              Recently helped a glass contractor{" "}
              <span className="italics">16x their bookings.</span>{" "}
              <ButtonInline to="/portfolio">
                There's more where that came from &#x2192;
              </ButtonInline>
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
              Working with your{" "}
              <ButtonInline to="/reviews">trusted</ButtonInline>{" "}
              <span className="">Calgary web designer</span> means that you will
              always have easy and direct contact with me whether it be through
              phone or email. No more waiting on hold with your web design
              company or agency that has to go through 5 different people to
              talk to the right person. Anytime you{" "}
              <ButtonInline to="/contact">reach out to me</ButtonInline>, I’ll
              be there.
            </p>
          </BenefitItem>
          <BenefitItem className="spacing center">
            <StaticImage
              src="../../images/website-design-calgary-ab-cheerful.svg"
              alt="website design calgary, AB"
              height={80}
            />
            <h3 className="title caps">your web design cheerleader</h3>
            <p>
              Let's face it - building a website can be stressful. But when you
              work with me, I'm here to make the process as fun and enjoyable as
              possible. I'm like your personal Calgary website design
              cheerleader, rooting for you every step of the way. I'll celebrate
              your victories with you (like when your website traffic starts to
              soar) and pick you up when you're feeling discouraged (because I
              know how tough the online world can be). And if you're feeling
              stuck creatively, I'll be happy to brainstorm with you and come up
              with fresh ideas that will make your website pop. With me as your
              web designer, you'll feel confident and motivated to take on the
              digital world.
            </p>
          </BenefitItem>
          <BenefitItem className="spacing center">
            <StaticImage
              src="../../images/web-designers-calgary-different.svg"
              alt="not your average web designers calgary"
              height={80}
            />
            <h3 className="title caps">not your average website designer</h3>
            <p>
              I take pride in being anything but ordinary - breaking the mold of
              traditional Calgary website design services by injecting
              personality, creativity, and even humor into my work. I believe
              that web design doesn't have to be boring or stuffy, and I'm not
              afraid to take risks and try new things. With me, you'll get a
              website design in Calgary that truly stands out from the rest.
            </p>
          </BenefitItem>
          <BenefitItem className="spacing center">
            <StaticImage
              src="../../images/calgary-website-design-relationships.svg"
              alt="not your average web designers calgary"
              height={80}
            />
            <h3 className="title caps">focused on relationships</h3>
            <p>
              I believe that the best Calgary website design is a result of
              strong relationships. That's why I don't just build your website
              and leave you in the dust. I'm here for you every step of the way,
              from the initial consultation to the launch of your website and
              beyond. I'll work with you to make sure your website stays up to
              date and meets your changing needs as your business grows. Plus,
              I'm not impossible to get intouch with - I'm always just a phone
              call or email away if you need me. You'll not only get a great
              website design in Calgary, but you'll also gain a long-term
              partner who's invested in your success.
            </p>
          </BenefitItem>
        </GridThree>
        {/* <center>
          <ButtonPrimary to="/contact">
            get a website quote &#x2192;
          </ButtonPrimary>
        </center> */}
      </Container>
    </Section>
  )
}
