import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react"
import { Container, FlexMobileOpp, Section } from "../layoutComponents"
import styled from "styled-components"
import { ButtonInline, ButtonSecondaryLight } from "../buttons"

const Wrapper = styled.div`
  background: var(--clr-accent);
  color: var(--txt-light);

  .answer {
    padding: 2em;
  }
`

const AccordionStyle = {
  background: "var(--clr-light)",
  color: "var(--txt-dark)",
  borderRadius: "var(--br)",
  border: "none",
}

export default function Faq2(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <Accordion className="spacing">
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      How much will it cost to build my new website?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className="answer">
                    I will start by giving you an answer you'll probably hate:
                    every project is different and it is impossible to provide
                    you with a Calgary website design price that makes sense
                    before speaking with you. <br />
                    <br />
                    Now for the answer you were looking for (kind of): a new
                    website, on average, may cost anywhere between $4,000 and
                    $20,000. However, it's important that we discuss your
                    objectives to determine a website price that doesn't make
                    you fall off your chair.
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      How involved can I be in the website design process?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className="answer">
                    Easy answer: as involved as you want! Some clients love to
                    sit back, relax, and enjoy the process of having their
                    website built without lifting a finger. Other clients love
                    having a say in the look, feel, and aesthetics of their new
                    website design Calgary. Either way, my clients have always
                    reported loving the process, while respecting the fact that
                    I will provide insights to their suggestions in order to
                    maintain a great user experience for their online customers.
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Will my website be mobile-friendly & responsive?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className="answer">
                    Oh heck yes! With more than 60% of customers initially using
                    their phones when looking for a new service provider or
                    online products, it's imperative to the success of your
                    website design that we consider the experience that these
                    mobile-users will have while scrolling your website by
                    creating a mobile-friendly (or mobile-responsive) layout.
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Do you do SEO?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className="answer">
                    You bet. I'm a strong believer of a results-oriented
                    approach to Calgary website design. Implementing even the
                    most basics of SEO in the initial build of your website will
                    propel you far above your online competition. Why? Because a
                    lot of Calgary web design companies are just that -
                    designers and developers without the time for SEO. <br />
                    <br /> In fact, before even getting started on building your
                    new website, I spend the first 2 weeks doing an SEO deep
                    dive to analyze the best possible keywords to implement on
                    your website while creating a content strategy on how to use
                    those keywords in a way that maximizes your visibility and
                    profit. <br />
                    <br /> If you want a more in-depth explanation on how I
                    implement SEO on your Calgargy website design, don't
                    hesitate to{" "}
                    <ButtonInline to="/contact">contact me!</ButtonInline>
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Do you provide the content?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className="answer">
                    Most of the time, no. It's important that the
                    industry-expert (you) craft the content in an informative
                    and educational manner to provide maximum value for your
                    customers. However, I understand that you have more
                    important activities to spend your time on which is why I'm
                    connected with multiple talented writers in various
                    industries of expertise. <br />
                    <br /> Furthermore, if you have an existing website, I will
                    restructure the content from there in a more engaging and
                    SEO-friendly way. If you have a website that already has a
                    decent amount of content (1,000+ words), you are likely
                    ranking on Google for some of your service or product
                    keywords naturally. In that case, it's important that we
                    consider this SEO data as we may be able to target "low
                    hanging fruit" (keywords that are ranking somewhere between
                    the 1st and 30th positions) for the best possible
                    early-stage website design and SEO results.
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      How long will it take to build my website?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className="answer">
                    Another answer you'll probably hate: it depends! <br />
                    <br />
                    It depends on the size and complexity of your website. A
                    typical 5 - 10 page Calgary website design can take anywhere
                    between 4 - 6 weeks to perfect, while a more complex website
                    that has 100s of unique pages may take up to 3 months to
                    complete. <br />
                    <br />
                    It's important that we discuss your needs and your website
                    design budget to analyze feasible timelines.
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Will I have access to my website to make changes?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className="answer">
                    Yes you will. Most of the websites I build are set up in a
                    way that enables my clients with access to a commonly used
                    content management system to add or edit website content
                    (text and images). <br />
                    <br />
                    However, you will only have access to the content itself.
                    The websites are custom-coded (yet hooked up to WordPress
                    for content management), so only with advanced HTML, CSS,
                    and JavaScript skills will you be able to edit the design
                    and functionality of the website.
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Will you host my new website?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className="answer">
                    I will provide suggestions for my preferred website hosting
                    providers that deliver only the most speedy of websites. So
                    yes, I will host your website, but you will have 100%
                    ownership of the hosting account itself for full control and
                    100% freedom. <br />
                    <br />
                    Far too often I have businesses coming to me with the
                    problem of being "locked out" of their website. Their
                    previous Calgary website design company hosted their website
                    on their own servers without delegating any sorts of access
                    or rights making it impossible to migrate important
                    marketing data and website material. That's not how I roll.
                  </p>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Do you provide website maintenance?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className="answer">
                    Absofreakinglutely. I'm a strong believer that your website
                    will "grow with you" which is why I never leave my clients
                    in the dust after designing their website. Anytime you have
                    an update to make on your Calgary website design that you
                    don't want to handle yourself, I'm just a phone call or
                    email away to make that happen.
                  </p>
                </AccordionPanel>
              </AccordionItem>
              {/* <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      What else do I need to know before building my website?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className="answer"></p>
                </AccordionPanel>
              </AccordionItem> */}
            </Accordion>
            <div className="spacing-md">
              <h2 className="title">
                frequently asked Calgary website design questions
              </h2>
              <div className="spacing">
                <p>
                  As a business owner, I understand that hiring a Calgary web
                  designer can feel like a daunting task. You may have many
                  questions and concerns about the process, pricing, your
                  involvement, timelines, what you're responsible for,
                  processes, and more. That's why I've put together this FAQ
                  section to help answer some of the most common questions I
                  receive from my clients before, during, and after building
                  their website.
                </p>
              </div>
              <ButtonSecondaryLight to="/contact">
                get in touch
              </ButtonSecondaryLight>
            </div>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  )
}
