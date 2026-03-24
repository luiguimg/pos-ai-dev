export interface IPreEndTransactionTriggerOptions {}

export class PreEndTransactionTrigger {

 execute(options: IPreEndTransactionTriggerOptions): Promise<void> {
  return Promise.resolve()
 }

}
