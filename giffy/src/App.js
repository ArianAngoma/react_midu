import {useState, useEffect} from "react";
import './App.css';

const initialGifs = [
  'https://media0.giphy.com/media/fwEbVEF75g9x9tlprj/giphy.gif',
  'https://media0.giphy.com/media/vvV0blGNCeiEdWRcgf/giphy.gif?cid=ecf05e478mf0e7p4lm2z1yfilhlact7affwtpi6ejmuv5e78&rid=giphy.gif&ct=g'
]

const secondGifs = [
  'https://media1.giphy.com/media/WspxoaW2z7iWPJP0bM/giphy.gif?cid=ecf05e47ek8c1xbdi1qrdz7b704tcg2kdf4xsyudzv7deeqc&rid=giphy.gif&ct=g',
  'https://media2.giphy.com/media/3oFzmlZioDfbtyrwaI/giphy.gif?cid=ecf05e472lmgspqzvfo3ms7nvk7d97ukvrp2sbnxtyauscfy&rid=giphy.gif&ct=g'
]

function App() {
  const [gifs, setGifs] = useState(initialGifs);

  useEffect(() => {
    console.log('useEffect');
    setGifs(secondGifs);
  }, [])

  return (
      <div className="App">
        <section className="App-content">

          {
            gifs.map((gif) => (
                <img src={gif} alt="Gif" key={gif}/>
            ))
          }

          <button onClick={() => {
            setGifs(secondGifs)
          }}>
            Cambiar gifs
          </button>
        </section>
      </div>
  );
}

export default App;
