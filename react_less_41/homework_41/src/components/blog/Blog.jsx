import React, { Component } from "react";

class BlogRow extends Component {
    render() {
        const { title, content } = this.props;
        return (
            <div className={"blog-container"}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        );
    }
}

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogContent: [
                {
                    title: "Title 1",
                    content: "Some content 1",
                },
                {
                    title: "Title 2",
                    content: "Some content 2",
                },
                {
                    title: "Title 3",
                    content: "Some content 3",
                },
                {
                    title: "Title 4",
                    content: "Some content 4",
                },
            ],
        };
    }

    render() {
        return (
            <div>
                {this.state.blogContent.map((row, index) => (
                    <BlogRow key={index} title={row.title} content={row.content} />
                ))}
            </div>
        );
    }
}

export default Blog;