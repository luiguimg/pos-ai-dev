import { execSync } from "child_process"

export function validateCode(){

 try{

  execSync("npx tsc --noEmit",{stdio:"inherit"})
  return true

 }catch{

  return false

 }

}
