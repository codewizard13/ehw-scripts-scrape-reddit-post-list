| INFO PROPERTY | VALUE                                       |
| ------------- | ------------------------------------------- |
| Program Name  | **: Scrape Reddit Post List** |
| Program Type  | Script                                      |
| File Name     | README.md                                   |
| Date Created  | 10/27/23                                    |
| Date Modified | --                                          |
| Version       | 0.0.1                                       |
| Programmer    | **Eric Hepperle**                           |

### TECHNOLOGIES

<img align="left" alt="JavaScript" title="JavaScript" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style="padding-right:10px;" />

<img align="left" alt="Reddit" title="Reddit"  src="/img/reddit-logo-2436.svg" />

<img align="left" alt="Git" title="Git" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style="padding-right:10px;" />

<img align="left" alt="GitHub" title="GitHub" width="26px" src="https://user-images.githubusercontent.com/3369400/139448065-39a229ba-4b06-434b-bc67-616e2ed80c8f.png" style="padding-right:10px;" />

<br>

## Purpose

**<u>Scripts Collection:</u>** Collection of vanilla JavaScript ES6 scripts to grabs (scrapes) data from video courses and tutorials for use in building the header to my notes files.

Here is some background on the origin of this repo:

**PROBLEM:** When I take LinkedIn Learning courses or follow a YouTube coding tutorial I find it easier to remember detailed technical processes by taking detailed technical notes. It takes a long time already to listen to the videos and make my notes. But, I was spending 30 minutes or more manually typing in boilerplate course info like instructor name, purpose, course expectations, duration, instructor avatar url, etc. Formatting this data added even more time.

**ACTION:** I knew that if I could automate gathering the course details with JavaScript ES6 DOM traversal, that I would save anywhere from 30 minutes to an hour and be able to focus more time to note-taking. I decided to target LinkedIn Learning course pages first. It took me about an hour to write the code - nothing fancy, just basic procedural Ecmascript2015 (no OOP classes or module exports). The key was just examining the source code and locating the right CSS selectors. After another hour of troubleshooting and tweaking, I had a working data collector that did exactly what I needed it to do every time.

**SOLUTION:** Being able to run a script to automate data collection saved me 30 minutes to an hour each time I had to take notes on a new course.


## Included Scripts

- [Scrape YouTube Video Details](scrape-youtube-vid-deets.js)
- [Scrape LinkedIn Course Details](scrape-linkedin-course-deets.js)
- [Scrape LinkedIn Course Chapter Outline](scrape-linkedin-chapters.js)

## Future Improvements (In Progress)

- Scrape Udemy Course Info
- Scrape Upwork Job Posting Details

### Materials/References

- [https://bytearcher.com/articles/es6-vs-es2015-name/](https://bytearcher.com/articles/es6-vs-es2015-name/)

### Sample Code from Tutorial

![Sample Code PLACEHOLDER]()

    
## Usage
1. Open YouTube video page (you can pause video or let it play)
2. Open developer console (F12)
3. Copy-paste JS code into browser console and run (hit enter)
    
## Sample Results: 

~~~
Tutorial Info:
- Title: Create a Live Highway Traffic Rotator using JavaScript - RSS / XML
- Full URL: https://www.youtube.com/watch?v=iPUnS49EomI
- Base URL: https://www.youtube.com/watch?v=iPUnS49EomI
- Channel: Awesome Open Source
- Channel URL: https://www.youtube.com/c/AwesomeOpenSource
- Avatar URL: https://yt3.ggpht.com/ytc/AKedOLRoYQU9YzUWgOceIRbwnjzsWP9V-ckmp4QC9wcq=s68-c-k-c0x00ffffff-no-rj
~~~

## Requires
* Browser opened to a YouTube video with developer console exposed.
    
## Demonstrates
* JavaScript
* ES6 / ECMAScript 2015
* Web Scraping / Web Scrapers
* Vanilla JavaScript
* YouTube Scraping

## TAGS
`JavaScript` `ES6` `Web Scraping` `Vanilla JavaScript`

## VOCAB
- N/A

## Resources
- N/A
