var express = require('express');
var router = express.Router();
const firebase = require('firebase');
const firebaseConfig = {
  apiKey: "AIzaSyC9lP7VEWGdfHn1PGsm7tm1hf4PVU3XcbU",
  authDomain: "demopracticee.firebaseapp.com",
  projectId: "demopracticee",
  storageBucket: "demopracticee.appspot.com",
  messagingSenderId: "604328769638",
  appId: "1:604328769638:web:57e400463685774f3ad5a7",
  measurementId: "G-PJ1ZVLL4WT"
};
let fbase;
try {
  fbase = firebase.initializeApp(firebaseConfig);
  // console.log(fbase);
} catch (e) {
  console.error(e);
}
// console.log(fbase);

/* GET home page. */
router.get('/', function (req, res, next) {
  const data = {
    title: 'Express',
    fname: fbase.name
  }
  res.render('index', data);
});

module.exports = router;
