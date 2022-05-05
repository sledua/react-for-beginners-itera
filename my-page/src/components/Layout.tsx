import React from 'react'
import Content from './Content'
import Head from './Head'
import data from '../assets/jsons/date.json'

const Layout = () => {
	return (
		<div className="App grid">
			<Head 
				name={data.firstName} 
				links={data.contact} 
				position={data.position}/>
			<Content bio={data.biography}/>
		</div>
	)
}

export default Layout
