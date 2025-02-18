import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';
import Logo from './logo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | PROCEED',
    default: 'PROCEED Docs',
  },
};

const banner = <Banner storageKey='some-key'>PROCEED 1.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={<Logo />}
    projectLink='https://github.com/PROCEED-Labs'

    // ... Your additional navbar options
  />
);
const footer = <Footer>{new Date().getFullYear()} © PROCEED Labs GmbH</Footer>;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      // Not required, but good for SEO
      lang='en'
      // Required to be set
      dir='ltr'
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options: https://nextra.site/docs/built-ins/head
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          //banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase='https://github.com/PROCEED-Labs/docs/tree/main'
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
