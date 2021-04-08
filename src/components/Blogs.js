import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../actions/blogActions";
import Fade from "react-reveal/Fade";

class Blogs extends Component {
  componentDidMount() {
    this.props.fetchBlogs();
  }
  render() {
    return (
      <div>
        <Fade bottom cascade>
          {!this.props.blogs ? (
            <div>Loading...</div>
          ) : (

            <ul className="">
              {this.props.blogs.map((blog) => (
                <li key={blog._id}>
                  <div>
                    <a href={"#" + blog._id}>
                      <img src={blog.image} alt={blog.title}></img>
                      <p>{blog.title}</p>
                    </a>
                  </div>
                </li>
              ))}
            </ul>

          )}
        </Fade>
</div>
    );
  }
}

export default connect((state) => ({blogs: state.blogs.blogs}), { fetchBlogs })(
  Blogs
);
