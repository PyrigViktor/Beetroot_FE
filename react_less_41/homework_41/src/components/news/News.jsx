import React, { Component } from "react";

class NewsItem extends Component {
    render() {
        const { title, content } = this.props;
        return (
            <div className={"news-container"}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        );
    }
}


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsContent: [
                {
                    title: "News 1",
                    content: "News text 1",
                },
                {
                    title: "News 2",
                    content: "News text 2",
                },
                {
                    title: "News 3",
                    content: "News text 3",
                },
            ],
        };
    }

    render() {
        return (
            <div>
                {this.state.newsContent.map((item, index) => (
                    <NewsItem key={index} title={item.title} content={item.content} />
                ))}
            </div>
        );
    }
}

export default News;
