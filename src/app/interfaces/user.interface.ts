export interface User {
    _id: string;
    userphoto: string;
    username: string;
    followernumber: number;
    followingnumber: number;
    email: string;
    password: string;
    fullname: string;
    bio: string;
    post: any[];
    cratedAt: Date;
    updatedAt: Date;
}