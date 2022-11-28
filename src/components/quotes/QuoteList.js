import {Fragment} from 'react';
import {useHistory, useLocation} from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
	return quotes.sort((quoteA, quoteB) => {
		if (ascending) {
			return quoteA.id > quoteB.id ? 1 : -1;
		} else {
			return quoteA.id < quoteB.id ? 1 : -1;
		}
	});
};

const QuoteList = (props) => {
	const history = useHistory();
	const location = useLocation();

	const queryParams = new URLSearchParams(location.search);
	const ascSorting = queryParams.get('sort') === 'asc';
	const sortingQuotes = sortQuotes(props.quotes, ascSorting);

	function sortHandler(envent) {
		history.push({
			pathname: location.pathname,
			search: `?sort=${ascSorting ? 'desc' : 'asc'}`,
		});
	}
	return (
		<Fragment>
			<div className={classes.sorting}>
				<button onClick={sortHandler}>
					Sort {ascSorting ? 'Descending' : 'Ascending'}
				</button>
			</div>
			<ul className={classes.list}>
				{sortingQuotes.map((quote) => (
					<QuoteItem
						key={quote.id}
						id={quote.id}
						author={quote.author}
						text={quote.text}
					/>
				))}
			</ul>
		</Fragment>
	);
};

export default QuoteList;
