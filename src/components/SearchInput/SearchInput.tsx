import React, { FC } from 'react';
import classes from './SearchButton.module.css';

interface ISearchInputProps {
	search: string;
	setSearch: (str: string) => void;
}
const SearchInput: FC<ISearchInputProps> = ({
	search,
	setSearch,
	...props
}) => {
	return (
		<input
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			placeholder='Search'
			className={classes['input-search']}
			{...props}
		/>
	);
};

export default SearchInput;
