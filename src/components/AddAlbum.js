import { useState } from 'react';
import styles from '../styles/albums.css';
import toast, { Toaster } from 'react-hot-toast';
import Loader from './Loader';

const AddAlbum = (props) => {
  var [userid, setUserid] = useState();
  var [title, setTitle] = useState();
  var [body, setBody] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const addingData = (userId, title, body) => {
    setIsLoading(true);
    var fetching = fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false)
        toast.success('Successfully toasted!')
        props.setAlbum((prevAlbums) => [...prevAlbums, json]);
      })
      .catch((e)=>{
        setIsLoading(false)
        toast.error('This is an error!');
        (console.log(e))
      return});
      setTimeout(fetching, 2000);
  };
  
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="cointainer">
      <form>
        <div>
          <label>
            User Id
            <input
              type="text"
              name="userId"
              placeholder="enter Id"
              onChange={(e) => setUserid(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Title
            <input
              type="text"
              name="title"
              placeholder="enter Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Body
            <input
              type="text"
              name="body"
              placeholder="enter Body"
              required
              onChange={(e) => setBody(e.target.value)}
            />
          </label>
        </div>
        <button
          className="button-55"
          type="button"
          onClick={() => addingData(userid, title, body)}
          disabled={isLoading}
        >
          Submit
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default AddAlbum;
