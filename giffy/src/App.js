import {Link, Route} from "wouter";
import './App.css';

import {SearchResults} from "./pages/SearchResults";
import {Detail} from "./pages/Detail";
import {Home} from "./pages/Home";

function App() {

    return (
        <div className="App">
            <section className="App-content">

                <Link to="/">
                    <img
                        src="https://giphy.com/static/img/about/stickers/logo-spin.gif"
                        alt="logo"
                        className="App-logo"
                    />
                </Link>

                <Route
                    component={Home}
                    path="/"
                />

                <Route
                    component={SearchResults}
                    path="/search/:keyword"
                />

                <Route
                    component={Detail}
                    path="/gif/:id"
                />

            </section>
        </div>
    );
}

export default App;
