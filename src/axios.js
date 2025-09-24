import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-migk7jegoq-uc.a.run.app", // THE API (cloud function) URL
});

export default instance;
