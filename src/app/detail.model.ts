export class Detail {
    public id: number;
    public name : string;
    public title : string;
    public description : string;
  
    constructor(id:number, name:string, title:string, description:string){
      this.id = id;
      this.name = name;
      this.title = title;
      this.description = description;
    }
}
