import { Octokit } from "@octokit/rest"

const octokit = new Octokit({
 auth: process.env.GITHUB_TOKEN
})

export async function createPR(branch:string,title:string){

 await octokit.pulls.create({
  owner: process.env.GITHUB_OWNER!,
  repo: process.env.GITHUB_REPO!,
  title: title,
  head: branch,
  base: "main",
  body: "AI generated extension"
 })

}
