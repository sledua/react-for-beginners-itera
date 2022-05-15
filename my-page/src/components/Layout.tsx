import React from 'react'
import data from '../assets/jsons/date.json'
import Navbar from './Navbar'

const Layout = () => {
	return (
		<>
		<Navbar 
		logo={data.navigation.UA.logo}
		main={data.navigation.UA.main}
		task={data.navigation.UA.task}/>
		</>

			// <Head 
			// 	name={data.firstName} 
			// 	links={data.contact} 
			// 	position={data.position}/>
			// <Content bio={data.biography}/>
		
	)
}

export default Layout
