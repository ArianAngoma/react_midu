import {Route} from "wouter";
import './App.css';

import {ListOfGifs} from "./components/ListOfGifs";


function App() {

    return (
        <div className="App">
            <section className="App-content">

                <h1>App</h1>

                <a href="/gif/panda">Gifs de pandas</a>

                <a href="/gif/peru">Gifs de peru</a>

                <a href="/gif/rick">Gifs de rick</a>

                <Route
                    path="/gif/:keyword"
                    component={ListOfGifs}
                />

            </section>
        </div>
    );
}

export default App;
