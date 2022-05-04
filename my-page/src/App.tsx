import React from 'react';
import data from './date.json';

import './App.css';

function App() {
	const renderContact = () => {
	return Object.keys(data.contact).map((link, index) => {
			return (
			<li key={link.toString()}>
				<a 
				target="_blank"
				rel="noopener noreferrer"
				href={data.contact[index].link}>{data.contact[index].name}</a>
			</li>)
		})
	}
	const renderContent = () => {
		return Object.keys(data.biography).map((value, index) => {
			return (
				<li key={value.toString()}>
					{data.biography[index]}
				</li>
			)
		}) 
	}
  return (
    <div className="App grid">
      <header className="App-header flex">
      	<h2>{data.firstName}</h2>
				<p>Intern React Developer</p>
				<div className="App-conatat">
					<ul>
						{renderContact()}
					</ul>
				</div>
      </header>
			<aside className='App-container flex'>
				<ul>
					{renderContent()}
				</ul>
			</aside>
    </div>
  );
}

export default App;
