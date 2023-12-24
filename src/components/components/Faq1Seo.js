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
import { AnchorInline, ButtonInline, ButtonSecondaryLight } from "../buttons"

const Wrapper = styled.div`
  background: var(--clr-dark);
  color: var(--txt-light);
`

const AccordionStyle = {
  background: "var(--clr-light)",
  color: "var(--txt-dark)",
  borderRadius: "var(--br)",
  border: "none",
}

export default function Faq1Seo(props) {
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
                      What is Calgary SEO?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>
                    SEO (Search engine optimization) is a marketing strategy
                    used to get your website listed at the top of Google search
                    results for search phrases related to your services or
                    products. Calgary SEO is an effective way to create
                    long-term visibility of what you have to offer for the
                    customers looking for you online. The beauty of using SEO
                    services in Calgary is that you don't need to convince your
                    customers that your services or products are something they
                    need, because they're already looking. What you DO have to
                    accomplish, is communicate to your customers why they should
                    hire YOU instead of your competitors.
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
                      How much does Calgary SEO cost?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>
                    SEO Calgary service rates come in all shapes and sizes and
                    you will typically be quoted between $1,000 - $10,000 per
                    month depending on the marketing company you hire. However,
                    taking advantage of my SEO Sprint offer enables your
                    business an affordable SEO service at{" "}
                    <span className="bold">
                      less than $950 as a one-time investment.
                    </span>{" "}
                    <br /> When you're selecting an SEO package, it's important
                    to note that different marketing companies use different SEO
                    strategies - it's almost like a game of who can figure out
                    what's going to be the most effective SEO tool to use based
                    on your industry, and then to actually use that tool in the
                    most strategic and creative way. This is why I created the
                    SEO Sprint offer - I've selected the most effective SEO
                    strategies I've used for my client's over the years and
                    stuffed them into one juicy and low-cost Calgary SEO service
                    package that aims to provide the best results in as short
                    amount of time possible.
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
                      How long until I see results from SEO?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>
                    You will typically see results from your SEO campaigns
                    within 3 - 6 months, however, it varies widely by industry
                    and competition of the keywords targetted in your Calgary
                    SEO campaigns. My client's have seen a massive boost in SEO
                    rankings in as little time as 50 days from launching their
                    campaign - mainly due to effective market research to set
                    the stage.
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
                      Should I invest in Calgary SEO?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>
                    My biased answer is yes, if you are a local business who has
                    the capacity to take on more clients, and have the means to
                    invest $950 into an SEO Sprint, this is something you should
                    seriously consider. However, SEO is a marketing strategy
                    that typically has better & faster results with an existing
                    website that doesn't look like it's from 1995. If you're not
                    quite there, feel free to inquire about my wildly affordable{" "}
                    <AnchorInline to="/services/web-design-calgary">
                      $100 website offer
                    </AnchorInline>
                    . Otherwise, I'd be happy to{" "}
                    <AnchorInline to="/contact">chat</AnchorInline> with you
                    further about your SEO questions.
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
                      Does SEO gaurantee results?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>
                    No, SEO certainly does not gaurantee any results. If you are
                    talking to a Calgary SEO service provider promising a boost
                    in your Google rankings, run! SEO is an ever-changing
                    environment as Google makes frequent improvements to the
                    algorithm in order to show customers on Google the best
                    possible results for the search query. So, the reason SEO
                    Calgary does not gaurantee results is because it's almost
                    impossible to know what competition has planned for their
                    next move in their own SEO campaign. It is important to keep
                    up with your online competition to see what they've already
                    done, and find ways to do it better - but when you are in
                    the dark on their next move, you have to find ways to be one
                    step ahead, which sometimes doesn't always prove to be the
                    best method. This is why it's important to hire a SEO expert
                    Calgary that's got their finger on the pulse!
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
                      Why is Calgary SEO better than Google Ads?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>
                    This is a generalization that doesn't apply to every
                    business. The nature of SEO provides long-term benefits
                    which <span className="italics">can</span> be more
                    cost-effective than Google Ads. With SEO, you are not paying
                    for clicks, so depending on the industry, you might spend
                    $500 for 5 clicks on your Google Advertisement, compared to
                    spending $500 on SEO, you're getting a month's worth of work
                    that can result in a spike in rankings a few months down the
                    road. I hope this gives you a better understanding of the
                    difference in Calgary SEO vs. Ads - if you have any further
                    questions please{" "}
                    <ButtonInline to="/contact">reach out!</ButtonInline>
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
                      Can I do my own SEO?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p>
                    You sure can! Anyone can do SEO - it's just a matter of
                    knowing how to scan online competition for the successful
                    keywords they're using, and finding better ways to implement
                    them on your website, all while staying up to date with your
                    other online profiles (link building, Google Business
                    Profile, online reviews, etc). I'll have some DIY articles
                    posted in the near future that can teach you exactly how to
                    carry out a successful Calgary SEO campaign.
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <div className="spacing-md">
              <h2 className="title">SEO Services Calgary FAQ</h2>
              <div className="spacing">
                <p>
                  These are my answers to some of the most common questions I
                  recieve from clients while discussing their SEO needs. If you
                  still have questions, please don't hesitate to{" "}
                  <ButtonInline to="/contact">contact me!</ButtonInline>
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
