import { parseSDK } from "./ast/sdkParser";

async function main() {

 console.log("Starting SDK indexing process...");

 try {

  await parseSDK();

  console.log("SDK indexing completed");

 } catch (error) {

  console.error("Error indexing SDK:", error);

 }

}

main();
