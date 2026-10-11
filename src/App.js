import React from 'react';
import './App.css';
import { auth, db } from './firebase/init';
import { collection, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, 
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from 'firebase/auth';

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  function createPost() {
    const post = {
      title: 'My first post',
      description: 'This is my first post'
    };
    addDoc(collection(db, 'posts'), post);
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user.email[0].toUpperCase());
      if (user) {
        setUser(user)
      }
    })
  }, []); 
  

  function Register() {
    createUserWithEmailAndPassword(auth, 'email@email.com', 'Pass123')
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logIn() {
    signInWithEmailAndPassword(auth, 'email@email.com', 'Pass123')
      .then(({ user }) => {
        console.log(user);
        setUser(user)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <div className="App">
      <button onClick={Register}>Register</button>
      <button onClick={logIn}>Log In</button>
      <button onClick={logout}>Log Out</button>
      {loading ? 'loading...' : user.email}
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export default App;
