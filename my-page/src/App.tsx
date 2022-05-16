import React, { Component } from "react"
import "./styles/App.scss"
import { Route, Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import Task from "./components/pages/Task"
import Blog from "./components/pages/Blog"
import AboutI from "./components/pages/AboutI"
import AboutCours from "./components/pages/AboutCours"
import Error from "./components/pages/Error-page"
import Layout from "./components/Layout"

export default class App extends Component {
	render() {
		return (
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="task" element={<Task />} />
					<Route path="blog" element={<Blog/>} />
					<Route path="aboutI" element={<AboutI/>} />
					<Route path="aboutCours" element={<AboutCours/>} />
					<Route path="*" element={<Error/>} />
				</Route>
			</Routes>
		)
	}
}
