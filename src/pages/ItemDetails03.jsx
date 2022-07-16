import React, { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import img1 from '../assets/images/avatar/avt-wp.png';
import img2 from '../assets/images/avatar/avt-php.png';
import img3 from '../assets/images/avatar/avt-4.jpg';
import img4 from '../assets/images/avatar/avt-5.png';
import img5 from '../assets/images/avatar/avt-1.png';
import img6 from '../assets/images/avatar/rhc_logo.png';
import imgdetail1 from '../assets/images/box-item/images-item-details3.jpg';
import img66 from '../assets/images/avatar/avt-2.png';

const ItemDetails03 = () => {
  const [dataHistory] = useState([
    {
      img: img1,
      name: 'Wordpress',
    },
    {
      img: img66,
      name: 'CSS',
    },
    {
      img: img2,
      name: 'PHP',
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
      img: img3,
      name: 'JQuery',
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
                <h1 className="heading text-center">
                  Rockhills Church Details
                </h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>RHC</li>
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
                      <h2>Rockhills Church</h2>
                      <sub> Jan 2021 - Present </sub>
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
                                window.open(
                                  'https://www.myrockhillschurch.com/',
                                );
                              }}
                            >
                              myrockhillschurch.com
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
                    My responsibility at RHC, is to provide and implement unique
                    layout designs and update the website on a weekly basis.
                    Working in a team setting with Media team and Designer Team
                    collaborating similiar to SCRUM approach.
                  </p>
                  <div className="meta-item-details"></div>
                  <Link
                    to="/item-details-02"
                    onClick={() =>
                      window.open('https://www.myrockhillschurch.com/')
                    }
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

export default ItemDetails03;
