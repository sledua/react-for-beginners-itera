import { FC } from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ContentTypeAboutAutor } from "../types/types"
library.add(fab)

interface Props extends ContentTypeAboutAutor{}

const ContentType: FC<Props> = props => {
	switch (props.page) {
		case "blog": {
			return (
				<div className="card-page">
					<section className="padding-6">
						<div className="container content">
							<div className="row grid">
								<h1>Blog</h1>
							</div>
						</div>
					</section>
				</div>
			)
		}
		case "autor": {
			const renderBioInfo = () => {
				return Object.keys(props.bio).map((value, id) => {
					return <li key={value.toString()}>{props.bio[id]}</li>
				})
			}
			const renderLinkInfo = () => {
				return Object.keys(props.contact).map((value, id) => {
					return (
						<a key={value.toString()} href={props.contact[id].link} target="_blank" rel="noopener noreferrer">
							<FontAwesomeIcon icon={['fab', props.contact[id].iconName]} />
						</a>
					)
				})
			}
			return (
				<div className="card-page">
					<section className="padding-6">
						<div className="container content">
							<div className="row grid">
								<div className="thumb">
									<img src={require("../assets/img/autor-thumb.png")} alt="autor-thumb" className="avatar" />
								</div>
								<div className="information">
									<h3>{props.autor}</h3>
									<div className="links">
										{renderLinkInfo()}
									</div>
									<div className="position">
										<span>Position:</span>
										<p>{props.position}</p>
									</div>
									<span>Bio:</span>
									<ul>{renderBioInfo()}</ul>
								</div>
							</div>
						</div>
					</section>
				</div>
			)
		}
		default: {
			return (
				<div className="card-page">
					<section className="padding-6">
						<div className="container content">
							<div className="row grid">
								<h1>Шаблон</h1>
							</div>
						</div>
					</section>
				</div>
			)
		}
	}
}

export default ContentType
