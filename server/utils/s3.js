import dotenv from "dotenv";
dotenv.config();
import { S3Client } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
  region:process.env.AWS_REGION,
  credentials:{
    accessKeyId:process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  }
})
console.log("AWS REGION:", process.env.AWS_REGION);
console.log("AWS KEY:", process.env.AWS_ACCESS_KEY_ID ? "aa gya londe" : "gum hu mai kahi");
