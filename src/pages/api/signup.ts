import { NowRequest, NowResponse } from '@vercel/node'
import initFirebase from '../../lib/initFirebase'
import firebase from "firebase/app"
import "firebase/auth"

export default (req: NowRequest, res: NowResponse) => {
    initFirebase()
    const  provider = new firebase.auth.GithubAuthProvider();
  
    try {
      const credentials = firebase.auth().signInWithRedirect(provider)
      console.log(credentials);
      res.json({credentials})
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      res.send(400).json({error})
    }
}