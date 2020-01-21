export class User {
    id: number;
    name: string;
    dob: Date;
    gender: string;
    genre: string;
    email: string;
    password: string;
    phone: number;
    img: string;


    constructor() {
        this.name = "";
        this.email = "";
        this.dob = null;
        this.gender = "";
        this.genre = "";
        this.password = "";
        this.phone = null;
        this.img = "";
    }
}