import React from "react"
import styled from "styled-components"
import { Container, Flex, Actions } from "../layoutComponents"
import {
  AnchorUnderline,
  ButtonPrimary,
  ButtonSecondaryDark,
  ButtonUnderline,
} from "../buttons"
import { StaticImage } from "gatsby-plugin-image"
import { FaCheckCircle } from "react-icons/fa"

const device = {
  md: "43em",
}

const HeroGrid = styled.div`
  display: grid;
  grid-template-rows: auto 2em auto;
`

const HeroWrapper = styled.div`
  background: var(--clr-dark);
  min-height: 85vh;
  height: 100%;
  grid-column: 1 / -1;
  grid-row: 1 / span 2;
  z-index: 1;

  display: flex;
  align-items: center;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`

const Bottom = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  z-index: 2;
  border-radius: var(--br);
  box-shadow: var(--shadow-light-accent);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background: var(--clr-light);
`

const Text = styled.div`
  color: var(--txt-light);
  max-width: 70ch;
  width: 100%;
  padding-bottom: 3em;

  h1 {
    text-shadow: var(--shadow-light-accent);
    font-size: var(--fs-1);
    font-weight: var(--fw-900);
    text-transform: capitalize;
    line-height: 1.1;
    font-family: var(--ff-raleway);

    @media screen and (min-width: 45em) {
      font-size: 4rem;
      line-height: 1;
    }
  }
`

export default function HeroBasic() {
  return (
    <HeroGrid>
      <HeroWrapper>
        <Container>
          <Text className="spacing-lg">
            <h1 className="caps bold">get the website you deserve</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident modi similique, suscipit eius odio cupiditate
              temporibus. Sed aliquam quidem ea. Temporibus obcaecati veniam
              corporis, architecto quae voluptates nemo ratione magni.
              Voluptatibus, quo voluptate! Quos accusantium maiores ea
              consequuntur nostrum voluptatum, odio doloremque vitae quasi.
              Nobis, doloremque! Cum voluptate rerum quis alias fugiat
              accusantium sapiente iste, aliquam optio praesentium voluptas
              soluta nam temporibus ipsa? Ducimus cupiditate officia molestias
              suscipit aut placeat, ex vel facilis autem modi!
            </p>
            <ButtonPrimary to="/">call me to an action</ButtonPrimary>
          </Text>
        </Container>
      </HeroWrapper>
      <Bottom>
        <Flex>
          <StaticImage
            src="../../images/web-design-klaad-mockup-1.jpg"
            alt="website design mockup"
          />
          <div>
            <h2 className="title caps">
              contractor gets 16x more bookings in 60 days
            </h2>
            <AnchorUnderline href="https://www.klaadglass.ca" target="_blank">
              visit this website &#8594;
            </AnchorUnderline>
          </div>
        </Flex>
      </Bottom>
    </HeroGrid>
  )
}
