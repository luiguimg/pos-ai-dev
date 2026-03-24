import ts from "typescript"
import fs from "fs"
import path from "path"

const sdkPath = "./sdk"
const output = "./sdk-knowledge.json"

const api = {
 modules:[],
 classes:[],
 interfaces:[],
 enums:[]
}

function getType(type:any){
 if(!type) return "any"
 return type.getText()
}

function parseMethods(node:any){

 const methods:any[]=[]

 node.members?.forEach((member:any)=>{

  if(ts.isMethodSignature(member) || ts.isMethodDeclaration(member)){

   const params = member.parameters.map((p:any)=>({
    name:p.name.getText(),
    type:getType(p.type)
   }))

   methods.push({
    name:member.name.getText(),
    params,
    returnType:getType(member.type)
   })

  }

 })

 return methods
}

function parseProperties(node:any){

 const props:any[]=[]

 node.members?.forEach((member:any)=>{

  if(ts.isPropertySignature(member)){

   props.push({
    name:member.name.getText(),
    type:getType(member.type)
   })

  }

 })

 return props
}

function parseFile(filePath:string){

 const source = ts.createSourceFile(
  filePath,
  fs.readFileSync(filePath,"utf8"),
  ts.ScriptTarget.Latest,
  true
 )

 let currentModule=""

 source.forEachChild(node=>{

  if(ts.isModuleDeclaration(node)){

   currentModule=node.name.getText()

   api.modules.push(currentModule)

  }

  if(ts.isClassDeclaration(node) && node.name){

   api.classes.push({

    name:node.name.text,
    module:currentModule,
    extends:node.heritageClauses?.map(h=>h.getText()) || [],
    methods:parseMethods(node),
    properties:parseProperties(node),
    file:filePath

   })

  }

  if(ts.isInterfaceDeclaration(node)){

   api.interfaces.push({

    name:node.name.text,
    module:currentModule,
    methods:parseMethods(node),
    properties:parseProperties(node),
    file:filePath

   })

  }

  if(ts.isEnumDeclaration(node)){

   api.enums.push({

    name:node.name.text,
    members:node.members.map(m=>m.name.getText()),
    file:filePath

   })

  }

 })

}

function walk(dir:string){

 const files=fs.readdirSync(dir)

 for(const file of files){

  const full=path.join(dir,file)

  if(fs.statSync(full).isDirectory()){

   walk(full)

  }

  else if(file.endsWith(".d.ts")){

   parseFile(full)

  }

 }

}

console.log("Scanning SDK...")

walk(sdkPath)

fs.writeFileSync(output,JSON.stringify(api,null,2))

console.log("SDK knowledge generated")
console.log("Modules:",api.modules.length)
console.log("Classes:",api.classes.length)
console.log("Interfaces:",api.interfaces.length)
console.log("Enums:",api.enums.length)
