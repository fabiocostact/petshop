export class User {
    [x: string]: any;
    constructor(
        public _id: string,
        public name: string,
        public document: string,
        public email: string
    ) {

    }
}