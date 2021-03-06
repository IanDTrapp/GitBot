var botId = "YOUR_BOT_ID_HERE";

// Sends a POST Request to GroupMe to send a message with your bot
function sendAlert(text){
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '"}'})
}

//respond to messages sent to the group. Recieved as POST
//this method is automatically called whenever the Web App's (to be) URL is called
function doPost(e){
  
  // Parse the request sent by GitHub
  var post = JSON.parse(e.postData.getDataAsString());
  // Possible data fields for your message, uncomment and use whichever you'd like!
  //var commitMessage = post.commits[0].message;
  //var author = post.commits[0].committer.name;
  //var repo = post.repository.full_name;
  //var changed_files = post.commits[0].modified;
  //var commitId = post.commits[0].id;
  //var timestamp = post.commits[0].timestamp;
  
  // Post the data to GroupMe
  sendAlert(">" + author + " has pushed commit '" + commitMessage + "' to " + repo + "\\n" +
            "Changed Files: \\n" + changed_files);
  
}
