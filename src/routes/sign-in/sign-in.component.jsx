import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <div>
        <h1>Sign -In Page</h1>
        <button onClick={logGoogleUser}> Sign in with Google Popup</button>
      </div>
      <div>
        <button onClick={logGoogleRedirectUser}>
          Sign in with Google Redirect
        </button>
      </div>
    </div>
  );
}

export default SignIn;
