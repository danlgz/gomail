export namespace workspaces {
	
	export class Workspace {
	    id: string;
	    name: string;
	    baseColor: string;
	    selectedEmail: string;
	    selectedView: string;
	
	    static createFrom(source: any = {}) {
	        return new Workspace(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.baseColor = source["baseColor"];
	        this.selectedEmail = source["selectedEmail"];
	        this.selectedView = source["selectedView"];
	    }
	}

}

