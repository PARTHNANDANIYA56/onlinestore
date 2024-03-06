import { storage } from './firebase';
import { ref } from 'firebase/storage'
import { uploadString } from 'firebase/storage'
import { v4 } from "uuid";

function convertImageToBase64(image) {
    const reader = new FileReader();
    return new Promise((resolve) => {
        reader.onloadend = () => {
            const base64String = reader.result;
            resolve(base64String);
        };
        reader.readAsDataURL(image);
    });
}

export const firebaseUpload = async (image, path) => {
    if (image) {
        const base64 = await convertImageToBase64(image);
        console.log(base64);
        const imagePath = `${path}/${image.name + v4()}`;
        const imageRef = ref(storage, imagePath);
        return new Promise(async (resolve) => {
            const upload = await uploadString(imageRef, base64, "data_url");
            resolve(upload.metadata.fullPath);
        });
    }
};
