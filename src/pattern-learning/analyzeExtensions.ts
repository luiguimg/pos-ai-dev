import { Project } from "ts-morph"
import fs from "fs"

const project = new Project()

project.addSourceFilesAtPaths("sdk/POS/Extensions/**/*.ts")

const patterns:any = {
 triggers:[],
 managers:[],
 views:[],
 commands:[]
}

for(const file of project.getSourceFiles()){

 const classes = file.getClasses()

 for(const cls of classes){

  const name = cls.getName()

  if(!name) continue

  const heritage = cls.getHeritageClauses().map(h=>h.getText())

  if(heritage.join().includes("Trigger")){
   patterns.triggers.push({
    class:name,
    file:file.getFilePath()
   })
  }

  if(name.includes("Manager")){
   patterns.managers.push({
    class:name,
    file:file.getFilePath()
   })
  }

  if(name.includes("View")){
   patterns.views.push({
    class:name,
    file:file.getFilePath()
   })
  }

  if(name.includes("Command")){
   patterns.commands.push({
    class:name,
    file:file.getFilePath()
   })
  }

 }

}

fs.writeFileSync(
 "sdk-index/patterns.json",
 JSON.stringify(patterns,null,2)
)

console.log("Extension patterns extracted")
console.log("Triggers:",patterns.triggers.length)
console.log("Managers:",patterns.managers.length)
console.log("Views:",patterns.views.length)
console.log("Commands:",patterns.commands.length)
