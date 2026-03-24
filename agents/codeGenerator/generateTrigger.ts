import fs from "fs"
import path from "path"

export function generatePreEndTrigger(name:string){

 const dir = `generated-extensions/${name}/TriggerHandlers`

 fs.mkdirSync(dir,{recursive:true})

 const code = `
import { PreEndTransactionTrigger } from "PosApi/Extend/Triggers/TransactionTriggers";
import { IPreEndTransactionTriggerOptions } from "PosApi/Extend/Triggers/TransactionTriggers";

export default class ${name} extends PreEndTransactionTrigger {

    public execute(options: IPreEndTransactionTriggerOptions): Promise<void> {

        console.log("Custom validation before transaction ends");

        return Promise.resolve();

    }
}
`

 fs.writeFileSync(`${dir}/${name}.ts`,code)

 console.log("Extension generated:",dir)

 return code
}
