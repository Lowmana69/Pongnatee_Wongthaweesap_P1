import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { NavBarComponent } from '../NavBar-Component/navbar-component'



export const MainComponent: React.FC = () => {
    return (
        <div id="main-component">
            <HashRouter>
                <NavBarComponent />
                    <main>
                        <Switch>
                            <Route path="">
                                <Link></Link>
                            </Route>
                            <Route path="">
                                <Link></Link>
                            </Route>
                            <Route path="">
                                <Link></Link>
                            </Route>
                        </Switch>
                    </main>
            </HashRouter>
        </div>
    )
}
