import React from 'react'

function BlogItemPage() {
    return (
        <div>
            <div className="ImageSection">
                <div className="about-info">
                    <h1 className="blog-item-title">My first blog</h1>
                    <p>
                        Hello there, welcome to my first blog! Well, I don't really do blogs, I just made this to see how hard making a blog system
                        would be. Turns out, it's pretty simple! Anyways, while you're here let me talk about how I created this website.
                    </p> <br/>
                    <p>
                        I originally wanted to create a react app since it seems like the MERN stack is all the crave these days.
                        I had some trouble thinking of an app idea until
                        I realized this was the perfect oppurtunity to learn the basics of react while building my own website. 
                    </p><br/>
                    <p>
                        This website was built using React.js and SCSS and deployed using Vercel. You can find the GitHub repo
                        for this site in the 'Portfolio' section.
                    </p><br/><br/>
                    <p>- Kyle Huynh</p>

                </div>
            </div>
        </div>
    )
}

export default BlogItemPage
