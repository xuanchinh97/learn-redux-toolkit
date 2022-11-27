import { useState } from 'react';
import './App.css';
import EditPage from './Components/Edit/EditPage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MakePost from './Components/Post/MakePost';
import Post from './Components/Post/Post';


function App() {
  const [isEdit, setEdit] = useState(false)
  const [openPost, setOpenPost] = useState(false)

  return (
    <main className="App">
      {isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />}
      {openPost ? <MakePost setOpenPost={setOpenPost} /> : ''}
      {isEdit || openPost ? '' : <Post />}
      <Footer openPost={openPost} setOpenPost={setOpenPost} />
    </main>

  );
}

export default App;
