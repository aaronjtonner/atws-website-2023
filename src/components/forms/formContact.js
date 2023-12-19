import React from "react"
import styled from "styled-components"

import { Section, Container, Flex, FlexMobileOpp } from "../layoutComponents"
import { Label, Input, TextArea, Submit } from "./formItems"
import Map from "../map"
import { AnchorInline } from "../buttons"

const FormWrapper = styled.div`
  // background: var(--clr-dark);
  // color: var(--txt-light);
  // padding: 2em;
`

export default function FormContact(props) {
  return (
    <Section>
      <Container>
        <div>
          <h3 className="title--bold center">
            <span className="italics">contact me here</span>
          </h3>
          <p className="caps center">
            Call{" "}
            <AnchorInline href="tel: 587-437-9161">587-437-9161</AnchorInline>{" "}
            or send me a message below!
          </p>
        </div>
        <Flex className="spacing-lg">
          {/* flex item 1 */}
          <FormWrapper>
            <form
              name="contact"
              className="spacing"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <Flex>
                <div className="spacing-sm">
                  <Label htmlFor="name">* Name:</Label>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="spacing-sm">
                  <Label htmlFor="email">* Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </Flex>
              <div className="spacing-sm">
                <Label htmlFor="phone">* Phone:</Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="spacing-sm">
                <Label htmlFor="subject">Subject:</Label>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="spacing-sm">
                <Label htmlFor="msg">* Message:</Label>
                <TextArea name="msg" id="msg" cols="30" rows="10" required>
                  Hi Aaron, I saw your $100 website offer with lifetime edits
                  and hosting and I'd love to hear more about it!
                </TextArea>
              </div>
              <Submit type="submit" id="submit" value="send" />
            </form>
          </FormWrapper>
          {/* flex item 2 */}
          <Map className="stretch" />
        </Flex>
      </Container>
    </Section>
  )
}
