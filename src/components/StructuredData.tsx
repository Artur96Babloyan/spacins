export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Spacins AI Studio",
    url: "https://spacins.ai",
    logo: "https://spacins.ai/spacins-logo.svg",
    description:
      "Strategic product, design, and AI partners helping founders launch intelligent experiences faster.",
    email: "hello@spacins.ai",
    sameAs: [
      // Add your social media profiles here
      // "https://twitter.com/spacins",
      // "https://linkedin.com/company/spacins",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@spacins.ai",
      contactType: "Customer Service",
      availableLanguage: "English",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

