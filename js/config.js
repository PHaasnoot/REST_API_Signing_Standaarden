var respecConfig = {
  useLogo: false,
  useLabel: true,
  license: "cc0",
  specStatus: "DEF",
  specType: "HR",
  pubDomain: "dk",
  shortName: "template",
  publishDate: "2022-06-24",
  publishVersion: "1.0.0",
  title: "Vergelijking REST API Signing Standaarden",
  // previousPublishVersion: "(none)",
  content: {"ch01": "informative"},

  editors:
    [
      {
        name: "Carmen Visinescu",
        company: "Kadaster",
        companyURL: "https://kadaster.nl",
      },
      {
        name: "Peter Haasnoot",
        company: "Logius",
        companyURL: "https://logius.nl",
      }
    ],
  authors:
    [
      {
        name: "Carmen Visinescu",
        company: "Kadaster",
        companyURL: "https://kadaster.nl",
      },
      {
        name: "Peter Haasnoot",
        company: "Logius",
        companyURL: "https://logius.nl",
      }
    ],
  github: "https://github.com/PHaasnoot/REST_API_Signing_Standaarden",

  // Create PDF and link to file in header:
  // alternateFormats: [
  //     {
  //         label: "pdf",
  //         uri: "rename-me.pdf",
  //     },
  // ],

  
  localBiblio: {
    "SemVer": {
      href: "https://semver.org",
      title: "Semantic Versioning 2.0.0",
      authors: ["T. Preston-Werner"],
      date: "June 2013"
    },
    "JAdES": {
      href: "https://www.etsi.org/deliver/etsi_ts/119100_119199/11918201/01.01.01_60/ts_11918201v010101p.pdf",
      title: "JAdES digital signatures",
    },
    "HTTP-MessageSig": {
      href: "https://www.ietf.org/archive/id/draft-ietf-httpbis-message-signatures-15.html",
      title: "HTTP Message Signatures",
    },
    "ISA2 IPS REST API Profile": {
      href: "https://ec.europa.eu/digital-building-blocks/wikis/download/attachments/323290750/%28ISA2%29.%28eDelivery%29.%28Piloting a REST API extension of CEF eDelivery%29.%28ISA%C2%B2 IPS REST API Profile%29.%28v1.0%29.pdf?api=v2",
      title: "ISA2 IPS REST API Profile",
    }
  }
};
