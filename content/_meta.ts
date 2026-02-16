import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  'homepage': {
    title: 'Project Website',
    type: 'page',
    href: 'https://www.proceed-labs.org/',
  },
  'about': {
    title: 'About',
    type: 'page',
    display: 'hidden',
  },
  'more': {
    title: 'More',
    type: 'menu',
    items: {
      wiki: {
        title: 'Developer Wiki',
        href: 'https://github.com/PROCEED-Labs/proceed/wiki',
      },
      xsd: {
        title: 'XSD Schema',
        href: '/xsd/XSD-PROCEED.xsd',
      },
    },
  },

  'index': {
    title: 'Introduction',
  },
  'quick-start': {
    title: 'Quick Start Tutorial',
  },
  'user-guide': {
    title: 'User Guide',
  },
  'reference': {
    title: 'Reference',
  },
  'adv-process-deployment': {
    title: 'Advanced Process Deployment',
    display: 'hidden', //hidden
  },

  /*features: {
    type: "separator",
    title: "Advanced Features",
  },*/
};

export default meta;
