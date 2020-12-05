import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import App from "./App"
import Login from "./components/Login"


ReactDOM.render(
    <Router>
        <Route path="/" component={ Detail } />
    </Router>,
    document.getElementById('app')
);

class Main extends Component {
    render() {
        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="/components/Login"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        </div>
        )
    }
}
