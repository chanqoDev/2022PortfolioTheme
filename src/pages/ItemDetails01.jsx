import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
// import Countdown from 'react-countdown';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import img1 from '../assets/images/avatar/avt-1.png'; // HTML5
import img2 from '../assets/images/avatar/avt-4.jpg';
import img3 from '../assets/images/avatar/avt-9.png'; // material UI
import img4 from '../assets/images/avatar/avt-5.jpg';
import img5 from '../assets/images/avatar/avt-5.png';
import img6 from '../assets/images/avatar/avt-3.png'; // github
import img7 from '../assets/images/avatar/avt-2.png'; // css
import img11 from '../assets/images/avatar/avt-react.png'; // css
import img13 from '../assets/images/avatar/avt-13.png'; // css

import imgdetail1 from '../assets/images/box-item/images-item-details.jpg';
import imgYarn from '../assets/images/avatar/avt-8.png'; // yarn

const ItemDetails01 = () => {
  const [dataHistory] = useState([
    {
      img: img11,
      name: 'React',
    },
    {
      img: img3,
      name: 'Material UI',
    },
    {
      img: img5,
      name: 'Javascript',
    },
    {
      img: imgYarn,
      name: 'Yarn',
    },
    {
      img: img1,
      name: 'HTML & HTML5',
    },

    {
      img: img7,
      name: 'CSS & CSS3',
    },
    {
      img: img13,
      //   name: 'NPM',
    },
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
                  <img src={imgdetail1} alt="chrisdev Portfolio" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12">
              <div className="content-right">
                <div className="sc-item-details">
                  <h2 className="style2">Fullstack Developer Portfolio 2022</h2>
                  <div className="meta-item">
                    <div className="left">
                      <span className="viewed eye">766</span>
                      {/* <span
                        to="/login"
                        className="liked heart wishlist-button mg-l-8"
                      >
                        <span className="number-like">100</span>
                      </span> */}
                    </div>
                    <div className="right">
                      <Link to="#" className="share"></Link>
                      {/* <Link to="#" className="option"></Link> */}
                    </div>
                  </div>
                  <div className="client-infor sc-card-product">
                    <div className="meta-info">
                      <div className="author">
                        <div className="avatar">
                          <img src={img6} alt="Axies" />
                        </div>
                        <div className="info">
                          <span>Github</span>
                          <h6>
                            {' '}
                            <Link
                              to="/item-details-01"
                              onClick={() => {
                                window.open(
                                  'https://github.com/chanqoDev',
                                  '_blank',
                                );
                              }}
                            >
                              @chanqoDev
                            </Link>{' '}
                          </h6>
                        </div>
                      </div>
                    </div>
                    {/* <div className="meta-info">
                      <div className="author">
                        <div className="avatar">
                          <img src={img7} alt="chrisdev" />
                        </div>
                        <div className="info">
                          <span>Create By</span>
                          <h6>
                            {' '}
                            <Link to="/author-02">Freddie Carpenter</Link>{' '}
                          </h6>
                        </div>
                      </div>
                    </div> */}
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
                    speed property to change autoplay speed of the logos giving
                    it a nice scoll-flow. Styled Components with Material-UI an
                    CSS, CSS3.
                  </p>

                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="flat-tabs themesflat-tabs">
                    <Tabs>
                      <TabList>
                        <Tab>Technologies used for this project</Tab>
                        {/* <Tab>Info</Tab> */}
                        {/* <Tab>Provenance</Tab> */}
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
                                      {/* <div className="badge"></div> */}
                                    </div>
                                    <div className="author-infor">
                                      <div className="name">
                                        <h6>
                                          <Link to="/author-02">
                                            {item.name}{' '}
                                          </Link>
                                        </h6>{' '}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
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
