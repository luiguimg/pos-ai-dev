
import { PreEndTransactionTrigger } from "PosApi/Extend/Triggers/TransactionTriggers";
import { IPreEndTransactionTriggerOptions } from "PosApi/Extend/Triggers/TransactionTriggers";

export default class AutoTrigger extends PreEndTransactionTrigger {

 execute(options: IPreEndTransactionTriggerOptions): Promise<void>{

  console.log("Generated from GitHub Issue: Add validation before completing transaction")

  return Promise.resolve()

 }

}
