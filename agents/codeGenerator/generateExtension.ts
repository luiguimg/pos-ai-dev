import fs from "fs"
import path from "path"

export function generateExtension(issue:any){

 const outputDir="generated-extensions/AutoExtension/TriggerHandlers"

 const code=`
import { PreEndTransactionTrigger } from "PosApi/Extend/Triggers/TransactionTriggers";
import { IPreEndTransactionTriggerOptions } from "PosApi/Extend/Triggers/TransactionTriggers";

export default class AutoTrigger extends PreEndTransactionTrigger {

 execute(options: IPreEndTransactionTriggerOptions): Promise<void>{

  console.log("Generated from GitHub Issue: ${issue.title}")

  return Promise.resolve()

 }

}
`

 fs.mkdirSync(outputDir,{recursive:true})

 fs.writeFileSync(
  path.join(outputDir,"AutoTrigger.ts"),
  code
 )

 console.log("Extension generated for issue:",issue.title)

}
