import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({
  title,
  description,
  url = 'https://codizytech.com/',
  image = 'https://og-image.vercel.app/CODIZYTECH.png'
}) {
  const pageTitle = title
    ? `${title} | CODIZYTECH`
    : 'CODIZYTECH — Empowering Ideas with Technology'

  const pageDescription =
    description || 'We build digital solutions that drive innovation and success.'

  const keywords = `
    CodizyTech, IT Services, Web Development, Website Design, App Development,
    Software Development, Digital Marketing, SEO Services, Social Media Marketing,
    Thesis Writing Services, Research Paper Writing, Dissertation Help,
    Academic Research Support, Data Analysis, SPSS Analysis, Python Data Analysis,
    Internship Training, Industrial Training, AI Automation, AI Solutions,
    UI UX Design, Portfolio Website, Business Website, Custom Web App,
    Research Solution, Project Report, Coding Projects, IT & Research Solution
  `

  return (
    <Helmet>
      <title>{pageTitle}</title>

      {/* Basic SEO */}
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
