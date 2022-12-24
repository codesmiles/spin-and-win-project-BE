export interface User {
    id: number;
    name: string;
    email: string;
}

export interface res {
    successful: boolean;
    message: string; 
    data?: any;
}