import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const logo = (
  <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
    <svg
      height="20"
      viewBox="0.313 0.015 24.295 13.495"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(1, 0, 0, 1, -122.565636, -37.908913)">
        <g transform="matrix(0.51663939,0,0,0.61819737,129.39647,-37.786489)">
          <path
            fill="currentColor"
            d="m 0,144.3 h 24.66 l 9.75,-10.91 -9.75,-10.92 H 0 l 9.75,10.92 z"
          />
        </g>
        <g transform="matrix(0.51663939,0,0,0.61819737,122.87891,-40.99114)">
          <path
            fill="currentColor"
            d="m 0,144.3 h 12.95 l 5.11,-5.73 -5.11,-5.73 H 0 l 5.12,5.73 z"
          />
        </g>
      </g>
    </svg>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
    <div style={{ fontWeight: 700, letterSpacing: "0.3px", fontSize: "23px" }}>
      PROCEED
    </div>
  </span>
);

const config: DocsThemeConfig = {
  logo,
  project: {
    link: "https://github.com/PROCEED-Labs",
  },
  docsRepositoryBase: "https://github.com/PROCEED-Labs/docs/tree/main",
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – PROCEED",
      };
    }
  },
  head: function useHead() {
    const { title } = useConfig();

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Documentation of the PROCEED software for digitizing business processes."
        />
        <meta
          name="og:description"
          content="Documentation of the PROCEED software for digitizing business processes."
        />
        <meta
          name="og:title"
          content={title ? title + " – PROCEED" : "PROCEED"}
        />
        <meta name="apple-mobile-web-app-title" content="PROCEED" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div>
        <p style={{ fontSize: 12 }}>
          © {new Date().getFullYear()} PROCEED Labs
        </p>
      </div>
    ),
  },
};

export default config;
