import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
// import Albums from './Albums';
import Navbar from './Navbar';
import AddAlbum from './AddAlbum';
import DeleteAlbum from './DeleteAlbum';
import ReplaceAlbum from './ReplaceAlbum';
import Loader from './Loader';


// import './style.css';
// import {data} from './api/index'

import { useEffect } from 'react';
function App() {
  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => setAlbum(json));
    };
    fetchPosts();
  }, []);
  console.log(album);
  var changeLoading=()=>{
    setLoading(false)
  }
setTimeout(changeLoading,2000);
if (loading) {
  return(<div>
    <Router>
      <Navbar />
      <Loader/>
      <Switch>
        <Route path="/add">
          <AddAlbum album={album} setAlbum={setAlbum} />
        </Route>

        <Route path="/delete">
          <DeleteAlbum />
        </Route>
        <Route path="/replace">
          <ReplaceAlbum />
        </Route>
      </Switch>
    </Router>
    ,
  </div>) ;
}
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Albums-list-React-app">

            
            {!loading&&album.map((data, id) => {
              return (
                <div className="albums-container" key={id}>
                  <div className="content-container">
                    <p>UserId: {data.userId}</p>
                    <h2>Title: {data.title} </h2>
                    <p>Content: {data.body}</p>
                  </div>
                </div>
              );
            })}
          </Route>

          <Route path="/add">
            <AddAlbum album={album} setAlbum={setAlbum} />
          </Route>

          <Route path="/delete">
            <DeleteAlbum />
          </Route>
          <Route path="/replace">
            <ReplaceAlbum />
          </Route>
        </Switch>
      </Router>
      ,
    </div>
  );
}
export default App;
