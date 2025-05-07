# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Lavin Ma!

## Github Pages Links
- [Expose](https://lavinma.github.io/Lab5_Starter/expose.html)  
- [Explore](https://lavinma.github.io/Lab5_Starter/explore.html)

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   No, I would not use a unit test to test the "message" feature of a messaging application because the feature probably involves multiple different components like user input and UI. Unit tests are supposed to be focused on isolate pieces of logic, so an integrated test would work better to test the "message" feature of the application.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   Yes, a unit test would be appropriate to test the "max message length" feature because a very specific constraint would come with this feature and it is not related to any other other compenents of the application. A unit test can verify whether or not a message exceeding a character limit is rejected or not and make sure the logic is working right.