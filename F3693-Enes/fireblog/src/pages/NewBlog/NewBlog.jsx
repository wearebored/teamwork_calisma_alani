
import { NewBlogCon } from "./Newblog-styled";

function NewBlog() {
  return (
    <NewBlogCon>
      <img src="images/blok.png" alt="" />
      <h2>New Blog</h2>
      <label htmlFor="title">Title</label>
      <input placeholder="Title" id="title" type="text" />
      <label htmlFor="url">Image URL</label>
      <input placeholder="Image URL" id="url" type="text" />
      <label htmlFor="content">Content</label>
      <textarea placeholder="Content" name="content" id="content"></textarea>
      <button>SUBMIT</button>
    </NewBlogCon>
  );
}

export default NewBlog;
