import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import QuoteDetail from './pages/QuoteDetail';

const {Switch, Route} = require('react-router-dom');

function App() {
	return (
		<Switch>
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
	);
}

export default App;
