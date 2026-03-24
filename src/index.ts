import { parseSDK } from "./ast/sdkParser";

console.log("POS AI starting...");

async function main(){

 console.log("Running SDK parser...");

 await parseSDK();

 console.log("Finished indexing SDK");

}

main();
