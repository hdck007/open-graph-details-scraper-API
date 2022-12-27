const ogs = require('open-graph-scraper');

async function getOGData(url) {
  const options = { url };
  const data = await ogs(options)
  return data;
}


export default async function handler(request, response) {
  if(!request.query.url) {
    return response.send("Hey there! Please provide a url to get the OG data, url as query parameter. Simply append '?url=<the url>'");
  }
  const { result ,error} = await getOGData(request.query.url);
  if (error) {
    return response.status(500).json({ error, isError: true });
  }
  response.status(200).json(result);  
}
