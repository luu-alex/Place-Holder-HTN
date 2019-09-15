const express = require('express')
const admin = require('firebase-admin');
const app = express()
const port = 3000

let serviceAccount = require('./placeholder-688fe-1f050e8d0706.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
console.log("app initialized")
let db = admin.firestore();



app.get('/under', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    let seat = req.query.seat;
    console.log(seat);
    let docRef = db.collection('seats').doc(seat);
    docRef.set({
      underPressure: true
    })
    res.send({ seat: seat });
})

app.get('/over', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    let seat = req.query.seat;
    let docRef = db.collection('seats').doc(seat);
    docRef.set({
      underPressure: false
    })
    res.send({ seat: seat });
})
app.get('/data', (req, res) => {
    db.collection('seats').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });

})
app.get('/pressure', (req, res) => {
    res.send('hello');
    console.log("progress is here!")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
