import { useState } from "react";

function App() {

  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const fetchImage = () => {
    fetch( `https://api.unsplash.com/search/photos/?client_id=CsCH5DJAssv3rBYwRY-1QyQ57of_6AxhperjaTkKPYM&query=${value}` )
    .then( res => res.json())
    .then( data => {
      setResult(data.results)
    })
  }
  
  return (
    <div>
      <header>
        <span>جستجو</span>
        <input type="text" value={value} onChange={ (e) => setValue(e.target.value)}/>
        <button onClick={fetchImage}>ارسال</button>
      </header>
      <div className="gallary">
        {
          result && result.map((item) =>  <img key={item.id} src={item.urls.regular} alt="" />)
        }
      </div>
    </div>
  );
}

export default App;
