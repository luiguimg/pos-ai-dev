import fs from "fs";

const classes = JSON.parse(
 fs.readFileSync("./sdk-index/classes.json","utf8")
);

const interfaces = JSON.parse(
 fs.readFileSync("./sdk-index/interfaces.json","utf8")
);

export function findType(name:string){

 return [
  ...classes.filter((c:any)=>c.name.includes(name)),
  ...interfaces.filter((i:any)=>i.name.includes(name))
 ];

}
