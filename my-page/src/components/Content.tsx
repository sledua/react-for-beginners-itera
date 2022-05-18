import React, { FC } from "react"
interface headerBlok {
	head: string
	icon?: string
	body: string
}
interface headerButton {
	head: string
	body: string
	buttonName: string
	buttonLink: string
}
interface allProps {
	blok: headerBlok[]
	link: headerButton
}
const Content: FC<allProps> = (props) => {
	const renderBox = () => {
		return Object.keys(props.blok).map((l, index) => {
			return (
				<div className="box" key={l+Math.random().toString()}>
					<h4>{props.blok[index].head}</h4>
					<p>{props.blok[index].body}</p>
				</div>
			)
		})
	}
	return (
		<div className="card-page">
			<section className="padding-6">
				<div className="container content">
					<div className="row-box flex">
						<div className="column box-item grid">{renderBox()}</div>
						<div className="column">
							<div className="card">
								<div className="card-header">
									<span>
										<img src={require("../assets/img/github-img.jpg")} alt="github" />
									</span>
								</div>
								<div className="card-body">
									<h4>{props.link.head}</h4>
									<p>{props.link.body}</p>
									<button>{props.link.buttonName}</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Content
