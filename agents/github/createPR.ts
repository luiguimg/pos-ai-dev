import { Octokit } from "@octokit/rest"

const octokit = new Octokit({
 auth: process.env.GITHUB_TOKEN
})

export async function createPR(branch:string,title:string){

 const owner = process.env.GITHUB_OWNER!
 const repo = process.env.GITHUB_REPO!

 // buscar PR existentes del branch
 const prs = await octokit.pulls.list({
  owner,
  repo,
  head: `${owner}:${branch}`,
  state: "open"
 })

 if(prs.data.length > 0){

  console.log("PR already exists:", prs.data[0].html_url)
  return

 }

 const pr = await octokit.pulls.create({
  owner,
  repo,
  title: title,
  head: branch,
  base: "main",
  body: "AI generated extension"
 })

 console.log("PR created:", pr.data.html_url)

}
