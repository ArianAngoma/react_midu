import {Link, Route} from "wouter";
import './App.css';

import {SearchResults} from "./pages/SearchResults";
import {Detail} from "./pages/Detail";
import {Home} from "./pages/Home";
import {Context} from "./context/StaticContext";
import {GifsContextProvider} from "./context/GifsContext";

function App() {

    return (
        <Context.Provider value={{
            name: 'Arian',
            isHuman: true,
        }}>
            <div className="App">
                <section className="App-content">

                    <Link to="/">
                        <img
                            src="https://giphy.com/static/img/about/stickers/logo-spin.gif"
                            alt="logo"
                            className="App-logo"
                        />
                    </Link>

                    <GifsContextProvider>

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

                    </GifsContextProvider>

                </section>
            </div>
        </Context.Provider>
    );
}

export default App;
