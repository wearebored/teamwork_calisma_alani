import { UpdateCon } from "./update-styled";

function UpdateBlog() {
  return (
    <UpdateCon>
        <img src="" alt="" />
        <h2>Update  Blog</h2>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />
        <label htmlFor="url">Image URL</label>
        <input id="url" type="text" />
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" ></textarea>
        <button>UPDATE</button>
    </UpdateCon>
  )
}

export default UpdateBlog;
