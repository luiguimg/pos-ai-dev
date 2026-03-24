import { Octokit } from "@octokit/rest"

const octokit = new Octokit({
 auth: process.env.GITHUB_TOKEN
})

export async function readIssues(){

 const issues = await octokit.issues.listForRepo({
  owner:"luiguimg",
  repo:"pos-ai-dev",
  state:"open"
 })

 return issues.data

}
