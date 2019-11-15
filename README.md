# scgLineMessageAPItest
scg test for Line api 

Component
1. Heroku webhook for API hook https://node-line-api-scg-prod.herokuapp.com/webhook
2. Line Business account name :OrBorTorFootball (@912zqctj) or access via browser at https://page.line.me/912zqctj
3. Please add line to friend list for test, you can access /qr_image in this repo and using QR for add friend.
4. Firebase (use Firebase to be a realtime DB) : https://console.firebase.google.com/u/0/project/test-line-api-scg/database/test-line-api-scg/data/football_player

or just a sipmple REST format: {
  "position" : {
    "DF" : {
      "Suwat T" : "Number 6"
    },
    "FW" : {
      "PAKKAPHON P" : "Number 9"
    },
    "GK" : {
      "Preechachan" : "Number 1"
    },
    "MD" : {
      "THANA S" : "Number 10"
    }
  }
}

5. Type "footbal_player" to display all demo DB. (It's should be as same as above JSON.)
