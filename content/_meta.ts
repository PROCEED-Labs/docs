import type { MetaRecord } from "nextra";

const meta: MetaRecord = {
  homepage: {
    title: "Project Website",
    type: "page",
    href: "https://www.proceed-labs.org/",
  },
  about: { title: "About", type: "page" },
  "ms-api": { title: "MS API", type: "page", href: "/msapi.html" },
  more: {
    title: "More",
    type: "menu",
    items: {
      wiki: {
        title: "Developer Wiki",
        href: "https://github.com/PROCEED-Labs/proceed/wiki",
      },
      xsd: {
        title: "XSD Schema",
        href: "/xsd/XSD-PROCEED.xsd",
      },
    },
  },

  index: "Introduction",
  "quick-start": "Quick Start Tutorial",
  "user-guide": "User Guide",
  developer: "Developer Information",

  /*features: {
    type: "separator",
    title: "Advanced Features",
  },*/
  "adv-process-deployment": {
    title: "Process Deployment Methods",
    display: "hidden",
  },
  "adv-capability-description": {
    title: "Capability Descriptions",
    display: "hidden",
  },
};

export default meta;
