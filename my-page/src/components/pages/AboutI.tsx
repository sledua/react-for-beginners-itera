import ContentType from '../ContentType'
import data from "../../assets/jsons/date.json"

const AboutI = () => {
	return (
		<ContentType page="autor" autor={data.aboutI.firstName} bio={data.aboutI.biography} contact={data.aboutI.contact} position={data.aboutI.position} items={[]}/>
	)
}

export default AboutI
