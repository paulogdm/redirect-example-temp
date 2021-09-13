module.exports = {
  reactStrictMode: true,
    async rewrites() {
      return {
        beforeFiles: [
          {
            source: '/(.*)',
            has: [{ type: 'host', value: '(?<subdomain>.*)-vercel-hprgg-test.vercel.app' }],
            destination: '/api/redirect-helper?subdomain=:subdomain'
          },  
        ],
        afterFiles: [],
        fallback: [],
      }
    },
    async redirects() {
      return [

      ]
    },
}
