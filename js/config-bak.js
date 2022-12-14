var respecConfig =
{
  //voor specStatus mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specStatus
  specStatus: "WV",
  //voor specType mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specType
  specType: "HR",
  pubDomain: "dk",
  shortName: "template",
  publishDate: "2022-06-24",
  publishVersion: "0.0.1",
  // previousPublishVersion: "(none)",
  //  previousPublishDate: "(none)",
  //  previousMaturity: "WV",
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
  
  
 // Controls if linked "§" section markers are added to a document
 addSectionLinks: true,
 
    // this parameter will add the tag_name of the latest release to the document Title
  // only set this parameter when a release has been set
  nl_addReleaseTagTitle: true,

    // nl_organisationName is used for some company specific values in the header (and Sotd)
  // currently supported: Logius and Geonovum (default)  
  nl_organisationName: "KPAPI",
  
  // this url points to the folder where organsation specific css files are stored
  // defaults to https://tools.geostandaarden.nl/respec/style/ if not set
  nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",

  // prefix for the names of company specific css, svg and ico prefixes
  // defaults to "GN-"  
  nl_organisationPrefix: "X-",

  // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
  // so that figures can be linked are be a part of table of figures
  nl_markdownEmbedImageInFigure: true,

  // nl_organisationPublishURL points to organisation specifica publication page, used in header
  // defaults to  https://docs.geostandaarden.nl/"
  nl_organisationPublishURL: "https://publicatie.centrumvoorstandaarden.nl/",

  // nl_logo refers to company logo
  // defaults to https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg
   nl_logo: {
   // src: "xhttps://publicatie.centrumvoorstandaarden.nl/respec/style/logos/figure-logius.svg",
    src: "media/leeg.png", 
    alt: "KPAPI",
    id: "KPAPI",
    height: 77,
    width: 44,
    url: "",
   },


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
};
