import { FC, useContext } from "react"
import { HeaderProps } from "../types/types"
import styled from "styled-components"
import home from "../assets/img/header-bg.jpg"
import task from "../assets/img/header-task-bg.jpg"
import blog from "../assets/img/header-blog-bg.jpg"
import aboutMe from "../assets/img/header-about-bg.jpg"
const Headers = styled.header`
	padding: 0;
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	background-size: cover;
	background-position: 50%;
	min-height: 70vh;
	background-image: ${() => {
		switch (props.page) {
			case "home":
				return `url(${home})`
			case "autor":
				return`url(${aboutMe})`
			case "task":
				return `url(${task})`
			case "blog":
				return `url(${blog})`
			default:
				return `url(${home})`
		}
	}}
`
const Header: FC<HeaderProps> = (props) => {
	const {styleForheader} = useContext{Glo} 
	return (
		<Headers className="header">
			<span></span>
			<div className="container">
				<h2>{props.headerTitle}</h2>
				<p>{props.headerParagraf}</p>
			</div>
		</Headers>
	)
}

export default Header
