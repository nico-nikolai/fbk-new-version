import { FETCH_BLOGS } from "../types"

export const fetchBlogs = () => async (dispatch) => {
    const res = await fetch("/api/blogs");
    const data = await res.json();
    console.log(data);
    dispatch({
      type: FETCH_BLOGS,
      payload: data,
    });
  };