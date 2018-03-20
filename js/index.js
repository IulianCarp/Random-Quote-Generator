function twitterPost() {
  var url="https://twitter.com/intent/tweet";
  var text=$(".message").html();
  changedText = text.replace(/%/g, "%25");
  var via="RandomQuoteGenerator";
  window.open(url+"?text="+changedText+";via="+via,"", "wdith=50%, height=50%");
}

function randomQuote() {
  var quotes = ["Empty Quote", 
                "Life is 10% what happens to you and 90% how you react to it.", 
                "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.", 
                "It does not matter how slowly you go as long as you do not stop.", 
                "In order to succeed, we must first believe that we can.", 
                "Always do your best. What you plant now, you will harvest later.", 
                "The secret of getting ahead is getting started.", 
                "It always seems impossible until it's done.", 
                "If you can dream it, you can do it.", 
                "What you do today can improve all your tomorrows.",
                "What you do today can improve all your tomorrows.",
                "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
                "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
                "Start where you are. Use what you have. Do what you can.",
                "Accept the challenges so that you can feel the exhilaration of victory.",
                "Setting goals is the first step in turning the invisible into the visible.",
                "Quality is not an act, it is a habit.",
                "Don't watch the clock; do what it does. Keep going.",
                "You can't cross the sea merely by standing and staring at the water.",
                "If you're going through hell, keep going.",
                "Be kind whenever possible. It is always possible."];
  var author = ["Empty Author", 
                " Charles R. Swindoll", 
                " Hellen Keller", 
                " Confucius", 
                " Nikos Kazantzakis", 
                " Og Mandino", 
                " Mark Twain",
                " Nelson Mandela", 
                " Walt Disney", 
                " Ralph Marston",
                " Theodore Roosevelt",
                " Ayn Rand",
                " Thomas A. Edison",
                " Arthur Ashe",
                " George S. Patton",
                " Tony Robbins",
                " Aristotle",
                " Sam Levenson",
                " Rabindranath Tagore",
                " Winston Churchill",
                " Dalai Lama"];
  var random = Math.floor((Math.random() * 20) + 1);
  var randomQuote = "\"" + quotes[random] + "\" " + author[random];
  return randomQuote
}

$(document).ready(function(){
    $("#getMessage").on("click", function(){
    $(".message").html(randomQuote); 
    });
});