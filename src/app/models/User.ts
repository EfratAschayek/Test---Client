import Child from "./Child";

export default class User {
    constructor(
        public FirstName: string,
        public LastName: string,
        public IdNumber: string,
        public DateOfBirth: Date,
        public Gender: string,
        public HMO: string,
        public Children: Child[]
    ) { }
}