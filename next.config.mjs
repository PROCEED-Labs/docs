import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  staticImage: true,
});

export default withNextra({
  images: { unoptimized: true },
  basePath: "",
  output: "export",
});
