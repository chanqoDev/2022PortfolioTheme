import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
// import Countdown from 'react-countdown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import liveAuctionData from '../assets/fake-data/data-live-auction';
// import LiveAuction from '../components/layouts/LiveAuction';
import img1 from '../assets/images/avatar/avt-wp.png';
import img2 from '../assets/images/avatar/avt-php.png';
import img3 from '../assets/images/avatar/avt-4.jpg';
import img4 from '../assets/images/avatar/avt-5.png';
import img5 from '../assets/images/avatar/avt-1.png';
import img6 from '../assets/images/avatar/oftv_logo.png';
import img7 from '../assets/images/avatar/avt-MySql.png';
import imgdetail1 from '../assets/images/box-item/images-item-details2.jpg';
import img66 from '../assets/images/avatar/avt-2.png';

const ItemDetails02 = () => {
  const [dataHistory] = useState([
    {
      img: img1,
      name: 'Wordpress',
    },
    {
      img: img2,
      name: 'PHP',
      //   time: 'at 06/10/2021, 3:20 AM',
      //   price: '4.89 ETH',
      //   priceChange: '$12.246',
    },
    {
      img: img7,
      name: 'MySQL',
    },
    {
      img: img3,
      name: 'JQuery',
    },
    {
      img: img4,
      name: 'JS',
    },
    {
      img: img5,
      name: 'HTML5',
    },
    {
      img: img66,
      name: 'CSS',
    },
  ]);
  return (
    <div className="item-details">
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">OnlyFans.TV</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Explore</Link>
                  </li>
                  <li>oftv Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-section tf-item-details style-2">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="content-left">
                <div className="media">
                  <img src={imgdetail1} alt="otfv" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="content-right">
                <div className="sc-item-details">
                  <div className="meta-item">
                    <div className="left">
                      <h2>OFTV Goyk Productions</h2>
                    </div>
                  </div>
                  <div className="client-infor sc-card-product">
                    <div className="meta-info">
                      <div className="author">
                        <div className="avatar">
                          <img src={img6} alt="Axies" />
                        </div>
                        <div className="info">
                          <span>Owned By</span>
                          <h6>
                            {' '}
                            <Link
                              to="/item-details-02"
                              onClick={() => {
                                window.open('http://goykpro.com/index.html');
                              }}
                            >
                              GOYK Productions
                            </Link>{' '}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    style={{
                      'font-size': '1.6rem',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    My role at OFTV was to focus on user-centered experience
                    Design. Utilizing best practices in Object Oriented
                    Programming(OOP) such as MVC while developing a CRUD RESTAPI
                    application. Wordpress custom Hooks and Functions with PHP8
                    and HTML. Fetching data form API and MySQL Database to
                    loading the images Asynchronously "Lazy loading" and
                    improving rending speed of the overall site. Lastly, I
                    worked with a UXDesigner and Backend Engineer in order to
                    create a robust swiper hero slider and redesign the site
                    style with over 1 Million+ monthly users.
                  </p>
                  <div className="meta-item-details"></div>
                  <Link
                    to="/item-details-02"
                    onClick={() => window.open('https://of.tv/')}
                    className="sc-button loadmore style fl-button pri-3"
                  >
                    <span>Visit Site</span>
                  </Link>
                  <div className="flat-tabs themesflat-tabs">
                    <Tabs>
                      <TabList>
                        <Tab>Technologies Stacks</Tab>
                      </TabList>

                      <TabPanel>
                        <ul className="bid-history-list">
                          {dataHistory.map((item, index) => (
                            <li key={index} item={item}>
                              <div className="content">
                                <div className="client">
                                  <div className="sc-author-box style-2">
                                    <div className="author-avatar">
                                      <Link to="#">
                                        <img
                                          src={item.img}
                                          alt="Logos"
                                          className="avatar"
                                        />
                                      </Link>
                                      {/* <div className="badge"></div> */}
                                    </div>
                                    <div className="author-infor">
                                      <div className="name">
                                        <h6>
                                          <Link to="/item-details-02">
                                            {item.name}{' '}
                                          </Link>
                                        </h6>{' '}
                                        {/* <span> place a bid</span> */}
                                      </div>
                                      <span className="time">{item.time}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="price">
                                  <h5>{item.price}</h5>
                                  <span>{item.priceChange}</span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPanel>
                      <TabPanel>
                        <ul className="bid-history-list">
                          <li>
                            <div className="content">
                              <div className="client">
                                <div className="sc-author-box style-2">
                                  <div className="author-avatar">
                                    <Link to="#">
                                      <img
                                        src={img1}
                                        alt="Axies"
                                        className="avatar"
                                      />
                                    </Link>
                                    <div className="badge"></div>
                                  </div>
                                  <div className="author-infor">
                                    <div className="name">
                                      <h6>
                                        {' '}
                                        <Link to="/author-02">
                                          Mason Woodward{' '}
                                        </Link>
                                      </h6>{' '}
                                      <span> place a bid</span>
                                    </div>
                                    <span className="time">8 hours ago</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </TabPanel>
                      <TabPanel>
                        <div className="provenance">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                          </p>
                        </div>
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <LiveAuction data={liveAuctionData} /> */}
      {''} <Footer />
    </div>
  );
};

export default ItemDetails02;
