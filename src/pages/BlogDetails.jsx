import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/box-item/icon1-recont-post.png';
// import img2 from '../assets/images/box-item/icon2-recont-post.jpg';
// import img3 from '../assets/images/box-item/icon3-recont-post.jpg';
// import img4 from '../assets/images/box-item/icon4-recont-post.jpg';
import imgblog1 from '../assets/images/blog/thumb-7.jpg';
import imgblog2 from '../assets/images/blog/thumb-6.jpg';
import imgblogdetail1 from '../assets/images/blog/thumb1_details.jpg';
import imgblogdetail2 from '../assets/images/blog/thumb2_details.jpg';

const BlogDetails = () => {
  const [dataRecent] = useState([
    {
      img: img1,
      title: 'How to customize your Github README profile',
      text: 'Make your github portfolio standout.',
      time: 'Aug 7, 2021',
    },
    {
      img: img1,
      title: 'Challenge: Two sum Algorithm',
      text: 'Solve an common challenge in JS.',
      time: 'Feb 3, 2022',
    },
    {
      img: img1,
      title: 'Validate Sequence',
      text: '',
      time: 'July 10, 2021',
    },
    {
      img: img1,
      title: 'Smallest Absolute Difference',
      text: 'Lorem ipsum dolor sit amer....',
      time: 'Jun 10, 2021',
    },
    {
      img: img1,
      title: 'Sorted Squared Array',
      text: 'Multiple solutions',
      time: 'May 10, 2022',
    },
  ]);
  const [dataTags] = useState([
    {
      name: 'Data Structures',
    },
    {
      name: 'Algorithms',
    },
    {
      name: 'Time Complexity',
    },
    {
      name: 'Javascript',
    },
  ]);
  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">Blog Details</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Community</Link>
                  </li>
                  <li>Blog Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-section post-details">
        <div className="themesflat-container">
          <div className="wrap-flex-box style">
            <div className="post">
              <div className="inner-content center">
                <h2 className="title-post">
                  Handy Dandy Developer Blog videos
                </h2>
                <div className="divider"></div>
                <div className="meta-post flex mg-bt-31">
                  <div className="box">
                    <div className="inner">
                      <h6 className="desc">ALGORITHMS INTERVIEW Q's</h6>
                      <p>Javascript Edition</p>
                    </div>
                  </div>
                  <div className="box left">
                    <div className="inner boder pad-r-50">
                      <h6 className="desc">WRITER</h6>
                      <p>ChrsiTian</p>
                    </div>
                    <div className="inner mg-l-39 mg-r-1">
                      <h6 className="desc">DATE</h6>
                      <p>2022</p>
                    </div>
                  </div>
                </div>
                <div className="image">
                  <img src={imgblog1} alt="Axies" />
                </div>
                <div className="inner-post mg-t-40">
                  <h3 className="heading mg-bt-16">
                    What is the most fun thing to becoming as a Fullstack
                    Developer?
                  </h3>
                  <p className="mg-bt-24">
                    I enjoy making Algo videos on youtube because it helps
                    others and it has also helped me get instant feedback and
                    improves my Technical communication and problem solving
                    skills.
                  </p>
                  <div className="image-box">
                    <img src={imgblogdetail1} alt="Axies" />
                    <img src={imgblogdetail2} alt="Axies" />
                  </div>
                </div>
                <div className="inner-post mg-t-22">
                  <h3 className="heading mg-bt-16">
                    How is your daily routine?
                  </h3>
                  <p className="mg-bt-24">
                    In This blog / youtube series what I post are Javascript
                    challenges from many sources such as leetCode,
                    AlgoExpert.io, and other sources. I do my best to demistify
                    and break down challenges to simple solutions. If you have
                    any Challenges you would like for me to work on, please
                    email me.
                  </p>
                  <div className="image">
                    <img src={imgblog2} alt="Axies" />
                  </div>
                </div>
                <div className="inner-post mg-t-24">
                  <Link
                    to=""
                    onClick={() => {
                      window.open(
                        'https://www.youtube.com/channel/UCaHXZcSmcbPZiRII8KclXag',
                        '_new',
                      );
                    }}
                  >
                    <h3 className="heading mg-bt-16">
                      Videos available on Youtube
                    </h3>
                  </Link>
                  {/* <p>Middle Post Heading</p> */}
                  <p>
                    {' '}
                    This is only for entertain and learning purposes. Please
                    visit youtube Channel for more videos{' '}
                  </p>
                  <p className="mg-bt-22"></p>
                </div>
                <div className="sc-widget style-1">
                  <div className="widget widget-tag style-2">
                    <h4 className="title-widget">Tags</h4>
                    <ul>
                      <li>
                        <Link to="#">Data Structures</Link>
                      </li>
                      <li>
                        <Link to="#">Algorithms</Link>
                      </li>
                      <li>
                        <Link to="#">Time Complexity</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget-social style-2">
                    <h4 className="title-widget">Share:</h4>
                    <ul>
                      <li>
                        <Link to="#" className="icon-fl-facebook"></Link>
                      </li>
                      <li className="style-2">
                        <Link to="#" className="icon-fl-coolicon"></Link>
                      </li>
                      <li className="mgr-none">
                        <Link to="#" className="icon-fl-mess"></Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="divider d2"></div>
              </div>
            </div>
            <div className="side-bar details">
              <div className="widget widget-recent-post mg-bt-43">
                <h3 className="title-widget mg-bt-23">Recent Post</h3>
                <ul>
                  {dataRecent.map((item, index) => (
                    <li key={index} className="box-recent-post">
                      <div className="box-feature">
                        <Link to="#">
                          <img src={item.img} alt="Axies" />
                        </Link>
                      </div>
                      <div className="box-content">
                        <Link to="#" className="title-recent-post">
                          {item.title}
                        </Link>
                        <span>
                          <span className="sub-recent-post">{item.text}</span>
                          <Link to="#" className="day-recent-post">
                            {item.time}
                          </Link>
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="widget widget-tag style-1">
                <h3 className="title-widget mg-bt-23">Popular Tag</h3>
                <ul>
                  {dataTags.map((item, index) => (
                    <li key={index}>
                      <Link to="#" className="box-widget-tag">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default BlogDetails;
