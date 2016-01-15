var botId = "YOUR_BOT_ID_HERE";

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
  var changed_files = post.commits[0].modified;
  
  sendAlert(">" + author + " has pushed commit '" + commitMessage + "' to " + repo + "\\n" +
            "Changed Files: \\n" + changed_files);
  
}
