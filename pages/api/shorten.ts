// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  response: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // check that this request is exclusiviely a GET request
  if(req.method === 'GET') {
    // build bitly specific API data requirements
    let bitData = {
      "long_url": req.query.URL,
      "domain": "bit.ly",
      "group_guid": process.env.NEXT_BITLY_GROUPUID
    }
    await fetch(`https://api-ssl.bitly.com/v4/shorten`, 
      { mode: 'no-cors',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_BITLY_API}`, // grab bitly api token from env var
          'Content-Type':'application/json'
        },
        body: JSON.stringify(bitData)})
      .then((data) => {
        return data.json();
      }).then((shortenedLink) => {
        res.status(200).json({ response: shortenedLink })
      }).catch((err) => {
        res.status(403).send({response: "An error occured"})
        console.log("Error: ", err)
      })
  } else {
    res.status(404).send({response: "Improper request"})
  }
}
