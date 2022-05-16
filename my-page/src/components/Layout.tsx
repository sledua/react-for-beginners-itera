import React from "react"
import data from "../assets/jsons/date.json"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
	return (
		<>
			<Navbar logo={data.navigation.logo} navigation={data.navigation.UA} />
			<Outlet />
		</>
	)
}

export default Layout
