declare module "PosApi/Extend/Triggers/TransactionTriggers" {

 export interface IPreEndTransactionTriggerOptions {}

 export class PreEndTransactionTrigger {

  public execute(options: IPreEndTransactionTriggerOptions): Promise<void>

 }

}
