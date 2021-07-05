export class Customer {
    public id!: number;
    public name!: string;
    public rollno!: number;
    public address! : string;
    public gender! : string;
    public skill! : Skill[];
}

export class Skill{
    public title1!: string;
    public title2!:string;
}

export enum Action{
    EDIT_ACTION = 'Update'
}
