/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.1.2.0 (NJsonSchema v9.2.0.0) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming


export class Post implements IPost {
    id: number;
    body?: string;
    title?: string;
    creationDate?: string;
    author?: string;
    views: number;

    constructor(data?: IPost) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["Id"];
            this.body = data["Body"];
            this.title = data["Title"];
            this.creationDate = data["CreationDate"];
            this.author = data["Author"];
            this.views = data["Views"];
        }
    }

    static fromJS(data: any): Post {
        let result = new Post();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["Id"] = this.id;
        data["Body"] = this.body;
        data["Title"] = this.title;
        data["CreationDate"] = this.creationDate;
        data["Author"] = this.author;
        data["Views"] = this.views;
        return data;
    }
}

export interface IPost {
    id: number;
    body?: string;
    title?: string;
    creationDate?: string;
    author?: string;
    views: number;
}
