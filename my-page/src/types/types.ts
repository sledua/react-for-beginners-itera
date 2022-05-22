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
}