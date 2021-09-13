export default function handler(req, res) {
  const { host } = req.headers
  if (host.endsWith('-vercel-hprgg-test.vercel.app')) {
    res.statusCode = 308
    res.setHeader('location', `https://${host.replace('-vercel-hprgg-test.vercel.app', '')}.example.com`)
    // Caching headers
    res.setHeader('Cache-control', 's-maxage=60000')
    return res.end()
  }

  res.statusCode = 404
  return res.end('Not found')
}
