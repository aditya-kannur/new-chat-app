import { useRef, useState } from 'react'
import './App.css'
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyDqboFWPZtKfVD8KqznFLBUqkd9JN7l7WY",
  authDomain: "chat-app-37466.firebaseapp.com",
  projectId: "chat-app-37466",
  storageBucket: "chat-app-37466.firebasestorage.app",
  messagingSenderId: "368301327304",
  appId: "1:368301327304:web:be77aad4c71d5b9e69f6fd",
  measurementId: "G-XRQMR57SP5"
});

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore };


function App() {

  const [user] = useAuthState(auth)

  return (
    <>
      <div className='App'>

      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

        <section>
          {user ? <ChatRoom /> : <SignUp />}
        </section>

      </div>
    </>
  )
}

function SignUp() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (

    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut(){

  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {

  const dummy = useRef()

  const messageRef = firestore.collection('messages')
  const query = messageRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField : 'id'})

  const [formValue, setFormValue] = useState('')

  const sendMessage = async(e) => {
    e.preventDefault()

    const {uid, photoURL} = auth.currentUser

    await messageRef.add({
      text : formValue,
      createdAt : firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue('')

    dummy.current.scrollIntoView({behavior : 'smooth'})
  }

  return (
    <>
    <main>
    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

    <div ref={dummy}></div>
    </main>

    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
      <button type='submit'>submit🕊️</button>
    </form>
    </>
  )
}

function ChatMessage(props){

const { text, uid, photoURL} = props.message

const messageClass = uid == auth.currentUser.uid ? 'sent' : 'received'

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt='image' />
      <p>{text}</p>
    </div>
  )
  
}

export default App
