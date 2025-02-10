"use client";

const Logo = () => (
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

export default Logo;
