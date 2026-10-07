import { useEffect } from "react";

const SEO = () => {
  const title =
    "Kochi RCC Pipes | RCC Concrete Pipe Manufacturer & Supplier in Kerala";

  const description =
    "Kochi RCC Pipes is a trusted manufacturer and supplier of RCC concrete pipes, reinforced concrete pipes, Hume pipes, NP3, NP4 and drainage pipes in Kochi, Ernakulam and across Kerala.";

  const keywords =
    "Kochi RCC Pipes, RCC pipe manufacturer in Kochi, RCC pipe supplier Kochi, RCC concrete pipes Kochi, RCC Hume pipes Kochi, NP3 pipes Kochi, NP4 pipes Kochi, concrete pipe manufacturer Kerala, concrete pipe supplier Kerala, drainage pipes Kochi";

  const url = "https://kochirccpipes.in/";
  const image = "https://kochirccpipes.in/logo.png";

  useEffect(() => {
    // -----------------------------
    // Page Title
    // -----------------------------
    document.title = title;

    // -----------------------------
    // Meta Helper
    // -----------------------------
    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // -----------------------------
    // Open Graph Helper
    // -----------------------------
    const setProperty = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    // -----------------------------
    // Basic SEO
    // -----------------------------
    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("author", "Kochi RCC Pipes");

    setMeta(
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );

    setMeta(
      "googlebot",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );

    // -----------------------------
    // Canonical URL
    // -----------------------------
    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", url);

    // -----------------------------
    // Open Graph
    // -----------------------------
    setProperty("og:type", "website");
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:url", url);
    setProperty("og:site_name", "Kochi RCC Pipes");
    setProperty("og:locale", "en_IN");
    setProperty("og:image", image);

    // -----------------------------
    // Twitter
    // -----------------------------
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    // -----------------------------
    // Local Business Schema
    // -----------------------------
    let schema = document.getElementById("kochi-rcc-business-schema");

    if (!schema) {
      schema = document.createElement("script");
      schema.id = "kochi-rcc-business-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://kochirccpipes.in/#business",

      name: "Kochi RCC Pipes",

      url: url,

      logo: image,

      image: image,

      description: description,

      telephone: "+91 9600544452",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Kochi",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },

      areaServed: [
        {
          "@type": "City",
          name: "Kochi",
        },
        {
          "@type": "AdministrativeArea",
          name: "Ernakulam",
        },
        {
          "@type": "State",
          name: "Kerala",
        },
      ],
    });
  }, []);

  return null;
};

export default SEO;
