import React, { Component } from "react"
import Layout from "./components/Layout"
import "./styles/App.scss"
import { Route, Routes } from "react-router-dom"
export default class App extends Component {
	render() {
		return (
			<Routes>
				<Route path="/" element={<Layout />} />
			</Routes>
		)
	}
}
