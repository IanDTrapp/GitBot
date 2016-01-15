var botId = "cc818acd41c291f7508b2a0029";

function sendAlert(text){
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '"}'})
}

//respond to messages sent to the group. Recieved as POST
//this method is automatically called whenever the Web App's (to be) URL is called
function doPost(e){
  var post = JSON.parse(e.postData.getDataAsString());
  var commitMessage = post.commits[0].message;
  var author = post.commits[0].committer.name;
  var repo = post.repository.full_name;
  var url = post.compare;
  sendAlert(">" + author + " has pushed commit '" + commitMessage + "' to " + repo + "\\n" + "\\nView commit: \\n" + url);
  
}
