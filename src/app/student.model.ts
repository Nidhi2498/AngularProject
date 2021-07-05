export class Student {
    public name!: string;
    public rollno!: number;
    public address! : string;
    public skill! : Skill[];
}

export class Skill{
    public title!: string;
    public certification!:string;
}
