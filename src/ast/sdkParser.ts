import { Project } from "ts-morph";
import fs from "fs";

export async function parseSDK() {

 const project = new Project({
  skipAddingFilesFromTsConfig: true
 });

 // definiciones del SDK
 project.addSourceFilesAtPaths("sdk/POS/Contracts/**/*.d.ts");

 // ejemplos de extensiones
 project.addSourceFilesAtPaths("sdk/POS/Extensions/**/*.ts");

 const classes:any[] = [];
 const interfaces:any[] = [];
 const enums:any[] = [];

 const files = project.getSourceFiles();

 console.log("Files detected:", files.length);

 files.forEach(file => {

  file.getClasses().forEach(cls => {

   classes.push({
    name: cls.getName(),
    methods: cls.getMethods().map(m => m.getName()),
    properties: cls.getProperties().map(p => p.getName()),
    extends: cls.getBaseClass()?.getName()
   });

  });

  file.getInterfaces().forEach(i => {

   interfaces.push({
    name: i.getName(),
    methods: i.getMethods().map(m => m.getName())
   });

  });

  file.getEnums().forEach(e => {

   enums.push({
    name: e.getName(),
    members: e.getMembers().map(m => m.getName())
   });

  });

 });

 if(!fs.existsSync("./sdk-index")){
  fs.mkdirSync("./sdk-index");
 }

 fs.writeFileSync(
  "./sdk-index/classes.json",
  JSON.stringify(classes,null,2)
 );

 fs.writeFileSync(
  "./sdk-index/interfaces.json",
  JSON.stringify(interfaces,null,2)
 );

 fs.writeFileSync(
  "./sdk-index/enums.json",
  JSON.stringify(enums,null,2)
 );

 console.log("SDK indexed successfully");
 console.log("Classes:", classes.length);
 console.log("Interfaces:", interfaces.length);
 console.log("Enums:", enums.length);

}
