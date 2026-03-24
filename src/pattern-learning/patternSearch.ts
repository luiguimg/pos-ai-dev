import fs from "fs"

const patterns = JSON.parse(
 fs.readFileSync("./sdk-index/patterns.json","utf8")
)

export function findPattern(type:string){

 return patterns[type] || []

}
