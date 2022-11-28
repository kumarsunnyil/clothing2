import { useEffect } from "react";

import { getRedirectResult } from 'firebase/auth';


import {
  auth,
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  signInWithGoogleRedirect, 
} from "../../utils/firebase/firebase.utils";

function SignIn() {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if(response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   fetchData();
  // }, []);
  
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  
  return (
    <div>
      <div>
        <h1>Sign -In Page</h1>
        <button onClick={logGoogleUser}> Sign in with Google Popup</button>
      </div>
      {/*
      <div>

      <button onClick={signInWithGoogleRedirect}> 
      
      Sign in with Google Redirect
      </button>
      </div>
    */}
    </div>
  );
}

export default SignIn;
