import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
    cloud_name:"dh07c38b0",
    api_key:"662959118166549",
    api_secret:"h3DLzDKmMl64VJCjgGq-PIL7roQ"
})
export const uploadImage = async filePath => {
    
    return await cloudinary.uploader.upload(filePath,
        {
            folder:'wolves-products'
        })
}