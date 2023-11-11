import React from 'react';
import Experience from './Experience';
import Abilities from './Abilities';
import Header from './Header';
import CLients from './CLients';
import Drop from './Drop';
import LetsTalk from './LetsTalk';

const Home = () => {
	return (
		<main>
			<Header />
			<Experience />
			<Abilities />
			<CLients />
			<Drop />
			<LetsTalk />
		</main>
	);
};

export default Home;
