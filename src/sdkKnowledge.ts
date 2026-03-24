import fs from "fs"

const sdk = JSON.parse(
 fs.readFileSync("./sdk-index.json","utf8")
)

export function findClass(name:string){

 return sdk.classes.find((c:any)=>c.name===name)

}

export function searchApi(keyword:string){

 return sdk.classes.filter((c:any)=>
  c.name.toLowerCase().includes(keyword.toLowerCase())
 )

}
