import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import { ButtonPrimary } from "../../components/buttons"
import Layout from "../../components/layout"
import {
  Container,
  Flex,
  FlexMobileOpp,
  Section,
} from "../../components/layoutComponents"
import SEO from "../../components/seo"
import ComponentA from "../../components/components/componentA"
import AllReviews from "../../components/reviews"
import Clients from "../../components/components/clients"
import ComponentB from "../../components/components/componentB"
import Benefits from "../../components/components/benefits"
import ComponentC from "../../components/components/componentC"
import Gallery from "../../components/components/gallery"
import Cta1 from "../../components/components/Cta1"
import { StaticImage } from "gatsby-plugin-image"
import ComponentD from "../../components/components/componentD"
import Faq1 from "../../components/components/Faq1"
import ComponentE from "../../components/components/componentE"
import FormContact from "../../components/forms/formContact"

export default function WebDesignCalgary() {
  return (
    <Layout>
      <SEO />
      <BannerSecondary
        to1="/"
        link1="home"
        to2="/services"
        link2="services"
        to3="/services/web-design-calgary"
        link3="web design calgary"
      />
      <Section>
        <Container className="center spacing">
          <p className="title">
            <span className="text-shadow">oh yeah,</span> there's more where
            that came from...
          </p>
          <ButtonPrimary to="/portfolio">view portfolio &#8594;</ButtonPrimary>
        </Container>
      </Section>
      <ComponentA />
      <Clients />
      <AllReviews />
      <Benefits />
      <Gallery />
      <ComponentC />
      <Cta1 />
      <Section>
        <Container>
          <Flex>
            <div className="spacing">
              <div>
                <p className="subheader bold caps accent">subtitle</p>
                <h2 className="title">custom website design calgary</h2>
              </div>
              <p>
                I have been highly reviewed after working with a variety of
                industries including tech startups, ecommerce businesses, home
                renovators, electricians, concrete contractors, 3D printing
                shops and other professional service providers. If you’re
                looking for reputable website design companies Calgary, you have
                met your match! It is my goal to create a outstanding website
                design that will help grow your business by getting more
                visibility and search traffic from quality customers online.
                Your customers and clients have high expectations for your
                online appearance and it’s important that you stand out from
                your local competition with a custom website design. I’m not
                just going to choose a random template builder and throw your
                information into it. Whether you’re due for a redesign, or a new
                website altogether, I’m going to come up with a custom web
                design Calgary solution that your customers will love and
                remember. An outstanding website will not only help you get
                recognized, it will help you land bigger and better sales for
                your business. My professional website designer process includes
                optimizing the web page for a fantastic user experience and user
                interface meant to optimize customer conversions. 
              </p>
              <ButtonPrimary to="/contact">
                get a custom website &#8594;
              </ButtonPrimary>
            </div>
            <StaticImage
              class="stretch img-right"
              src="../../images/projects/calgary-web-design-for-photographer.jpg"
              alt="customer website design calgary"
            />
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <FlexMobileOpp>
            <StaticImage
              class="stretch img-left"
              src="../../images/projects/calgary-web-design-for-photographer.jpg"
              alt="customer website design calgary"
            />
            <div className="spacing">
              <div>
                <p className="subheader bold caps accent">subtitle</p>
                <h2 className="title">calgary website development services</h2>
              </div>
              <p>
                As your full-service web consultant, I provide high-quality
                Calgary web development services that will bring the design to
                life on a fully-functioning and error-free website. Along with
                website speed and performance optimization, my Calgary web
                development process includes responsive CSS for a
                mobile-friendly design that will ensure a great user experience
                for your customers. I will have a live website staging link that
                you can use to check in on the progress of your project at any
                time. Along with that, I also provide weekly progress updates in
                order to keep you fully in the loop on your Calgary website
                design and development project.
              </p>
              <ButtonPrimary to="/contact">talk to me today</ButtonPrimary>
            </div>
          </FlexMobileOpp>
        </Container>
      </Section>
      <Section>
        <Container>
          <Flex>
            <div className="spacing">
              <div>
                <p className="subheader bold caps accent">subtitle</p>
                <h2 className="title">website maintenance & updates</h2>
              </div>
              <p>
                I provide regular website maintenance and updates to ensure that
                your customers remain up-to-date as your business evolves.
                Updating the content on your site builds trust between you and
                your customers. If you’re in need of website maintenance
                services Calgary, get in touch with me today!
              </p>
              <ButtonPrimary to="/contact">
                get a maintenance plan &#8594;
              </ButtonPrimary>
            </div>
            <StaticImage
              class="stretch img-right"
              src="../../images/projects/calgary-web-design-for-photographer.jpg"
              alt="customer website design calgary"
            />
          </Flex>
        </Container>
      </Section>
      <Section>
        <Container>
          <FlexMobileOpp>
            <StaticImage
              class="stretch img-left"
              src="../../images/projects/calgary-web-design-for-photographer.jpg"
              alt="customer website design calgary"
            />
            <div className="spacing">
              <div>
                <p className="subheader bold caps accent">subtitle</p>
                <h2 className="title">website hosting & security</h2>
              </div>
              <p>
                Not only will you receive top-notch customer service from your
                web designer Calgary, you’ll also be provided with free website
                hosting solutions through the use of Netlify and Github. The
                combination of these technologies provide fast, secure, and
                reliable website hosting solutions that takes the work off your
                hands. 
              </p>
              <ButtonPrimary to="/contact">
                get hosting services &#8594;
              </ButtonPrimary>
            </div>
          </FlexMobileOpp>
        </Container>
      </Section>
      <Section>
        <Container>
          <Flex>
            <div className="spacing">
              <div>
                <p className="subheader bold caps accent">subtitle</p>
                <h2 className="title">
                  search engine optimization (calgary SEO services)
                </h2>
              </div>
              <p>
                Need website SEO support service in Calgary Alberta? Included in
                my website services are image optimization and semantic HTML and
                quality code to make it easier for your business to be found on
                google. Along with that, I optimize page layout and create
                compelling SEO content and other internet marketing services to
                help increase your website visibility on search engines like
                google. I’ll set up google analytics for your website to monitor
                user engagement and interaction data, as well as submit your
                sitemap to the google search console so your website will get
                indexed by google to show up in the search results.
              </p>
              <ButtonPrimary to="/contact">
                get SEO services &#8594;
              </ButtonPrimary>
            </div>
            <StaticImage
              class="stretch img-right"
              src="../../images/projects/calgary-web-design-for-photographer.jpg"
              alt="customer website design calgary"
            />
          </Flex>
        </Container>
      </Section>
      <ComponentD />
      <Faq1 />
      <ComponentE />
      <FormContact />
    </Layout>
  )
}
