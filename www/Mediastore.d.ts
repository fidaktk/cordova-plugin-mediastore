interface Mediastore{
	selectFolder(uri?:string):Promise<string>,
	selectFile(uri?:string):Promise<string>,
	openFolder(uri:string):Promise<void>,
	openFile(uri:string):Promise<void>,
	readFile(uri:string):Promise<ArrayBuffer>,
	writeFile(params:{
		data:string,
		filename:string,
		folder?:string,
		subFolder?:string
	}):Promise<string>,
	overwriteFile(params:{
		uri:string,
		data:string
	}):Promise<string>,
	saveFile(params:{
		data:string,
		filename?:string,
		folder?:string
	}):Promise<string>,
	deleteFile(uri:string):Promise<number>,
	getFileName(uri:string):Promise<string>,
	getUri(params:{
		folder:string,
		subFolder?:string,
		filename?:string,
	}):Promise<string>
}

interface CordovaPlugins{
	Mediastore:Mediastore
}