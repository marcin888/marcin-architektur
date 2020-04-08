import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article class="card ">
    <Link to={post.frontmatter.path}>
      <div class="card-image-wrapper">
        <div>
          {!!post.frontmatter.thumbnail && (
            <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
          )}
        </div>
      </div>
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
    </header>
  </article>
)
export default PostLink