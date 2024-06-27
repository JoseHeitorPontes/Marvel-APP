import axios from "axios";
import md5 from "md5";

const timestamp = Date.now();
const privateKey = "904aeab28dc7cfb46443c567fd94184430a8db49";
const publicKey = "2c23e58831b6703bbc5d6f11e6872549";

export const api = axios.create({
    baseURL: "http://gateway.marvel.com/v1/public",
    params: {
        ts: timestamp,
        apikey: publicKey,
        hash: md5(timestamp + privateKey + publicKey)
    },
});
