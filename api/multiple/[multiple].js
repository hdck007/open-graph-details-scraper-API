const ogs = require('open-graph-scraper');

async function getOGData(url) {
  const options = { url };
  const data = await ogs(options)
  return data;
}


export default async function handler(request, response) {
  if(!request.query.url) return response.status(500).send("No URL provided");
  const { result ,error} = await getOGData(request.query.url);
  if (error) {
    return response.status(500).json({ error, isError: true });
  }
  response.status(200).json(result);
}
