import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Hero from "../components/heros/hero"
import FormContact from "../components/forms/formContact"
import SEO from "../components/seo"
import Clients from "../components/components/clients"
import AllReviews from "../components/reviews"
import {
  Container,
  Section,
  Flex,
  FlexMobileOpp,
} from "../components/layoutComponents"
import { ButtonPrimary } from "../components/buttons"
import { StaticImage } from "gatsby-plugin-image"

export default function index() {
  return (
    <Layout>
      <SEO title="Aaron Tonner Web Solutions | SEO & Custom Website Services For Maximum Impact" description="I specialize in building high-performance custom websites that implement winning SEO strategies for maximum impact. Call 587-437-9161 to get started today!" />
        <Helmet>
          <script type="application/ld+json">
            {`
{
              "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Aaron Tonner Web Solutions",
  "url": "https://www.aarontonner.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "{search_term_string}",
    "query-input": "required name=search_term_string"
  }
            }, 
            {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Aaron Tonner Web Solutions",
  "image": "https://aarontonner.com/images/logo-white-bg.png",
  "@id": "",
  "url": "https://www.aarontonner.com/",
  "telephone": "5874379161",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Calgary",
    "addressRegion": "AB",
    "postalCode": "T2X 0G7",
    "addressCountry": "CA"
  },
"review": {
        {
      "@type": "Review",
      "author": "James Ross",
      "datePublished": "2021-09-28",
      "reviewBody": "Before I met Aaron we were operating under the radar relying on word of mouth and referrals. He reached out via email about his business solutions and his professionalism and confidence made for an easy decision. We hired him for our website / business solutions for better exposure and marketing and with very little input on my end his initial design and layout was spot on to our branding. A true start to finish turn key operation - answered emails promptly, took the time for video calls, handled our changes and suggestions almost instantly and was always patient and willing to go the extra mile for our needs. I highly recommend Aaron to any business not only looking for a great website but to increase revenue and exposure. The tools he installed have already increased our customer connections.",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "ratingValue": "5"
      }
    },
{
      "@type": "Review",
      "author": "Nick Holder",
      "datePublished": "2021-08-31",
      "reviewBody": "We couldn't be happier with our choice to hire Aaron for our web design project. We were asking a lot as not only did we want the finished site to look great, but we wanted it to be very easy for us to customise and add to ourselves. Aaron exceeded our expectations in both regards and kept us updated on a daily basis often by making demo videos to show the direction he was taking and give us insight into how we would be able to work with the site moving forward. One of the best things about working with Aaron was the ideas and suggestions he came up with to take our project to a more professional level. We really wanted someone who could show us the way and come up with ideas for us and this is exactly what we got. We threw all sorts of challenges Aaron's way and each time he came back with a number of options for us and was even willing to create iterations to help us choose the best solution. An example that springs to mind is our choice of homepage image which created problems when making overlaying text readable across all the devices. Aaron was able to fix this so that not only could we use the image we had chosen but the text is beautifully displayed on whichever device it is viewed from. We had a tight deadline for this project and Aaron was very conscious of this and organised the project in such a way that we comfortably achieved that. We can not recommend Aaron highly enough and already have plans to work with him in the future. Many thanks Aaron!",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "ratingValue": "5"
      }
    },
{
      "@type": "Review",
      "author": "Patrick Pierre",
      "datePublished": "2021-09-27",
      "reviewBody": "Communication is the biggest challenge in successfully completing projects with other web designers and developers, but Aaron always makes communication online to be effortless. Aaron Tonner Web Solutions provides the best web design and development services in Calgary and I highly recommend him for your next website project. Not only does he provide web design work, but also quality SEO services so that a business can easily be found online.",
      "reviewRating": {
        "@type": "Rating",
        "bestRating": "5",
        "ratingValue": "5"
      }
    }
      },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.882110,
    "longitude": -114.077640
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "16:00"
  },
  "sameAs": [
    "https://www.facebook.com/AaronTonnerWebSolutions",
    "https://www.instagram.com/aaronjtonner/",
    "https://www.linkedin.com/in/aarontonner/",
    "https://www.aarontonner.com/"
  ] 
}
          `}
          </script>
      </Helmet>
      <Hero />
      <Section>
        <Container>
          <div className="center">
            <h2 className="title">
              oh yeah, there's more where that came from...
            </h2>
            <ButtonPrimary to="/portfolio">view portfolio</ButtonPrimary>
          </div>
        </Container>
      </Section>
      <Clients />
      <AllReviews
        subheader="does creating a viable online strategy elude you?"
        title="dedicated to providing real results for web design & SEO clients"
      />
      <Section>
        <Container className="spacing-lg">
          <Flex>
            <div className="spacing">
              <div>
                <p className="subheader accent italics">
                  Drive your Sales and Growth
                </p>
                <h2 className="title">
                  high-performance custom website design calgary
                </h2>
              </div>
              <p>
                I have been highly reviewed after working with a variety of
                industries including tech startups, ecommerce businesses, home
                renovators, electricians, concrete contractors, 3D printing
                shops and other professional service providers. If you’re
                looking for reputable website design companies in Calgary, you
                have met your match! <br />
                <br /> My goal is to help you{" "}
                <span className="italics bold">make sales in your sleep!</span> 
              </p>
              <ButtonPrimary to="/services/web-design-calgary">
                web design services &#8594;
              </ButtonPrimary>
            </div>
            <StaticImage
              class="stretch"
              src="../images/custom-website-design-calgary.jpg"
              alt="custome website design calgary, AB"
            />
          </Flex>
          <FlexMobileOpp>
            <StaticImage
              class="stretch img-right"
              src="../images/calgary-seo-services.jpg"
              alt="calgary seo services"
            />
            <div className="spacing">
              <div>
                <p className="subheader bold caps accent italics">
                  get seen, EVERYWHERE
                </p>
                <h2 className="title">
                  search engine optimization (calgary SEO services)
                </h2>
              </div>
              <p>
                Need website SEO in Calgary? Included in my website services are
                image optimization and semantic HTML and quality code to make it
                easier for your business to be found on google. Along with that,
                I optimize page layout and create compelling SEO content and
                other internet marketing services to help increase your website
                visibility on search engines like google. I’ll set up google
                analytics for your website to monitor user engagement and
                interaction data, as well as submit your sitemap to the google
                search console so your website will get indexed by google to
                show up in the search results.
              </p>
              <ButtonPrimary to="/services/calgary-seo-services">
                SEO services &#8594;
              </ButtonPrimary>
            </div>
          </FlexMobileOpp>
        </Container>
      </Section>
      <FormContact title="Write us a message!" />
    </Layout>
  )
}
