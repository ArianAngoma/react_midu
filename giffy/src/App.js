import './App.css';

import {ListOfGifs} from "./components/ListOfGifs";


function App() {

    return (
        <div className="App">
            <section className="App-content">

                <ListOfGifs keyword={'Lima'}/>

            </section>
        </div>
    );
}

export default App;
