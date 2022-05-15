import React from "react"
import data from "../assets/jsons/date.json"
import Navbar from "./Navbar"

const Layout = () => {
	return (
		<>
			<Navbar logo={data.navigation.logo} navigation={data.navigation.UA} />
		</>
	)
}

export default Layout
