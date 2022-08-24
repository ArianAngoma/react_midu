import {Link, Route} from "wouter";
import './App.css';

import {ListOfGifs} from "./components/ListOfGifs";


function App() {

    return (
        <div className="App">
            <section className="App-content">

                <h1>App</h1>

                <Link to="/gif/panda">Gifs de pandas</Link>

                <Link to="/gif/peru">Gifs de peru</Link>

                <Link to="/gif/rick">Gifs de rick</Link>

                <Route
                    path="/gif/:keyword"
                    component={ListOfGifs}
                />

            </section>
        </div>
    );
}

export default App;
