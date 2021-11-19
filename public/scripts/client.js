/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// const tweetData = require("./data-files/initial-tweets");

const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  
const createTweetElement = function(data) {
    // console.log("createTweetElement", data);
    const element = `
    <article class="singleTweet">
        <header class="row1">
          <div class="elementR1">
            <img src=${data.user.avatars} alt="Avatar">
            <h3>${data.user.name}</h3>
          </div>
          <h4>${data.user.handle}</h4> 
        </header>
        <div class="row2">
          <p>${data.content.text}</p>
        </div>
          <footer class="row3">
            <h6>${timeago.format(data.created_at)}</h6>
            <div class="fasTags">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>  
            </div>
          </footer>
      </article>
    `;
    return $(element)
}

const renderTweets = function(data) {
    const tweetContainer = $("#allTweets")
    // console.log(tweetContainer);
    for (let tweet of data) {
        const element = createTweetElement(tweet);
        tweetContainer.append(element)
    }// loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  }


renderTweets(data)
