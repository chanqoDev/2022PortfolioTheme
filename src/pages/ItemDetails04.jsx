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
import img6 from '../assets/images/avatar/SCHC_logo.png';
import imgdetail1 from '../assets/images/box-item/images-item-details4.jpg';
import img66 from '../assets/images/avatar/avt-2.png';

const ItemDetails04 = () => {
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
                <h1 className="heading text-center">SoCal Health Center</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li>SCHC Chiropractor</li>
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
                      <h2>Dr.Zubin -Irvine Chiropractor</h2>
                      <sub> Jan 2017 - Dec 2017 </sub>
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
                                  'https://www.irvinechiropractor.com/',
                                );
                              }}
                            >
                              Southern California Health Center
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
                    Wordpress to enable tamplate custimize style and plugins.
                  </p>
                  <div className="meta-item-details"></div>
                  <Link
                    to="/item-details-02"
                    onClick={() =>
                      window.open('https://www.irvinechiropractor.com/')
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

export default ItemDetails04;
