import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import NavBarComponent from '../NavBar-Component/navbar-component'



export const MainComponent: React.FC = () => {
    return (
        <div id="main-component">
            <HashRouter>
                <NavBarComponent />
                    <main>
                        <Switch>
                            <Route path="">

                            </Route>
                            <Route path="">
                                
                            </Route>
                        </Switch>
                    </main>
            </HashRouter>
        </div>
    )
}
