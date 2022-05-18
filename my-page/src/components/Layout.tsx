import React from "react"
import data from "../assets/jsons/date.json"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

const Layout = () => {
	return (
		<>
			<Navbar logo={data.navigation.logo} navigation={data.navigation.UA} />
			<Outlet />
			<Footer logo={data.navigationFooter.logo} navigationFooter={data.navigationFooter.UA.navigation} copyright={data.navigationFooter.UA.copyright}/>
		</>
	)
}

export default Layout
