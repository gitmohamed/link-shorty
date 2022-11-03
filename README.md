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

- [ ] Component testing
- [ ] Show screenshot of the link for confirmation
- [ ] Create typescript interface for the bit.ly return data


See the [open issues](https://github.com/gitmohamed/link-shorty/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



## License
[MIT](https://choosealicense.com/licenses/mit/) License

Copyright (c) 2022 Mohamed Hassan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



[product-screenshot]: https://i.imgur.com/dktYo7d.png