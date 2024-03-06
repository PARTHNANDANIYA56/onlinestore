import { getStorage, getDownloadURL, ref } from 'firebase/storage'

export const getImageViaUrl = async (url) => {
    const storage = getStorage();
    return new Promise((resolve) => {
        getDownloadURL(ref(storage, url))
            .then((url) => {
                const xhr = new XMLHttpRequest();
                xhr.responseType = "blob";
                xhr.onload = (event) => {
                    const blob = xhr.response;
                };
                xhr.open("GET", url);
                xhr.send();
                resolve(url);
            })
            .catch((error) => {
                return new Response(error);
            });
    });
}