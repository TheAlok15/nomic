import express from 'express';
import { generateUploadURL } from '../controller/meeting.controller.js';

const router = express.Router();

router.post("/upload-url", generateUploadURL)

export default router;