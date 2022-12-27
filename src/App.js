import { Component, useEffect } from 'react';
import React from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component.jsx';
import './App.css';

const App = () => {
	const [searchValue, setSearchValue] = React.useState('');
	const [monsters, setMonsters] = React.useState([]);
	const [filteredMonsters, setFilteredMonsters] = React.useState(monsters);

	console.log('rendered');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchValue);
		});

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchValue]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLowerCase();
		setSearchValue(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>

			<SearchBox
				placeholder='search-monsters'
				className='monsters-search-box'
				onChangeHandler={onSearchChange}
			/>

			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
