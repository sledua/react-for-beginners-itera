import React, { FC } from 'react'
interface bioProps{
	bio: string[];
}
const Content: FC<bioProps> = props => {
	const renderContent = () => {
				return Object.keys(props.bio).map((value, index) => {
					return (
						<li key={value.toString()}>
							{props.bio[index]}
						</li>
					)
				}) 
			}
	return (
		<aside className='App-container flex'>
			<ul>
				{renderContent()}
			</ul>
		</aside>
	)
}

export default Content
