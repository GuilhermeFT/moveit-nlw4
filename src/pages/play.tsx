import { GetServerSideProps } from "next"
import firebase from '../libs/Firebase'

export default function Play() {
  return <h1>opa</h1>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  firebase.auth()
  .getRedirectResult()
  .then((result) => {
    
    var user = result;
    console.log({user});
    
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
    console.log({
      errorCode,
      errorMessage,
      email,
      credential,
    });
    
  });
  return {
    props: {

    }
  }
}