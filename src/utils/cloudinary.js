import { v2 as cloudinary } from "cloudinary";
import fs from "fs"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// File baana lete hain aagar hume sucessfully file mil gya 
// phir file ko attach kar denge aur baaki baadme usko unlink kr denge

// File uploading wala /

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // File has been uploaded successfully
        console.log("File is uploaded on cloudinary", response.url);
        // return response;
        fs.unlinkSync(localFilePath);
    }catch(error){
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

export const deleteFromCloudinary = async (imageUrl) => {
    try {
        if (!imageUrl) return null;
        
        // Extract public_id from the Cloudinary URL
        // URL format: https://res.cloudinary.com/<cloud>/image/upload/v123456/public_id.jpg
        const urlParts = imageUrl.split("/")
        const filenameWithExt = urlParts[urlParts.length - 1]  // "public_id.jpg"
        const publicId = filenameWithExt.split(".")[0]          // "public_id"
        
        const result = await cloudinary.uploader.destroy(publicId)
        return result
        
    } catch (error) {
        console.error("Error deleting image from Cloudinary:", error)
        return null
    }
}

export {
    uploadOnCloudinary,
    deleteFromCloudinary
}

// Jahan Jahan file upload ki jarurat padegi
// Wahan wahan multer ko upload kar denge