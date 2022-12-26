import { Exclude } from "class-transformer";

export interface User {
    id: number;
    name: string;
    email: string;
    password:string;
}

export interface res {
    successful: boolean;
    message: string; 
    data?: any;
}
export class SerializedUser {
    id: number;
    name: string;
    email: string;

    @Exclude()
    password: string;

    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial);
    }

}