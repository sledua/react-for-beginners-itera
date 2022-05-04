import React from 'react'

const Content = (props : any) => {
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
