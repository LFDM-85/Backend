import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';
import * as dotenv from 'dotenv';

dotenv.config();
export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return v2.config({
      cloud_name: 'dp9h6rkbl',
      api_key: '826935283429225',
      api_secret: 'SbRPB6QR8kugfP4qCm-LQDRvcl0',
    });
  },
};
