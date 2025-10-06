import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand} from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import { s3 } from "../utils/s3.js";

export const generateUploadURL = async (req, res) => {
  try {
    const { fileSize, fileType, fileName } = req.body;

    if (!fileName || !fileSize || !fileType) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    if (fileSize > 500 * 1024 * 1024) {
      return res.status(400).json({
        error: "File size exceeds the limit of 500MB",
      });
    }

    const extension = fileName.split(".").pop();
    const key = `uploads/${uuidv4()}.${extension}`;

    const command = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET,
      Key: key,
      ContentType: fileType,
      // ACL:"private",
    });

    const uploadURL = await getSignedUrl(s3, command, { expiresIn: 60 * 5 });

    res.json({
      uploadURL,
      key,
    });
  } catch (error) {
    console.error("Error generating upload URL", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};
