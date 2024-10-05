import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Trash, FilePenLine } from "lucide-react";

function BlogDetails() {
  const { id } = useParams();

  const {
    data: blog,
    isPending,
    error,
  } = useFetch(`/api/vlogsite/vlogs/` + id);

  const navigation = useNavigate();

  const handleClick = () => {
    fetch(`/api/vlogsite/vlogs/` + blog._id, {
      method: "DELETE",
    }).then(() => {
      navigation("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loding....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{`written by ${blog.author}`}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>
            {" "}
            <Trash />
            <FilePenLine />
          </button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
