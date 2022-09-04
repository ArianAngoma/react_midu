import {lazy, Suspense} from "react";
import {Link, Route, Switch} from "wouter";
import './App.css';

import {SearchResults} from "pages/SearchResults";
import {Detail} from "pages/Detail";
import ErrorPage from 'pages/ErrorPage';
import Login from "pages/Login";

import Header from 'components/Header';

import {GifsContextProvider} from 'context/GifsContext'
import {UserContextProvider} from 'context/UserContext'

const HomePage = lazy(() => import('./pages/Home'));

function App() {

    return (

        <UserContextProvider>
            <div className="App">

                <Suspense fallback={null}>

                    <section className="App-content">

                        <Header/>

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
                                    component={Login}
                                    path={"/login"}
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

        </UserContextProvider>

    );
}

export default App;
