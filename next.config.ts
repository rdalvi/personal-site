/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ids.si.edu",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.metmuseum.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "www.michael-hutter.de",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d1hhug17qm51in.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hirshhorn.si.edu",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "biblioklept.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "prod-cdn-07.storenvy.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "uploads7.wikiart.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "annesart.wordpress.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "shop.famsf.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "news.artnet.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.art-prints-on-demand.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "successiomiro.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
