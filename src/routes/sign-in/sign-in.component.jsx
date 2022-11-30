import {
  signInWithGooglePopup, 
  createUserDocumentFromAuth,
  createUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";




function SignIn() {

 
  
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  
  return (
    <div>
      <div>
        <h1>Sign -In Page</h1>
        <button onClick={logGoogleUser}> Sign in with Google Popup</button>
        <SignUpForm />
      </div>
   
    </div>
  );
}

export default SignIn;

