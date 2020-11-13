import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComp";
import PostComponent from "../components/PostComp";
import FooterComponent from "../components/FooterComp";
import posts from "../data/blogPosts";
import BlogTexts from "../data/textBlogPage.json"
import "../styling/blogg.css";

const BloggPage = () => {
  const [toggle, setToggle] = useState(true);
  const [currentPost, setCurrentPost] = useState();

  const shareUrl = "http://github.com";

  const toggleView = (postClicked) => {
    if (toggle) {
      setCurrentPost(postClicked);
      setToggle(false);
    } else setToggle(true);
  };

  const returnView = () => {
    if (toggle) {
      return bloggView();
    } else return postView();
  };

  const printBloggPosts = () => {
    return sortedPosts.map((item, index) => {
      return (
        <PostComponent
          toggle={() => toggleView(index)}
          title={item.title}
          image={item.image}
          date={formatDate(item.date)}
          key={index}
        />
      );
    });
  };
  const bloggView = () => {
    return (
      <div id="blogg-page">
        <div id="blog-header">
          <HeaderComponent />
          <h1 id="blog-header-title">{BlogTexts.pageTitle}</h1>
          <h3 id="blog-header-sub-title">{BlogTexts.pageSubTitle}</h3>
        </div>
        <div id="blogg-posts">{printBloggPosts()}</div>
        <FooterComponent />
      </div>
    );
  };

  const newLineText = (text) => {
    return text.split('\n').map(str => <p>{str}</p>);
  }

  const postView = () => {
    return (
      <div id="post-page">
        <HeaderComponent />
        <button className="post-back-button" onClick={toggleView}>
          <span>{BlogTexts.postBackButtonText}</span>
        </button>
        <button className="post-back-button-small" onClick={toggleView}>
        {BlogTexts.postBackButtonText}
        </button>
        <div id="post">
          <div>
            <img id="post-image" src={posts[currentPost].image} alt="post" />
            <p id="post-date">Datum: {formatDate(posts[currentPost].date)}</p>
          </div>
          <div id="title-text-div">
            <h1 id="post-title">{posts[currentPost].title}</h1>
            <p id="post-text">{newLineText(posts[currentPost].text)}</p>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  };

  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const sortedPosts = posts.sort((a, b) => b.date - a.date);

  return <div>{returnView()}</div>;
};

export default BloggPage;
