import Head from "next/head";
import { getSiteMetaData } from "../../utils/helpers";

export default function SEO({ title, description = "", color = "#12141d" }) {
  const siteMetadata = getSiteMetaData();
  const metaDescription = description || siteMetadata.description;
  const themeColor = color;

  return (
    <Head>
      <title>
        {title} ~ {siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="theme-color" content={themeColor} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
    </Head>
  );
}
