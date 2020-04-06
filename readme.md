# Github user matcher

The purpose of this app is provide assistance when looking for a collaboration partner in a software projects. The structure is pretty similar to the mobile app "Tinder" which is built around dating, unlike this app.

## From the user perespective

1. First the user logs in with their Github account. (only the username)
2. Then (after some loading), a page appears. It contains a random github user displayed on a card.
3. I you click on the card, it will switch to show more info about this person. All info is extracted from Github.
4. In the bottom of the card there are two buttons. The "-" button indicates you do not want to collab with this user and the "+" tells you do want to collaborate

## Since the app is rather big on this small amount of time, there are some areas which needs/could need to be improved/built

* Make sure the card that displays the random users resizes better
* Make sure the card adjusts after all kinds of lengths on name or implement a functinality which shortens the name if it's to long
* Improve the UI
  * Implement lazy load on profile pics
  * Better transition when switching from login page to match making page
  * Improve loading indication and make it look nicer
  * Create animation for when switching to another random user
  * Add a component which shows the users I have liked
  * Add a match functionality, which notifies me when someone I've liked likes me back

## Installation guide

1. Go to the root directory and run `npm install`
2. Add a file in the "server" directory named _`githubAuthToken.json`_. Go to github and get a basic authentication token. Take your username and token and write them like `username:token`. Encode `username:token` to [base64](https://www.base64encode.org/) format and paste the string into the new file "githubAuthToken.json"
3. Go to the root directory and run `npm start`