import React from "react";
import { useState, useEffect } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import "./firebasetwo.js";

const Login = () => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [authedUser, setAuthedUser] = useState(null);

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsAuthed(!!user);
      setAuthedUser(user);
    });

    return () => {
      unregisterAuthObserver();
    };
  }, [authedUser]);

  const uiConfig = {
    signInFlow: "popup",

    // Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/signedIn",

    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    credentialHelper: "none",
    // callbacks: {
    // 	signInSuccessWithAuthResult: () => false,
    // },
    callbacks: {
      signInSuccessWithAuthResult: (authResult, redirectUrl) => {
        console.log("signInSuccessWithAuthResult->authResult: ", authResult);
        console.log("signInSuccessWithAuthResult->redirectUrl: ", redirectUrl);
        this.props.history.push("/");
        return false;
      }
    }
  };

  return (
    <div className="App">
      <h3>Firebase UI Test</h3>

      {!isAuthed ? (
        <div>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      ) : (
        <div>
          <p>
            Hallo, {firebase.auth().currentUser.displayName}! Du bist
            angemeldet!
          </p>
          <button onClick={() => firebase.auth().signOut()}>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default Login;
