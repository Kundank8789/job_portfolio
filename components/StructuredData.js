// components/StructuredData.js
import Head from 'next/head';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kundan Kumar",
    "jobTitle": "Full Stack Developer",
    "url": "https://job-portfolio-dusky.vercel.app",
    "sameAs": [
      "https://github.com/Kundank8789",
      "https://linkedin.com/in/kundan-kumar-3907a3352",
      "https://x.com/Rajputkund69519"
    ],
    "email": "kundansinghh87@gmail.com",
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express",
      "MERN Stack",
      "Full Stack Development",
      "AI Integration"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "AWS Academy"
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}