Website Performance Optimization portfolio project
==================================================

This project displays an optimized version of an online portfolio.  Various
bottlenecks have been identified in the Critical Rendering Path and optimized
to make this page render and scroll as quickly as possible.


## Running the Site
Follow the steps below to test the optimized the site.

1. Clone the [repository]
    (https://github.com/segfault0x0/frontend-nanodegree-mobile-portfolio.git).
1. Run a local server with Python:
  Make sure to navigate to the `dist` folder of the repository.

  ```bash
  $> cd /path/to/frontend-nanodegree-mobile-portfolio/dist
  $> python -m SimpleHTTPServer 8080
  ```
  If Python is not currently installed, visit https://www.python.org/downloads
  and follow the listed instructions.

  >Note: Python version 3+ is not widely-supported in production environments
  and may or may not cause compatibility issues.  `Python 2.7` is a safe bet!

1. Open a browser and visit localhost:8080.

## PageSpeed
In order to test the portfolio's speed with Google's PageSpeed Insights, the
`ngrok` program can be utilized to make the local Python server public.

1. Download and install [ngrok](https://ngrok.com/) to the `dist` folder in the
    repository directory, then run the following command.

  ``` bash
  $> cd /path/to/frontend-nanodegree-mobile-portfolio/dist
  $> ./ngrok http 8080
  ```
  This makes the local Python server accessible remotely.

1. Confirm the website works by copying the public, "Forwarding" URL `ngrok`
    produces and loading it in a web browser.  The webpage should be visible
    just as it is when using localhost:8080.

1. Now, visit the [PageSpeed Insights]
    (https://developers.google.com/speed/pagespeed/insights/) site and enter the
    `ngrok` URL.

## Optimizations
Here is a list of the optimizations made to the portfolio:

**index.html**
- Inlined the style.css file.
- Added a media attribute for print.css.
- Utilized font-face to delay loading the fonts until they're used.
- Asynchronized the JavaScript files.

**views/main.js**
- Replaced `querySelectorAll` references with `getElementsbyClassName`.
- (:425) Refactored the `changePizzaSizes` function.
- (:499) Moved the `scrollTop` call out of the for-loop.
- (:504) Changed the movement style property to `transform` instead of `left`.
- (:525) Decreased the number of background pizza elements.

**views/styles.css**
- Put pizzas on their own layer with the `will-change` property.

**project-* files**
- Asynchronously loaded the Google Analytics script.
- Added a media attribute for print.css.
