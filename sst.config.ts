import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack";
import { Bucket, StackContext, Table } from "sst/constructs";

// Create an S3 bucket
const bucket = new Bucket(stack, "Uploads");



export default {
  config(_input) {
    return {
      name: "notes",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(StorageStack);
  },
} satisfies SSTConfig;