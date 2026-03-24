import { Octokit } from "@octokit/rest"

const octokit = new Octokit({
 auth: process.env.GITHUB_TOKEN
})

export async function createPR(branch:string){

 await octokit.pulls.create({
  owner:"TU_USER",
  repo:"TU_REPO",
  title:"AI generated POS extension",
  head:branch,
  base:"main",
  body:"Generated automatically from issue"
 })

}
