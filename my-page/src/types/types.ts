export interface ContactAutor {
	iconName: any 
	name?: string
	link?: string
}
export interface ContentTypeAboutAutor {
	autor?: string 
	bio: string | string[] 
	page: string
	contact: ContactAutor[]
	position?: string
	header?: HeaderProps[]
	items: TaskPropsList[]
}
export interface HeaderProps {
	headerTitle?: string
	headerParagraf?: string
	page?: string 
}
export interface TaskPropsList {
	title: string
	pSmol: string
	path?: string
}