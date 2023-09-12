import './assets/styles/styles.scss';
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Blog from "./components/blog/Blog";
import News from "./components/news/News";
import {Component} from "react";
import {dividerClasses} from "@mui/material";



class App extends Component {
    render() {
        return (
            <div className={"App"}>
            <div className={"Header"}>
                <Header/>
            </div>
            <div className={"Content"}>
                <Content/>
            </div>
                <div className={"container-content"}>


                <div className={"sidebar"}>
                    <Blog/>
                </div>
                <div className={"main-content"}>
                    <News/>
                </div>
                </div>
            </div>
        )
    }
}

/*
function App() {

    return (
        <>
        <Header/>
        <Content/>
            <Blog/>
            <News/>
        </>
    )

}
*/

export default App;
