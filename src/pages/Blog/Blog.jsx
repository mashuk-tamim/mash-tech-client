import { useContext, useEffect, useState } from "react";
import BlogCards from "../BlogCards/BlogCards";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../providers/ThemeProvider";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const { isDark } = useContext(ThemeContext);

    const location = useLocation();
    console.log(location);

    useEffect(() => {
        fetch("https://mash-tech-server.vercel.app/blogs")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
            });
    }, []);

    return (
        <div className="p-5">
            <h2 className="text-4xl text-center mb-3 border-b-2 border-gray-500 pb-1 w-1/3 md:w-1/4 mx-auto">
                Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {blogs?.map((blog) => (
                    <BlogCards blog={blog} key={blog._id}></BlogCards>
                ))}
            </div>
            <p
                className={`text-center mt-10 mb-5 ${
                    isDark ? "text-white" : "text-black"
                }`}
            >
                Want to write a blog?
                <Link
                    className={`${
                        isDark ? "text-white" : "text-black"
                    }text-slate-900 pl-1 underline`}
                    to="/addBlog"
                >
                    Click here
                </Link>
            </p>
        </div>
    );
};

export default Blog;
