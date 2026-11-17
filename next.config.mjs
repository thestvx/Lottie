/** @type {import("next").NextConfig} */
const nextConfig = {
  // The pages are files, not routes. beforeFiles runs ahead of Next's own
  // routing, so a request for /about is answered by the copy of /about
  // rather than by the placeholder page.
  async rewrites() {
    return {
      beforeFiles: [
              {
                      "source": "/",
                      "destination": "/index.html"
              },
              {
                      "source": "/projects/wink-theory",
                      "destination": "/projects/wink-theory/index.html"
              },
              {
                      "source": "/projects/wink-theory/",
                      "destination": "/projects/wink-theory/index.html"
              },
              {
                      "source": "/projects/good-mood-noodles",
                      "destination": "/projects/good-mood-noodles/index.html"
              },
              {
                      "source": "/projects/good-mood-noodles/",
                      "destination": "/projects/good-mood-noodles/index.html"
              }
      ],
    }
  },
}

export default nextConfig
