import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';

const upload = multer({
  storage: multer.diskStorage({
    destination: "public/images", // Save files in the public/images folder
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async(request:Request) =>{
    upload.single('file')(req, res, async (err) => {
      if (err) {
        return new Response("Failed image add", { status: 500 })
      }
      const file = req.file;
      console.log("eeee", file);
      
      return new Response("image added succesfully", { status: 200 })
    });
}