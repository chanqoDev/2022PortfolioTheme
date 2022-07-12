import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import liveAuctionData from '../assets/fake-data/data-live-auction';
// import LiveAuction from '../components/layouts/LiveAuction';
import img1 from '../assets/images/avatar/avt-3.jpg'; // react
import img2 from '../assets/images/avatar/avt-4.jpg'; // css
import img3 from '../assets/images/avatar/avt-1.jpg'; // material UI
import img4 from '../assets/images/avatar/avt-5.jpg';
import img5 from '../assets/images/avatar/avt-7.jpg';
import img6 from '../assets/images/avatar/avt-8.jpg';
import img7 from '../assets/images/avatar/avt-2.jpg';
import imgdetail1 from '../assets/images/box-item/images-item-details.jpg';

const ItemDetails01 = () => {
  const [dataHistory] = useState([
    {
      img: img3,
      name: 'Mason Woodward',
      time: '8 hours ago',
      price: '4.89 ETH',
      priceChange: '$12.246',
    },
    {
      img: img1,
      name: 'Mason Woodward',
      time: 'at 06/10/2021, 3:20 AM',
      price: '4.89 ETH',
      priceChange: '$12.246',
    },
    {
      img: img2,
      name: 'Mason Woodward',
      time: '8 hours ago',
      price: '4.89 ETH',
      priceChange: '$12.246',
    },
    // {
    //   img: img4,
    //   name: 'Mason Woodward',
    //   time: '8 hours ago',
    //   price: '4.89 ETH',
    //   priceChange: '$12.246',
    // },
    // {
    //   img: img5,
    //   name: 'Mason Woodward',
    //   time: '8 hours ago',
    //   price: '4.89 ETH',
    //   priceChange: '$12.246',
    // },
    // {
    //   img: img6,
    //   name: 'Mason Woodward',
    //   time: '8 hours ago',
    //   price: '4.89 ETH',
    //   priceChange: '$12.246',
    // },
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
                <h1 className="heading text-center"> Project Details</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Explore</Link>
                  </li>
                  <li>Project Details Portfolio22</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="tf-section tf-item-details">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-xl-6 col-md-12">
              <div className="content-left">
                <div className="media">
                  <img src={imgdetail1} alt="Axies" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="content-right">
                <div className="sc-item-details">
                  <h2 className="style2">2022 Fullstack Developer Portfolio</h2>
                  <div className="meta-item">
                    <div className="left">
                      <span className="viewed eye">766</span>
                      <span
                        to="/login"
                        className="liked heart wishlist-button mg-l-8"
                      >
                        <span className="number-like">100</span>
                      </span>
                    </div>
                    <div className="right">
                      <Link to="#" className="share"></Link>
                      <Link to="#" className="option"></Link>
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
                            <Link to="/author-02">Ralph Garraway</Link>{' '}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="meta-info">
                      <div className="author">
                        <div className="avatar">
                          <img src={img7} alt="Axies" />
                        </div>
                        <div className="info">
                          <span>Create By</span>
                          <h6>
                            {' '}
                            <Link to="/author-02">Freddie Carpenter</Link>{' '}
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
                    This Project was build using React, Javascript, JQuery,
                    ReactRouterDOM, with Swiper API functionality for the custom
                    sliders components, We also added the option to toggle from
                    dark mode to light mode. One of my favorite part of this
                    build was the popular slider with the logos, where I added a
                    speed property to change autoplay speed of the logos.
                    Project was also styled with Material-UI an CSS, CSS3.
                  </p>
                  {/* {/* <div className="meta-item-details style2"> */}
                  <div className="item meta-price">
                    {/* <span className="heading">Current Bid</span>
                      <div className="price">
                        <div className="price-box">
                          <h5> 4.89 ETH</h5>
                          <span>= $12.246</span>
                        </div>
                      </div>
                    </div>  */}
                    {/* <div className="item count-down">
                      <span className="heading style-2"></span>
                      <Countdown date={Date.now() + 5000}>
                        <span>🎉You are patient</span>
                      </Countdown>
                    </div> */}
                  </div>
                  {/* <Link
                    to="/wallet-connect"
                    className="sc-button loadmore style fl-button pri-3"
                  >
                    <span>Visit Github Repo's</span>
                  </Link> */}
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="flat-tabs themesflat-tabs">
                    <Tabs>
                      <TabList>
                        <Tab>Bid History</Tab>
                        <Tab>Info</Tab>
                        <Tab>Provenance</Tab>
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
                                          alt="Axies"
                                          className="avatar"
                                        />
                                      </Link>
                                      <div className="badge"></div>
                                    </div>
                                    <div className="author-infor">
                                      <div className="name">
                                        <h6>
                                          <Link to="/author-02">
                                            {item.name}{' '}
                                          </Link>
                                        </h6>{' '}
                                        <span> place a bid</span>
                                      </div>
                                      <span className="time">{item.time}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="price">
                                  <h5>{item.price}</h5>
                                  <span>= {item.priceChange}</span>
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
      <Footer />
    </div>
  );
};

export default ItemDetails01;
