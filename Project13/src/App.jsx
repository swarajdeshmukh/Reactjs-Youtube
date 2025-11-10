import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(function(){
    getData()
  },[index])


  const prev = () =>{
    if(index > 1){
      setIndex(index - 1)
      console.log(index)
    }
  }

  const inc = () =>{
    setIndex(index + 1)
      console.log(index)
  }

  const defaultR = "Loading...";
  const getData = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=6`
    );
    setData(res.data);
    // console.log(data)
  };

  return (
    <div className="main">
      <div className="header">
        <h1>Image Gallery</h1>
        {/* <button onClick={getData}>Get Data</button> */}
      </div>

      <div className="image-container">

        
        {data.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          data.map((val, idx) => (
            <a href={val.url} target="_blank" key={idx}>
              <div>
                <img src={val.download_url}  alt={val.author} />
                <h4>Author: {val.author}</h4>
              </div>
            </a>
          ))
        )}
      </div>

        <div className="button-navigation">
        <button onClick={prev}>Prev</button>
        <h5>Page No. {index}</h5>
        <button onClick={inc}>Next</button>
      </div>
      
    </div>
    
  );
};

export default App;
