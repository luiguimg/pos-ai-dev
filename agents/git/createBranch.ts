import { execSync } from "child_process"

export function createBranch(issueNumber:number){

 const branch = `ai/issue-${issueNumber}`

 execSync(`git checkout -b ${branch}`)

 return branch
}
