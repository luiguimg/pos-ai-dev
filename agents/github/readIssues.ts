import { Octokit } from "@octokit/rest"
import dotenv from "dotenv"

dotenv.config()

const octokit = new Octokit({
 auth: process.env.GITHUB_TOKEN
})

export async function readIssues(){

 const issues = await octokit.issues.listForRepo({
  owner: process.env.GITHUB_OWNER!,
  repo: process.env.GITHUB_REPO!,
  state: "open"
 })

 return issues.data
}
