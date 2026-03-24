
import { PreEndTransactionTrigger } from "PosApi/Extend/Triggers/TransactionTriggers";
import { IPreEndTransactionTriggerOptions } from "PosApi/Extend/Triggers/TransactionTriggers";

export default class CustomTrigger extends PreEndTransactionTrigger {

 execute(options: IPreEndTransactionTriggerOptions): Promise<void>{

  console.log("AI generated trigger")

  return Promise.resolve()

 }

}
