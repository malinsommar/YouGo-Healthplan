import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComp";
import PostComponent from "../components/PostComp";
import FooterComponent from "../components/FooterComp";
import posts from "../data/blogPosts";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

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
          <h1 id="blog-header-title">Blogg</h1>
          <h3 id="blog-header-sub-title">Inspiration, fakta och nyheter.</h3>
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
          <span>Tillbaka</span>
        </button>
        <button className="post-back-button-small" onClick={toggleView}>
          Tillbaka
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
        <div className="shareButtons">
          <FacebookShareButton
            url={shareUrl}
            quote={posts[currentPost].title + " - YouGo healthplan Blogg"}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={40} round />
          </FacebookShareButton>

          <FacebookMessengerShareButton
            url={shareUrl}
            appId="521270401588372"
            className="Demo__some-network__share-button"
          >
            <FacebookMessengerIcon size={40} round />
          </FacebookMessengerShareButton>

          <TwitterShareButton
            url={shareUrl}
            title={posts[currentPost].title + " - YouGo healthplan Blogg"}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>

          <LinkedinShareButton
            url={shareUrl}
            className="Demo__some-network__share-button"
          >
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
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
