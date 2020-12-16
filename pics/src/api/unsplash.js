import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID i45stSm4kJRUj7C6OZ4KOjcUgnP7rh62bUz9DT4LxnE",
  },
});
