import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Updateyazma from "../../helpers/Updateveri/Updateyazma";
import { UpdateCon } from "./update-styled";

function UpdateBlog() {
  const { state } = useLocation();
  // ----------------------------
  const [title, setTitle] = useState(state.data.title);
  const [url, setUrl] = useState(state.data.url);
  const [content, setContent] = useState(state.data.content);
  // ----------------------------
  const navigate = useNavigate();
  // ------------------------------
  console.log(state);
  return (
    <UpdateCon>
      <img src={url} alt={url} />
      <h2>Update Blog</h2>
      <label htmlFor="title">Title</label>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        id="title"
        type="text"
      />
      <label htmlFor="url">Image URL</label>
      <input
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        value={url}
        id="url"
        type="text"
      />
      <label htmlFor="content">Content</label>
      <textarea
        onChange={(e) => {
          setContent(e.target.value);
        }}
        value={content}
        name="content"
        id="content"
      ></textarea>
      <button
        onClick={() => {
          Updateyazma({ url, content, title, id: state.state });
          navigate("/");
        }}
      >
        UPDATE
      </button>
    </UpdateCon>
  );
}

export default UpdateBlog;
