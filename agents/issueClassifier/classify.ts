export function classifyIssue(text:string){

 text = text.toLowerCase()

 if(text.includes("before completing transaction"))
  return "PreEndTransactionTrigger"

 if(text.includes("add button"))
  return "ExtensionCommand"

 if(text.includes("custom view"))
  return "ViewController"

 if(text.includes("validate cart"))
  return "CartTrigger"

 return "Unknown"

}
