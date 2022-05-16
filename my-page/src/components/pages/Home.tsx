import React from 'react'
import data from '../../assets/jsons/date.json'
import Content from '../Content'

const Home = () => {
	return (
		<>
		<Content blok={data.home.UA.blok} link={data.home.UA.link}/>
		
		</>
		
	)
}

export default Home
