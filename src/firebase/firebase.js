import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC-YLp8BHqVxLEkqsJdpLHH5a29vJFmTWY",
  authDomain: "teacher-portal-451eb.firebaseapp.com",
  databaseURL: "https://teacher-portal-451eb.firebaseio.com",
  projectId: "teacher-portal-451eb",
  storageBucket: "",
  messagingSenderId: "468979536607",
  appId: "1:468979536607:web:fed79485eac4c3e9"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;
