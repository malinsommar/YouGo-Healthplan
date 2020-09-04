import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComp";
import PostComponent from "../components/PostComp";
import FooterComponent from "../components/FooterComp";
import "../styling/blogg.css";

const BloggPage = () => {
  const [toggle, setToggle] = useState(true);
  const [currentPost, setCurrentPost] = useState();

  const posts = [
    {
      title: "Hälsa",
      sortDate: new Date("2020-07-11"),
      date: "2020-07-11",
      image:
        "https://images.pexels.com/photos/167300/pexels-photo-167300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      text:
        "Bra med bra hälsa, aspodin po asomd kpokp, dapdapos dasjasalsjdk sdjkasdhg lkfddskj söldjvdskjgndföd dsdja ls dkldsa, hugvh asdasl kdfa skj dksjfsd aslkjd ilkasjdjhefhlsajd jkhasd",
    },
    {
      title: "Jobba bra",
      sortDate: new Date("2020-05-10"),
      date: "2020-05-10",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/heart-healthy-food-1580231690.jpg",
      text: "Bra joi hu  hu  hälsa",
    },
    {
      title: "asdadsd",
      sortDate: new Date("2020-01-28"),
      date: "2020-01-28",
      image:
        "https://chowhound1.cbsistatic.com/thumbnail/800/0/chowhound1.cbsistatic.com/blog-media/2019/01/easy-healthy-diet-tips-chowhound.jpg",
      text: "Brdsaljd  kasd ka d",
    },
    {
      title: "Jasdjalaido i",
      sortDate: new Date("2020-10-23"),
      date: "2020-10-23",
      image:
        "https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      text: "asdi oj sadio a sdd",
    },
    {
      title: "Jaido i",
      sortDate: new Date("2020-10-23"),
      date: "2020-10-23",
      image:
        "https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg",
      text: "asdi oj sadio a sdd",
    },
    {
      title: "Jaido is",
      sortDate: new Date("2020-05-13"),
      date: "2020-05-13",
      image:
        "https://muskelcentrum.se/wp-content/uploads/2019/09/runner-1080x675.jpg",
      text: "asdi oj sadio a sdd",
    },
    {
      title: "Jaido i",
      sortDate: new Date("2019-02-11"),
      date: "2019-02-11",
      image:
        "https://kurera.r.worldssl.net/wp-content/uploads/2020/03/artikel_tranahemma-580x402.jpg",
      text: "asdi oj sadio a sdd",
    },
  ];

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
          date={item.date}
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

  const postView = () => {
    return (
      <div id="post-page">
        <HeaderComponent />
        <button id="post-back-button" onClick={toggleView}>
          Tillbaka
        </button>
        <div id="post">
          <div>
            <img id="post-image" src={posts[currentPost].image} />
            <p id="post-date">Datum: {posts[currentPost].date}</p>
          </div>
          <div>
            <h1 id="post-title">{posts[currentPost].title}</h1>
            <p id="post-text">{posts[currentPost].text}</p>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  };

  const sortedPosts = posts.sort((a, b) => b.sortDate - a.sortDate);

  return <div>{returnView()}</div>;
};

export default BloggPage;
