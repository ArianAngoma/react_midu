import {lazy, Suspense} from "react";
import {Link, Route} from "wouter";
import './App.css';

import {SearchResults} from "./pages/SearchResults";
import {Detail} from "./pages/Detail";
import {Context} from "./context/StaticContext";
import {GifsContextProvider} from "./context/GifsContext";

const HomePage = lazy(() => import('./pages/Home'));

function App() {

    return (
        <Context.Provider value={{
            name: 'Arian',
            isHuman: true,
        }}>
            <div className="App">

                <Suspense fallback={null}>

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
                                component={HomePage}
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

                            <Route
                                component={() => <h1>404 Error D:</h1>}
                                path="/404"
                            />

                        </GifsContextProvider>

                    </section>

                </Suspense>
            </div>
        </Context.Provider>
    );
}

export default App;
