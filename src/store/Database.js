import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDxmN-Qcv3cdooLRnLJM9gsHrvRgyV4guY",
  authDomain: "giphyworld-e88a2.firebaseapp.com",
  databaseURL: "https://giphyworld-e88a2.firebaseio.com",
  projectId: "giphyworld-e88a2",
  storageBucket: "giphyworld-e88a2.appspot.com",
  messagingSenderId: "626808484086"
})

export default firebaseApp.database()
