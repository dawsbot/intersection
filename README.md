<p align="center">

  <br><img src="media/intersection.png" alt="logo" />
  <br>
  <b>
    Now the internet has sections and genres just like your newspaper.
  </b>
  <br>
  <br><img src="https://img.shields.io/badge/version-0.*.*--prelaunch-brightgreen.svg" alt="Version number" />

  <a href = "https://github.com/dawsonbotsford/meread">
    <img src="https://img.shields.io/badge/meread-templated-4BD2A9.svg" alt="meread templated" />
  </a>

  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT Licensed" />
  </a>

  <br>
  <img src="https://img.shields.io/badge/Chrome-Extension-yellow.svg" alt="MIT Licensed" />
</p>

<br>

## Why
Newspapers have always organized articles into particular genres, so why has the internet never been organized this way?
<br>
<p align="center">
  <b>See what genre the current page without reading a line.</b>
</p>
<br>


<br>
##Install
```bash
git clone https://github.com/dawsonbotsford/intergenre.git
```
Load the extension by selecting "*Load unpacked extension*" from the Chrome Extension page (available at chrome://extensions/), and select the ```lib``` folder.

<br>
## Hackers
Install node and npm first.

```bash
git clone https://github.com/dawsonbotsford/intergenre.git
cd intergenre
npm install
npm install -g grunt
grunt
```

<br>
Load the extension by selecting *Load unpacked extension* from the Chrome Extension page (available at chrome://extensions in your browser), and select the ```lib``` folder.

## Learning from URL's
You might want to help out by training the dataset. To do this follow these steps:
  1. Find an article in one of our genres: ("humor","tech","arts","business","politics","science","sports")
  2. Copy the url of that article, for example, in business, this article: http://www.businessinsider.com/apple-just-reported-the-biggest-annual-profit-in-history-2015-10
  3. When in the root directory run this command:
  ```bash
node learnURL.js http://www.businessinsider.com/apple-just-reported-the-biggest-annual-profit-in-history-2015-10 business
```
  4. This adds the plain text of the web page to the training data sets in `corpora/*`

The command to add a web page to the training set is:
```bash
node learnURL.js <url> <genre>
```
<br>
