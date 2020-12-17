import axios from "axios";

const KEY = "AIzaSyAMRKTRe8ZFdYNGHn-4CNTWtWqFOLEEciA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippit", type: "video", maxResults: 5, key: KEY },
});
