import React from "react";

import { Link } from "react-router-dom";

function BlogList({ blogs, title }) {
  // const blogs = props.blogs;
  // const title = props.title;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog._id}>
          <Link to={`/api/vlogsite/vlogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
