import { execSync } from "child_process"

export function createBranch(issueNumber:number){

 const branch = `ai/issue-${issueNumber}`

 try{

  execSync(`git rev-parse --verify ${branch}`,{stdio:"ignore"})

  console.log("Branch already exists, switching...")
  execSync(`git checkout ${branch}`)

 }catch{

  console.log("Creating new branch:",branch)
  execSync(`git checkout -b ${branch}`)

 }

 return branch

}
