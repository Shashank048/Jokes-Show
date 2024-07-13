import { useEffect, useState } from "react";

export default function Joker(){

    const URL = "https://official-joke-api.appspot.com/random_joke"; 
    const getNewJoke = async() => {
        let respose = await fetch(URL);
        let jsonResponse = await respose.json();
      //  console.log(jsonResponse);
      //  return jsonResponse;
        setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline});
      };
   
    useEffect(() => {
        async function getFirstJoke(){
        let respose = await fetch(URL);
        let jsonResponse = await respose.json();
        console.log(jsonResponse);
       // return jsonResponse;
       setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        }
        getFirstJoke();
    },[]);
    
    let [joke, setJoke] = useState({});

    return(
        <div>
            <h3>Joker !</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}
