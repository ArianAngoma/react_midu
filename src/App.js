import {lazy, Suspense} from "react";
import {Link, Route, Switch} from "wouter";
import './App.css';

import {SearchResults} from "./pages/SearchResults";
import {Detail} from "./pages/Detail";
import {Context} from "./context/StaticContext";
import {GifsContextProvider} from "./context/GifsContext";
import ErrorPage from 'pages/ErrorPage';

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
                            <Switch>

                                <Route
                                    component={HomePage}
                                    path="/"
                                />

                                <Route
                                    component={SearchResults}
                                    path="/search/:keyword/:rating?"
                                />

                                <Route
                                    component={Detail}
                                    path="/gif/:id"
                                />

                                <Route
                                    component={ErrorPage}
                                    path="/:rest*"
                                />
                            </Switch>

                        </GifsContextProvider>

                    </section>

                </Suspense>
            </div>
        </Context.Provider>
    );
}

export default App;
