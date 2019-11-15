/**
 * @author Pakkaphon Pholueang
 * @email pkppl1987@gmail.com
 * @desc A service for Get/Post data from Firebase Realtime Database.
*/
const firebase = require('firebase-admin');
const serviceAccount = require('../../test-line-api-scg-firebase.json');
var db, ref;

class FirebaseService {
	constructor() {
        firebase.initializeApp({
			credential: firebase.credential.cert(serviceAccount),
			databaseURL: 'https://test-line-api-scg.firebaseio.com'
		});

		db = firebase.database();

		ref = db.ref('football_player');
    }

    getfootball_playerHouses() {
        return new Promise(function (resolve, reject) {
            try {
                return ref.once('value', function(snapshot) {
                    let _football_player = snapshot.val();

                    return resolve(JSON.stringify(_football_player));
                });
            }
            catch (e) {
                return reject(e);
            }
        });
    }   
}
module.exports = new FirebaseService();