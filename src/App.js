import { Component, useEffect } from 'react';
import React from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component.jsx';
import './App.css';

const App = () => {
	const [searchValue, setSearchValue] = React.useState('');
	const [monsters, setMonsters] = React.useState([]);


	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));

	}, []);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLowerCase();
		setSearchValue(searchFieldString);
	};

	const filteredMonsters = monsters.filter((monster) => {
		return monster.name.toLowerCase().includes(searchValue);
	});

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
