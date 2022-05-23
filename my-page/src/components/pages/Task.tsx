import ContentType from '../ContentType'
import data from "../../assets/jsons/date.json"
const Task = () => {
	return (
		<ContentType page="task" bio={['']} contact={[]} items={data.task.list}/>
	)
}

export default Task
