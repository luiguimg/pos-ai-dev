import { execSync } from "child_process"

export function commitChanges(message:string){

 execSync("git add .")
 execSync(`git commit -m "${message}"`)
 execSync("git push origin HEAD")

}
