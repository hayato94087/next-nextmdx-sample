import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrism from "@mapbox/rehype-prism";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import remarkBreaks from "remark-breaks";

const withMDX = nextMDX({
  extensions: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [
      remarkGfm,
      remarkMath,
      [remarkToc, { maxDepth: 3, heading: "目次" }],
      remarkBreaks,
    ],
    rehypePlugins: [rehypeKatex, rehypePrism, rehypeSlug],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
