import { readIssues } from "../agents/github/readIssues"
import { generateExtension } from "../agents/codeGenerator/generateExtension"
import { validateCode } from "../agents/sdkValidator/validate"
import { createBranch } from "../agents/git/createBranch"
import { commitChanges } from "../agents/git/commit"
import { createPR } from "../agents/github/createPR"

async function run(){

 console.log("Checking GitHub issues...")

 const issues = await readIssues()

 for(const issue of issues){

  console.log("Processing issue:",issue.title)

  console.log("DEBUG ISSUE:", issue)

  const branch = createBranch(issue.number)

  generateExtension(issue)

  const valid = validateCode()

  if(valid){

   commitChanges(`AI implementation for issue ${issue.number}`)

   await createPR(branch,issue.title)

   console.log("PR created")

  }

 }

}

run()
