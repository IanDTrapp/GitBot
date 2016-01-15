# GitBot
A GroupMe Bot rigorously trained to alert you to GitHub repository pushes

# Creating a GroupMe bot
To begin, we will need a GroupMe Bot. You can create one by going to
https://dev.groupme.com/bots

You can call it whatever you would like, but I chose to call it "GitBot." Feel free to give it a profile picture or save that part for later.
Keep this page open, because we will need the bot ID later.

# Creating a Google Script
In your browser, open Google Drive and create a new file. You'll want to select "more" and click "Google Apps Script" as your file type.
From here, you can choose either the default code found in GitBot.gs, or create your own alert with GitBotTemplate.gs.
Whichever path you choose, you will need to copy it and paste it in to your new Google Apps Script document.

At the top of the document, you should see a string with "YOUR_BOT_ID_HERE". Go back to your bot page, copy the bot ID, and paste it in here. 

If you are using GitBotTemplate, you'll want to use the provided vars to create your own alert. This will go in the sendAlert function in place of the string "YOUR_ALERT_HERE".

If everything looks good, go to the top and click publish. Enter your project name, execute the app as yourself, and allow "anyone, even anonymous" access. This is what allows GitHub to hit the callback URL without having access to your Google account. 

Copy that current web app URL, as we will need it for this last part.

# Creating a Webhook for your GitHub repo
In the repo you want alerts for, go to "settings" and then "Webhooks & services". In the top right, click "add webhook". Your payload URL will be the web app URL you just copied. Select application/json as your content type, and don't worry about a Secret. 

For now, GitBot only works with the push event, so select that bubble. In the future, I hope to incorporate more features. 

Finally, make sure active is checked. You're good to go!

Special thanks to GitHub user wreed12345 for a great tutorial on getting started on GroupMe bots with Google Script
