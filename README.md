# open-graph-details-scraper-API
A api(in the form of vercel serverless functions) to get og graph details for different urls.

It will be free until and unless VERCEL is free, Though free tier has a very small limit and this is not intended for intensive use. 

For me it serves it's purpose!!

Access from /api endpoint

#### example request
```
https://og-scraper-three.vercel.app/api?url=https://ogp.me/
```

#### result
```
{
  "ogTitle": "Open Graph protocol",
  "ogType": "website",
  "ogUrl": "https://ogp.me/",
  "ogDescription": "The Open Graph protocol enables any web page to become a rich object in a social graph.",
  "ogImage": {
    "url": "https://ogp.me/logo.png",
    "width": "300",
    "height": "300",
    "type": "image/png"
  },
  "charset": "utf8",
  "requestUrl": "https://ogp.me/",
  "success": true
}
```

checkout here for your self https://og-scraper-three.vercel.app/api?url=https://ogp.me/
