Website Performance Optimization portfolio project
==================================================

This project displays an optimized version of an online portfolio.  Various
bottlenecks have been identified in the Critical Rendering Path and optimized
to make this page render and scroll as quickly as possible.


## Running the Site
Follow the steps below to test the optimized the site.

1. Check out the [repository]()
1. Run a local server with Python:

  ```bash
  $> cd /path/to/frontend-nanodegree-mobile-portfolio
  $> python -m SimpleHTTPServer 8080
  ```
  If Python is not currently installed, visit https://www.python.org/downloads
  and follow the listed instructions.

  >Note: Python version 3+ is not widely-supported in production environments
  and may or may not cause compatibility issues.  `Python 2.7` is a safe bet!

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of the
    repository directory, then run the following command.

  ``` bash
  $> cd /path/to/frontend-nanodegree-mobile-portfolio
  $> ./ngrok http 8080
  ```
  This makes the local Python server accessible remotely.

1. Copy the public, "Forwarding" URL ngrok gives you and load it into a web
    browser.  If it's desired to view the PageSpeed scores, visit the [PageSpeed
    Insights](https://developers.google.com/speed/pagespeed/insights/) site and
    enter the ngrok URL.

## Optimizations
Here is a list of the optimizations that were made to the portfolio.

**index.html**
- Inlined the style.css file.
- Added a media attribute for print.css.
- Utilized font-face to put off loading the fonts until they're used.
- Asynchronized the JavaScript.

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
