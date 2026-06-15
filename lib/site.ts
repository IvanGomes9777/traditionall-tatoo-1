// Single source of truth for NAP + entity data (keep identical everywhere — GEO/SEO).
export const SITE_URL = 'https://anker-dolch.de';

export const BUSINESS = {
  name: 'Anker & Dolch Tattoo',
  legalName: 'Anker & Dolch Tattoo',
  owner: 'Magnus Reinhold',
  street: 'Hafenweg 14',
  postalCode: '48155',
  city: 'Münster',
  country: 'DE',
  phone: '+49 251 221488',
  phoneDisplay: '0251 / 22 14 88',
  email: 'hallo@anker-dolch.de',
  instagram: 'https://instagram.com/anker.dolch',
  maps: 'https://www.google.com/maps/search/?api=1&query=Anker%20%26%20Dolch%20Tattoo%20M%C3%BCnster',
  geo: { lat: 51.9527, lng: 7.631 },
  priceRange: '€€',
  founded: '2012',
} as const;

/** Linked entity @graph (Organization + WebSite + WebPage + TattooParlor + Person). */
export function siteGraph() {
  const org = `${SITE_URL}/#organization`;
  const local = `${SITE_URL}/#localbusiness`;
  const website = `${SITE_URL}/#website`;
  const person = `${SITE_URL}/#owner`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': org,
        name: BUSINESS.name,
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.svg` },
        email: BUSINESS.email,
        foundingDate: BUSINESS.founded,
        sameAs: [BUSINESS.instagram, BUSINESS.maps],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: BUSINESS.phone,
          contactType: 'customer service',
          areaServed: 'DE',
          availableLanguage: ['de'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': website,
        url: SITE_URL,
        name: BUSINESS.name,
        publisher: { '@id': org },
        inLanguage: 'de',
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: 'Anker & Dolch Tattoo — Traditional Tattoos, Münster',
        isPartOf: { '@id': website },
        about: { '@id': local },
        inLanguage: 'de',
      },
      {
        '@type': ['TattooParlor', 'LocalBusiness'],
        '@id': local,
        name: BUSINESS.name,
        description:
          'Old-School & American Traditional Tattoo Studio am Hafen von Münster. Kräftige Linien, satte Farben, Walk-ins Fr & Sa.',
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        priceRange: BUSINESS.priceRange,
        foundingDate: BUSINESS.founded,
        parentOrganization: { '@id': org },
        founder: { '@id': person },
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS.street,
          postalCode: BUSINESS.postalCode,
          addressLocality: BUSINESS.city,
          addressCountry: BUSINESS.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: BUSINESS.geo.lat,
          longitude: BUSINESS.geo.lng,
        },
        sameAs: [BUSINESS.instagram, BUSINESS.maps],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '11:00',
            closes: '19:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '11:00',
            closes: '16:00',
          },
        ],
      },
      {
        '@type': 'Person',
        '@id': person,
        name: BUSINESS.owner,
        jobTitle: 'Inhaber & Tätowierer',
        worksFor: { '@id': org },
      },
    ],
  };
}
