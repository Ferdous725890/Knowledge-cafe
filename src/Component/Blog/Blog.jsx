import { useEffect } from "react";
import { useState } from "react";
import BlogOne from "../BlogOne/BlogOne";

const Blog = () => {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className="w-2/3">
            <h1 className="4xl">Blogs {blog.length} </h1>
          {
            blog.map(blogone => <BlogOne 
                blogone={blogone}
                ></BlogOne>)
                
          } 
          
        </div>
    );
};

export default Blog;