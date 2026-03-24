import fs from "fs"

const sdk = JSON.parse(
 fs.readFileSync("./sdk-knowledge.json","utf8")
)

export function findClass(name:string){

 return sdk.classes.find((c:any)=>c.name===name)

}

export function findModule(module:string){

 return sdk.classes.filter((c:any)=>
  c.module.includes(module)
 )

}

export function findMethod(className:string,method:string){

 const c=findClass(className)

 return c?.methods.find((m:any)=>m.name===method)

}
