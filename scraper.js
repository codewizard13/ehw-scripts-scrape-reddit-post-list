/*
Program Name:   Reddit Post List Scraper (Vanilla JS)
File Name:      app.js
Date Created:   10/27/23
Date Modified:  --
Version:        0.0.1
Programmer:     Eric Hepperle

Purpose: Scrapes data from Reddit post list and formats as CSV. Data points include title, subreddit, post url, etc.

Usage: 

1. Login to Reddit in a browser and click your profile icon in upper right
2. Click "Profile", then click the "POSTS" tab
3. Cut-Paste the below code into the dev console and hit enter

Sample results: 

    Tutorial Info:
    - Title: How to Create Photo Gallery Grid with Modal Window Lightbox
    - URL: https://www.youtube.com/watch?v=IPVQeVlw2_E
    - Channel: LearnWebCode

Requires:
  
* Browser opened to a YouTube video.
    
Demonstrates:

* Vanilla JavaScript
* JavaScript ES6
* Reddit

*/


let results = []

// SELECTORS:

let sel_postRows  = '[data-testid="post-container"]'
let sel_voteCol   = 'div:first-child'
let sel_deetsCol  = '[data-click-id="background"]'
let sel_title     = 'h3'
let sel_flair     = '._2xu1HuBz1Yx6SP10AGVx_I'
let sel_subred    = '[data-click-id="subreddit"]'
let sel_pubDate   = '[data-testid="post_timestamp"]'
let sel_voteBal   = '._1rZYMD_4xY3gRcSS3p8ODO'
let sel_voteDir   = '[aria-label="upvote"][aria-pressed="true"]'
let sel_comments  = '[data-click-id="comments"]'

// Get all the results by row
let postRows = document.querySelectorAll(sel_postRows)

function scrapeData() {
  // LOOP through each row and print single values for each property
  for (i=0; i<postRows.length; i++) {

    let outObj = {}

    let curPost = postRows[i]
    // console.log(`curPost:`, curPost)

    
    let votesCol = curPost.querySelector(sel_voteCol)
    let deetsCol = curPost.querySelector(sel_deetsCol)
    
    // votesCol.style.backgroundColor = "red";
    // deetsCol.style.backgroundColor = "cadetblue";
    
    let postId = curPost.id
    let title = deetsCol.querySelector(sel_title).innerText
    let flair = deetsCol.querySelector(sel_flair) ? deetsCol.querySelector(sel_flair).innerText : ""
    let subred = deetsCol.querySelector(sel_subred).innerText
    let pubDate = deetsCol.querySelector(sel_pubDate).innerText
    let commentCount = deetsCol.querySelector(sel_comments) ? deetsCol.querySelector(sel_comments).innerText : ""
    
    let voteBal = votesCol.querySelector(sel_voteBal).innerText
    let voteDir = votesCol.querySelector(sel_voteDir) ? "Positive" : "Negative"
    
    // BUILD return object
    outObj.title = title
    outObj.postId = postId
    outObj.flair = flair
    outObj.subred = subred
    outObj.pubDate = pubDate
    outObj.commentCount = commentCount
    
let console_out = `
Post ID: ${postId} | Title: ${title}
Comment Count: ${commentCount}
Votes: ${voteBal} ${voteDir}
`
// console.log(outObj)

    // console.log([title, `${voteBal} ${voteDir}`, commentCount])
    results.push(outObj)
  }

  console.log(results)

}
scrapeData()

