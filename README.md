# Ahmed Gomaa Portfolio

A responsive React.js portfolio built with Create React App (`react-scripts`) and
plain CSS.

## Run locally

```powershell
npm.cmd install
npm.cmd start
```

## Build for production

```powershell
npm.cmd run build
```

## Deploy to GitHub Pages

After connecting this folder to a GitHub repository, run:

```powershell
npm.cmd run deploy
```

Gallery pages use hash URLs so they work correctly on GitHub Pages:

```text
#/projects/husein-nadeem
#/projects/takeme-marketplace
```

The project entries in `src/data/portfolioData.js` are placeholders ready to be
replaced with Ahmed's real projects, screenshots, links, and case-study details.
Project screenshots live in `public/assets/projects/<project-slug>/` and are
used for both landing-card backgrounds and gallery pages.

## Component structure

Each React component lives in its own folder with its own JavaScript and CSS
files:

```text
src/
  components/
    Header/
      Header.js
      Header.css
    Hero/
      Hero.js
      Hero.css
    ...
  data/
    portfolioData.js
```

Component styles follow BEM naming:

```css
.project-card {}
.project-card__preview {}
.project-card--coral {}
```

## Project galleries

Gallery routes are handled with plain React and the current browser hash, so no
router package is needed:

```text
#/projects/husein-nadeem
#/projects/takeme-marketplace
```
