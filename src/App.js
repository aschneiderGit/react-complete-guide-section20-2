import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

const {Switch, Route, Redirect} = require('react-router-dom');

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<Redirect to="/quotes" />
				</Route>
				<Route path="/quotes" exact>
					<AllQuotes />
				</Route>
				<Route path="/quotes/:quoteId">
					<QuoteDetail />
				</Route>
				<Route path="/new-quote">
					<NewQuote />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
