import { useState } from 'react';
import Loader from './Loader';
// import { Alert } from 'react-alert'
const DeleteAlbum = () => {

  var [id, setId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const addingData = (id) => {
    if(id==undefined){
      window.alert("Can't be emty");
      return
    }
    setIsLoading(true);
    var fetching = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    }).then(()=>setIsLoading(false))
    .catch((e)=>setIsLoading(false));
    console.log(id);
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="cointainer">
      <form>
        <label>
          Id
          <input
            type="text"
            name="id"
            placeholder="enter Id"
            pattern="[0-9]+"
            onChange={(e) => {
              setId(e.target.value)
            }}
            required
          />
        </label>

        <button
          className="button-55"
          type="button"
          onClick={() => addingData(id)}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteAlbum;
