export interface IContacts {
	link: string;
	name: string;
	icon?: string;
}
export interface IAutor {
	name: string;
	position: string;
	contact: IContacts[];
	
} 