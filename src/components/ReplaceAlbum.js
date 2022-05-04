import { useState } from 'react';
import Loader from './Loader';

const ReplaceAlbum = () => {
    var [id,setId] = useState();
    var [title,settitle] = useState();
    var [body,setbody] = useState();
    var [userId,setUserid] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const addingData = (id) => {
      setIsLoading(true);
      var fetching = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
              id,
              title,
              body,
              userId
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => { setIsLoading(false)
              console.log(json)})
            .catch((e)=>{
              setIsLoading(false)
              (console.log(e))
            return})
      console.log(id);
      setTimeout(fetching, 2000);
    };
    if (isLoading) {
      return <Loader />;
    }
        return (
      <div className='cointainer'>
      <form>
        <div>
        <label>
          Id
          <input
            type="text"
            name="id"
            placeholder="enter Id"
            onChange={(e) => setId(e.target.value)}
            required
          />
        </label>
        </div>
        <div>
      <label>
        Title
        <input
          type="text"
          name="Title"
          placeholder="enter Title"
          onChange={(e) => settitle(e.target.value)}
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
          onChange={(e) => setbody(e.target.value)}
          required
        />
        </label>
</div>
<div>
<label>
        UserId
        <input
          type="text"
          name="UserId"
          placeholder="enter UserId"
          onChange={(e) => setUserid(e.target.value)}
          required
        />
      </label>
</div>
        <button className='button-55' type="button" onClick={() => addingData(id,title,body)}>
          Delete
        </button>
      </form>
      </div>
    );
  };
  
  export default ReplaceAlbum;
  