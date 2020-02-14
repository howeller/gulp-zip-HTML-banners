# gulp-zip-HTML-banners
Packaging HTML banner files for RedTrax CMS.


## Dependencies
- [**NodeJs** - latest stable release](https://nodejs.org/en/)
- [**gulp** ~v.4.0.0](https://www.npmjs.com/package/gulp)

## Setup
1) You will need to have [NodeJs](https://nodejs.org/en/), & [Gulp](https://www.npmjs.com/package/gulp) installed globally. Follow the [Quick Start guide](https://gulpjs.com/docs/en/getting-started/quick-start) to get setup. 

2) Clone this repo or copy all contents to the root of your project folder.

3) In Terminal - navigate to your project folder and run `npm install` to download all of the npm packages.

4) Place each banner in a folder named with it's Redtrax name inside the `src` directory.  This task will create the `_final.zip` and a copy of the HTML file inside `dist`. Everything you need for direct upload to RedTrax.

Your directory structure should look like this.

```cli
├── gulpfile.js
├── package.json
├── node_modules
├── dist
│   └── backups
├── lib
│   └── fsUtils.js
└── src
    └── banner_300x250
```

Each banner should go inside a folder named with it's RedTrax name. For example `banner_300x250` will get renamed with your RedTrax banner name. Add as many banner folders as you need. Everything inside `src` will get processed in the task.


## Tasks

**`zip`** (default)\
Packages the published banner into a `_final.zip`

## Usage

To package everything up for uploading to RedTrax:

```cli
gulp
```
