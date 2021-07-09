import React from 'react'
import allBlogs from '../Components/allBlogs';
import Title from '../Components/Title';
import { NavLink } from 'react-router-dom'


function BlogPage() {
    return (
        <div>
            <div className="b-title">
                <Title title={'Recent Posts'} span={'Recent Posts'} />
            </div>
            <div className="BlogPage">
                {
                    allBlogs.map((blog) => {
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <NavLink to={blog.link} className="blog-link">
                                    <img src={blog.image} alt="" />
                                </NavLink>
                                <a href={blog.link} className="blog-link"> {blog.title} </a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default BlogPage
