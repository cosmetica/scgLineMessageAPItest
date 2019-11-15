/**
 * @author Pakkaphon Pholueang
 * @email pkppl1987@gmail.com
 * @desc A service for reply message via Line Messaging API.
*/
const request = require('request');
const apiToken = 'SYQtFgbnrR2LRkdWMWlNst+Smb/pmNHtRIDLIVhS+QP+HBujBWw1EH8iGwX1hD8hxTc96xkDTJaqiXGoAVNy6SnkNR3cuowmj8TZeHUoxJjfzjsYNpMKKCwveAvbWojrrxqk7QAgMP22Tb/+kc6THwdB04t89/1O/w1cDnyilFU=';
const apiRoute = 'https://api.line.me/v2/bot/message/reply';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + apiToken
};

class LineAPIService {
	constructor() {}
    
    reply(replyToken, messages) {
        return new Promise(function (resolve, reject) {
            try {
                let body = JSON.stringify({
                    replyToken: replyToken,
                    messages: messages
                })
                return request.post({
                    url: apiRoute,
                    headers: headers,
                    body: body
                }, (err, res, body) => {
                    console.log('status = ' + res.statusCode);
                    return resolve(res.statusCode);
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    }
}
module.exports = new LineAPIService();