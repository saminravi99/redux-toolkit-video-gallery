import axios from "../../utils/axios";

export const getVideos = async (tags, search, pageNumber) => {
    console.log(pageNumber);
    let queryString = "";

    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
        queryString += `&q=${search}`;
    }

    const response = await axios.get(
      `/videos/?${queryString}&_page=${pageNumber}&_limit=8`
    );

    return response.data;
};
