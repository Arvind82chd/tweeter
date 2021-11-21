/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// const tweetData = require("./data-files/initial-tweets");



const createTweetElement = function (data) {
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

const renderTweets = function (data) {
  const tweetContainer = $("#allTweets") //
  //tweetContainer.empty();
  // console.log(tweetContainer);
  for (let tweet of data) {
    const element = createTweetElement(tweet);
    tweetContainer.append(element) //reponsible for sending the element to tweetContainer location
  }// loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
}

// const loadtweets = function (data) {
//   $.get("/tweets", function (data, status) {
//     renderTweets(data);
//   })
// }

$(document).ready(function () {
  $.get("/tweets", function (data, status) {
    renderTweets(data);
  })
  $(".tweetForm").submit(function (event) {
    event.preventDefault();
    const tweetText = $("#tweet-text");
    if ($("#tweet-text").val().length === 0 || $("#tweet-text").val() === null) {
      alert("Enter some valid data");
      return;
    } else if ($("#tweet-text").val().length > 140) {
      alert("You have exeded your alphabet limit of 140");
      return;
    } 
    $.post("/tweets", { text: tweetText.val() }, function (data) {
      tweetText.val('');
      $.get("/tweets", function (data, status) {
        renderTweets(data);
      })
    });
  })
});

renderTweets(data)
