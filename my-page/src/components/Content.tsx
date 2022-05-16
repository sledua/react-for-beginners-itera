import React, {FC} from 'react'
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
const Content: FC<allProps> = props => {
	
	return (
		<div className="card-page">
			<section className='padding-6'>
				<div className="container">
					<div className="row-box flex">
						
					</div>
				</div>
			</section>
		</div>
	)
}

export default Content
