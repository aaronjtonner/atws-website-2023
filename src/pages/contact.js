import React from "react"
import BannerPrimary from "../components/banners/bannerPrimary"
import BannerSecondary from "../components/banners/bannerSecondary"
import FormContact from "../components/forms/formContact"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact | Aaron Tonner Web Solutions | Websites & SEO"
        description="Whether you're ready to start a project or you're just looking for answers to your website or SEO questions, you can reach me directly at 587-437-9161."
      />
      <BannerPrimary
        to1="/"
        link1="Home"
        to2="/contact"
        link2="Contact"
        title="easily get in touch"
        description="Whether you're ready to start a project or you're just looking for answers to your website or SEO questions, don't hesitate in reaching out to me by phone, email, or by using the contact form below."
      />
      <FormContact />
    </Layout>
  )
}
