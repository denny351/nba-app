import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBYfpQd0dddY34qunwu_D0QHHD0yaNKLuw",
  authDomain: "nba-app-9e15a.firebaseapp.com",
  databaseURL: "https://nba-app-9e15a.firebaseio.com",
  projectId: "nba-app-9e15a",
  storageBucket: "nba-app-9e15a.appspot.com",
  messagingSenderId: "878933264588"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach(childSnapshot => {
	  data.push({ 
      ...childSnapshot.val(),
      id: childSnapshot.key 
    });
  });
  return data;
}


export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseTeams,
  firebaseVideos,
  firebaseLooper
}