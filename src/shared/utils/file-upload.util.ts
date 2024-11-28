import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

export const generateFileName = (originalName: string): string => {
  const fileExtension = extname(originalName);
  const uniqueName = uuidv4();
  return `${uniqueName}${fileExtension}`;
};

export const fileFilter = (req, file, callback) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error('Unsupported file type'), false);
  }
};
