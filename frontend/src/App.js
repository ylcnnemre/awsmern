import React, { useEffect, useState } from "react";
import axios from "axios"
const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const result = await fetch("http://localhost:5000");
      const veri = await result.json();
      setData(veri);
      console.log("veri =>", veri);
    })();
  }, []);

  const sendData = async () => {
    /* const result = await fetch("http://localhost:3000/setdata", {
      body: JSON.stringify({
        name: "emreee",
        age: 25,
      }),
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json123123123123'
      },
      method : "POST" */
      axios.post("http://localhost:5000/setdata",{
        "isim" : "emreeeee"
      })
    };

   /*  
    const getData=async()=>{
       let sonuc= await axios.get("http://localhost:3000/")
       

    } */


  return (
    <div>
      <button onClick={() => sendData()}>gönder</button>
      {
        data && data.map(val => <p> {val.name} </p>)
      }
    </div>
  );
};

export default App;
