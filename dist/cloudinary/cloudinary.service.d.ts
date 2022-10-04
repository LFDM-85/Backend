/// <reference types="multer" />
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
export declare class CloudinaryService {
    uploadfile(file: Express.Multer.File): Promise<UploadApiResponse | UploadApiErrorResponse>;
}
