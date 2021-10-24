import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({site}) => {

  const title = "Cuestionario LUC";
  const url = site;
  const description = "¿Qué pensas de la LUC? ¿Qué piensa el resto?";


  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: "es" }}
      meta={[
        {
          property: "og:url",
          content: url
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:title",
          content: title
        },
        {
          property: "og:description",
          content: description
        },
        {
          property: "og:image",
          content: null
        },
        {
          property: "fb:app_id",
          content: null
        },
        {
          property: "twitter:card",
          content: description
        },
        {
          property: "twitter:creator",
          content: null
        },
        {
          property: "twitter:title",
          content: title
        },
        {
          property: "twitter:description",
          content: description
        },
        {
          property: "twitter:image",
          content: null
        }
      ]}
    />
  );
};

export default SEO;
