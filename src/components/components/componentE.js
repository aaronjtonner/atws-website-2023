import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonInline, ButtonPrimary } from "../buttons"
import { Container, Flex, Section } from "../layoutComponents"

const Wrapper = styled.div`
  //   background: var(--clr-accent);
  //   color: var(--txt-light);

  .last {
    margin-left: auto;
    margin-right: auto;
    max-width: 70ch;
    text-align: center;
  }
`

const Text = styled.div``

const List = styled.div``

export default function ComponentE() {
  return (
    <Wrapper>
      <Section>
        <Container className="spacing">
          <Flex>
            <StaticImage
              src="../../images/calgary-web-design-prices-costs.jpg"
              alt="calgary web design prices overview"
              className="img-left stretch"
            />
            <Text className="spacing-lg">
              <div className="spacing">
                <div>
                  <p className="subheader">
                    your investment in website design services
                  </p>
                  <h2 className="title">calgary web design prices overview</h2>
                </div>
                <p>
                  At this point you’re probably wondering, “how much does a
                  website cost in Calgary?” Here I will briefly discuss how I
                  calgary web design prices are justified.
                </p>
                <p>
                  One of the first pieces of information I’d ask about is what
                  your customer lifetime value is. Knowing what the total worth
                  of a customer is to your business over the entire period of
                  your relationship with them is an important metric to
                  illustrate how I determine a suitable cost for your website to
                  yield a positive return on your investment. My Calgary website
                  design prices are determined by a few additional factors that
                  we can dig deep into on a{" "}
                  <ButtonInline to="/comntact">discovery call</ButtonInline>:
                  your business goals and challenges.
                </p>
                <p className="bold italics">
                  The #1 focus when it comes to determining a Calgary website
                  design cost is that it will result in a positive return on
                  your investment. Every business is different which means
                  website costs are always different. If you would like to
                  discuss the above points to learn more about how I can help
                  your business and to determine a web design investment level
                  that aligns with your goals and budget, send me a message to
                  arrange a quick call or to get quote.
                </p>
              </div>
              {/* <List className="spacing">
                <div>
                  <h3 className="subheader">your business goals</h3>
                  <p className="body--small">This is used for...</p>
                  <hr />
                </div>

                <div>
                  <h3 className="subheader">
                    The challenges you're faced with
                  </h3>
                  <p className="body--small">This is used for...</p>
                  <hr />
                </div>
              </List> */}
              <ButtonPrimary to="/contact">
                get a website quote &#8594;
              </ButtonPrimary>
            </Text>
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  )
}
