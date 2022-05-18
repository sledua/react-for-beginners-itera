import React, { FC } from "react"

const ContentType: FC = (props) => {
	return (
		<div className="card-page">
			<section className="padding-6">
				<div className="container content">
					<div className="row grid">
						<div className="thumb">
							<img src={require("../assets/img/autor-thumb.png")} alt="autor-thumb" className="avatar"/>
						</div>
						<div className="information">
							<h3>Artem</h3>
							<div className="links">
								<a href="/">Links</a>
							</div>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta placeat laudantium neque eveniet tempora vel consectetur, asperiores fuga, quibusdam expedita, voluptatibus explicabo esse minima! Officia nulla quod modi quis consequatur?</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ContentType
