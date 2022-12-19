[![Netlify Status](https://api.netlify.com/api/v1/badges/859a63b8-394a-457b-99d3-598f5589ce9f/deploy-status)](https://link-shorty42.netlify.app/)
# DevProjects - Link shortener website

This is an open source project from [DevProjects](http://www.codementor.io/projects). Feedback and questions are welcome!
Find the project requirements here: [Link shortener website](https://www.codementor.io/projects/web/link-shortener-website-brqjanf6zq)

## Tech/framework used
Built with Next.js and React

## Screenshots and demo

[![Product Name Screen Shot][product-screenshot]](https://link-shorty42.netlify.app/)

<!-- GETTING STARTED -->
## Getting Started

Link Shorty is a serverless link shortening application made with React and the Next.js framework. Hosted to netlify with Next.js Runtime Version 4 (v4.27.3) installed.

### Prerequisites

* [Download Node.js](https://nodejs.org/)

### Installation

_To install/clone this app follow the steps below._

1. Clone the repo

   ```sh
   git clone https://github.com/gitmohamed/link-shorty.git
   ```
2. Install NPM packages

   ```sh
   cd link-shorty/
   yarn

   OR

   npm install
   ```
3. Create `.env.local` in the root directory, copy the code below and enter your bit.ly api key and group uid

   ```env
    NEXT_BITLY_API=BITLY_API_KEY_GOES_HERE
    NEXT_BITLY_GROUPUID=BITLY_GROUP_UID_GOES_HERE
   ```
4. Run the program by typing
   ```sh
   yarn dev

   OR

   npm run dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Show screenshot of the link for confirmation
- [ ] Create typescript interface for the bit.ly return data


See the [open issues](https://github.com/gitmohamed/link-shorty/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>


## License
[MIT](https://choosealicense.com/licenses/mit/) License


[product-screenshot]: https://i.imgur.com/dktYo7d.png