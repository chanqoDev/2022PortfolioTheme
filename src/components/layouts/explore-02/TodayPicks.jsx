import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import CardModal from '../CardModal';

import img1 from '../../../assets/images/box-item/card-item-3.jpg';
import imga1 from '../../../assets/images/avatar/avt-3.png';
import imgCollection1 from '../../../assets/images/avatar/avt-18.jpg';
import img2 from '../../../assets/images/box-item/card-item-4.jpg';
import imga2 from '../../../assets/images/avatar/avt-2.jpg';
import imgCollection2 from '../../../assets/images/avatar/avt-18.jpg';
import img3 from '../../../assets/images/box-item/card-item-2.jpg';
import imga3 from '../../../assets/images/avatar/avt-4.jpg';
import imgCollection3 from '../../../assets/images/avatar/avt-18.jpg';
import img4 from '../../../assets/images/box-item/card-item-7.jpg';
// import imga4 from '../../../assets/images/avatar/avt-3.jpg';
import imgCollection4 from '../../../assets/images/avatar/avt-18.jpg';
import img5 from '../../../assets/images/box-item/card-item8.jpg';
// import imga5 from '../../../assets/images/avatar/avt-12.jpg';
import imgCollection5 from '../../../assets/images/avatar/avt-18.jpg';
import img6 from '../../../assets/images/box-item/card-item-9.jpg';
// import imga6 from '../../../assets/images/avatar/avt-1.jpg';
import imgCollection6 from '../../../assets/images/avatar/avt-18.jpg';
import img7 from '../../../assets/images/box-item/image-box-6.jpg';
// import imga7 from '../../../assets/images/avatar/avt-4.jpg';
import imgCollection7 from '../../../assets/images/avatar/avt-18.jpg';
import img8 from '../../../assets/images/box-item/image-box-11.jpg';
// import imga8 from '../../../assets/images/avatar/avt-3.jpg';
import imgCollection8 from '../../../assets/images/avatar/avt-18.jpg';
import img9 from '../../../assets/images/box-item/image-box-project9.jpg';
import img10 from '../../../assets/images/box-item/image-box-project-10.jpg';
import imgCollection9 from '../../../assets/images/avatar/avt-1808.jpg';

import img11 from '../../../assets/images/box-item/image-box-project-11.jpg';
import img12 from '../../../assets/images/box-item/image-box-project-12.jpg';
import img13 from '../../../assets/images/box-item/image-box-project-13.jpg';
import img14 from '../../../assets/images/box-item/image-box-project-14.jpg';
import img15 from '../../../assets/images/box-item/image-box-project-15.jpg';
import img16 from '../../../assets/images/box-item/image-box-project-16.jpg';

import img17 from '../../../assets/images/box-item/NigthOwl-image-box-project.jpg';
import imga17 from '../../../assets/images/avatar/avt-chrom.png';
import imga18 from '../../../assets/images/avatar/avt-react.png';
import imgJS from '../../../assets/images/avatar/avt-5.png';
import imgTSC from '../../../assets/images/avatar/avt-7.png';
import imgNode from '../../../assets/images/avatar/avt-node.png';

// imga17;
const TodayPicks = () => {
  const [dataTab] = useState([
    {
      id: 1,
      title: 'All',
    },
    {
      id: 2,
      title: 'HTML5 / CSS/ JS',
    },
    {
      id: 3,
      title: 'React',
    },
    {
      id: 4,
      title: 'Typescript',
    },
    {
      id: 5,
      title: 'Google ChromeExtensions',
    },
  ]);
  const [dataPanel] = useState([
    {
      id: 1,
      dataContent: [
        {
          id: 6,
          img: img6,
          title: 'ChrisDev Portfolio 2021 ',
          // tags: 'bsc',
          imgAuthor: imga1,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection6,
          nameCollection: 'Creative Art 3D',
          link: 'https://chanqodev.github.io/ChrisDevWok_v2021/',
        },
        {
          id: 16,
          img: img17,
          title: 'NigthOwl Mode🦉 Chrome Extension ',
          // tags: 'bsc',

          imgAuthor: imga17,
          nameAuthor: '🟢 22 active users',
          // price: '4.89 ETH',
          // priceChange: '22 users',
          // wishlist: '100',
          imgCollection: imgCollection8,
          nameCollection: 'Creative Art 3D',
          link: 'https://chrome.google.com/webstore/detail/nigthowl-mode%F0%9F%A6%89/eeejechfiigialpjicekkgeohaiklhke?hl=en-US&authuser=0',
        },
        {
          id: 1,
          img: img1,
          title: 'To-done Rocket Planner🚀 ',
          imgAuthor: imga17,
          nameAuthor: '🟢 4 active users',
          imgCollection: imgCollection1,
          nameCollection: 'HTML5',
          link: 'https://chrome.google.com/webstore/detail/to-done-rocket-planner/nnmfajngjkedfjodhldodbbnmbdjkchk?hl=en-US',
        },
        {
          id: 2,
          img: img2,
          title: 'FullstackDeveloper.shop ',
          imgAuthor: imgCollection9,
          // nameAuthor: 'SalvadorDali',
          nameCollection: 'React',
          feature: 'Coming Soon',
        },
        {
          id: 3,
          img: img7,
          title: 'MemoryBoard Flipcard Game ',
          imgAuthor: imgJS,
          // nameAuthor: 'SalvadorDali',
          imgCollection: imgCollection3,
          nameCollection: 'Creative Art 3D',
          link: 'https://chanqodev.github.io/MemoryFlipCardGame/',
        },
        {
          id: 4,
          img: img4,
          title: 'Handy-dandy Dev Blog ',
          imgAuthor: imga18,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection4,
          nameCollection: 'Creative Art 3D',
          link: 'https://github.com/chanqoDev/handydandydevblog',
        },
        {
          id: 5,
          img: img11,
          title: 'React NFT OpeanSea.io Gallery ',
          // tags: 'bsc',
          imgAuthor: imga18,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection5,
          nameCollection: 'Creative Art 3D',
          link: 'https://github.com/chanqoDev/react-nft-Opensea-Gallery',
        },
        {
          id: 7,
          img: img3,
          title: 'Display Random UserApi -Typescript ',
          // tags: 'bsc',
          imgAuthor: imgTSC,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection7,
          nameCollection: 'Creative Art 3D',
          link: 'https://neon-marshmallow-cf3bb2.netlify.app/',
        },
        {
          id: 8,
          img: img13,
          title: 'Rabbits Lawncare LandingPage ',
          // tags: 'bsc',
          imgAuthor: imga18,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          // imgCollection: imgCollection8,
          nameCollection: 'Creative Art 3D',
          link: 'https://github.com/chanqoDev/React_KS_lawnding_page',
        },
        {
          id: 9,
          img: img9,
          title: 'Firebase & Google Auth Disney ',
          // tags: 'bsc',
          imgAuthor: imga18,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          // imgCollection: imgCollection1,
          nameCollection: 'Creative Art 3D',
          link: 'https://disneyplus-clone-3aef7.web.app',
        },
        {
          id: 10,
          img: img10,
          title: 'Simon Says Color Game  -JQuery,DOM ',
          // tags: 'bsc',
          imgAuthor: imgJS,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection2,
          nameCollection: 'Creative Art 3D',
          link: 'https://chanqodev.github.io/simon_game/',
        },
        {
          id: 11,
          img: img5,
          title: 'React, Typescript Formik Form ',
          // tags: 'bsc',
          imgAuthor: imgTSC,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          // imgCollection: imgCollection3,
          nameCollection: 'Creative Art 3D',
          link: 'https://github.com/chanqoDev/Typescript-react-formik-form/tree/main/client',
        },
        {
          id: 12,
          img: img12,
          title: 'Vanilla JS & DOM Starbucks clone',
          // tags: 'bsc',
          imgAuthor: imgJS,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection4,
          nameCollection: 'Creative Art 3D',
          link: 'https://chanqodev.github.io/starbucks-fullstack/',
        },
        {
          id: 13,
          img: img8,
          title: 'Youtube & IMDb Netflix APIn ',
          // tags: 'bsc',
          imgAuthor: imga18,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection5,
          nameCollection: 'Creative Art 3D',
          link: 'https://netflix-clone-b3c03.web.app/',
        },
        {
          id: 14,
          img: img14,
          title: 'Reverse GeoLocation OpenWeather api ',
          // tags: 'bsc',
          imgAuthor: imgJS,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection6,
          nameCollection: 'Creative Art 3D',
          link: 'https://silly-pixie-dc71f4.netlify.app/',
        },
        {
          id: 15,
          img: img16,
          title: 'Node.js Chrisdev Blog ',
          // tags: 'bsc',
          imgAuthor: imgNode,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection7,
          nameCollection: 'Creative Art 3D',
          link: 'https://github.com/chanqoDev/chrisDevBlogsAPI',
        },
        {
          id: 16,
          img: img15,
          title: 'Bootstrap Heroku Newsletter Signup Form ',
          // tags: 'bsc',
          imgAuthor: imgJS,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection8,
          nameCollection: 'Creative Art 3D',
          link: 'https://github.com/chanqoDev/newsletterSignup',
        },
      ],
    },
    {
      id: 2,
      dataContent: [
        {
          id: 6,
          img: img6,
          title: 'ChrisDev Portfolio 2021 ',
          // tags: 'bsc',
          imgAuthor: imga1,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection6,
          nameCollection: 'Creative Art 3D',
          link: 'https://chanqodev.github.io/ChrisDevWok_v2021/',
        },
        {
          id: 15,
          img: img16,
          title: 'Node.js Chrisdev Blog ',
          // tags: 'bsc',
          imgAuthor: imgNode,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection7,
          nameCollection: 'Creative Art 3D',
          link: 'https://github.com/chanqoDev/chrisDevBlogsAPI',
        },
        {
          id: 10,
          img: img10,
          title: 'Simon Says Color Game  -JQuery,DOM ',
          // tags: 'bsc',
          imgAuthor: imgJS,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection2,
          nameCollection: 'Creative Art 3D',
          link: 'https://chanqodev.github.io/simon_game/',
        },
        {
          id: 12,
          img: img12,
          title: 'Vanilla JS & DOM Starbucks clone',
          // tags: 'bsc',
          imgAuthor: imgJS,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection4,
          nameCollection: 'Creative Art 3D',
          link: 'https://chanqodev.github.io/starbucks-fullstack/',
        },
        {
          id: 14,
          img: img14,
          title: 'Reverse GeoLocation OpenWeather api ',
          // tags: 'bsc',
          imgAuthor: imgJS,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection6,
          nameCollection: 'Creative Art 3D',
          link: 'https://silly-pixie-dc71f4.netlify.app/',
        },
        {
          id: 3,
          img: img7,
          title: 'MemoryBoard Flipcard Game ',
          imgAuthor: imgJS,
          // nameAuthor: 'SalvadorDali',
          imgCollection: imgCollection3,
          nameCollection: 'Creative Art 3D',
          link: 'https://chanqodev.github.io/MemoryFlipCardGame/',
        },
        {
          id: 16,
          img: img15,
          title: 'Bootstrap Heroku Newsletter Signup Form ',
          // tags: 'bsc',
          imgAuthor: imgJS,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection8,
          nameCollection: 'Creative Art 3D',
          link: 'https://github.com/chanqoDev/newsletterSignup',
        },
      ],
    },
    {
      id: 3,
      dataContent: [
        {
          id: 13,
          img: img8,
          title: 'Youtube & IMDb Netflix APIn ',
          // tags: 'bsc',
          imgAuthor: imga18,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection5,
          nameCollection: 'Creative Art 3D',
          link: 'https://netflix-clone-b3c03.web.app/',
        },
        {
          id: 11,
          img: img5,
          title: 'React, Typescript Formik Form ',
          // tags: 'bsc',
          imgAuthor: imgTSC,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          // imgCollection: imgCollection3,
          nameCollection: 'Creative Art 3D',
          link: 'https://github.com/chanqoDev/Typescript-react-formik-form/tree/main/client',
        },
        {
          id: 7,
          img: img3,
          title: 'Display Random UserApi -Typescript ',
          // tags: 'bsc',
          imgAuthor: imgTSC,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection7,
          nameCollection: 'Creative Art 3D',
          link: 'https://neon-marshmallow-cf3bb2.netlify.app/',
        },
        {
          id: 8,
          img: img13,
          title: 'Rabbits Lawncare LandingPage ',
          // tags: 'bsc',
          imgAuthor: imga18,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          // imgCollection: imgCollection8,
          nameCollection: 'Creative Art 3D',
          link: 'https://github.com/chanqoDev/React_KS_lawnding_page',
        },
        {
          id: 9,
          img: img9,
          title: 'Firebase & Google Auth Disney ',
          // tags: 'bsc',
          imgAuthor: imga18,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          // imgCollection: imgCollection1,
          nameCollection: 'Creative Art 3D',
          link: 'https://disneyplus-clone-3aef7.web.app',
        },
        {
          id: 4,
          img: img4,
          title: 'Handy-dandy Dev Blog ',
          imgAuthor: imga18,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection4,
          nameCollection: 'Creative Art 3D',
          link: 'https://github.com/chanqoDev/handydandydevblog',
        },
        {
          id: 5,
          img: img11,
          title: 'React NFT OpeanSea.io Gallery ',
          // tags: 'bsc',
          imgAuthor: imga18,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection5,
          nameCollection: 'Creative Art 3D',
          link: 'https://github.com/chanqoDev/react-nft-Opensea-Gallery',
        },
      ],
    },
    {
      id: 4,
      dataContent: [
        {
          id: 11,
          img: img5,
          title: 'React, Typescript Formik Form ',
          // tags: 'bsc',
          imgAuthor: imgTSC,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          // imgCollection: imgCollection3,
          nameCollection: 'Creative Art 3D',
          link: 'https://github.com/chanqoDev/Typescript-react-formik-form/tree/main/client',
        },
        {
          id: 7,
          img: img3,
          title: 'Display Random UserApi -Typescript ',
          // tags: 'bsc',
          imgAuthor: imgTSC,
          // nameAuthor: 'SalvadorDali',
          // price: '4.89 ETH',
          // priceChange: '$12.246',
          // wishlist: '100',
          imgCollection: imgCollection7,
          nameCollection: 'Creative Art 3D',
          link: 'https://neon-marshmallow-cf3bb2.netlify.app/',
        },
      ],
    },
    {
      id: 5,
      dataContent: [
        {
          id: 16,
          img: img17,
          title: 'NigthOwl Mode🦉 Chrome Extension ',
          // tags: 'bsc',

          imgAuthor: imga17,
          nameAuthor: '🟢 22 active users',
          // price: '4.89 ETH',
          // priceChange: '22 users',
          // wishlist: '100',
          imgCollection: imgCollection8,
          nameCollection: 'Creative Art 3D',
          link: 'https://chrome.google.com/webstore/detail/nigthowl-mode%F0%9F%A6%89/eeejechfiigialpjicekkgeohaiklhke?hl=en-US&authuser=0',
        },
        {
          id: 1,
          img: img1,
          title: 'To-done Rocket Planner🚀 ',
          imgAuthor: imga17,
          nameAuthor: '🟢 4 active users',
          imgCollection: imgCollection1,
          nameCollection: 'HTML5',
          link: 'https://chrome.google.com/webstore/detail/to-done-rocket-planner/nnmfajngjkedfjodhldodbbnmbdjkchk?hl=en-US',
        },
      ],
    },
  ]);

  const [visible, setVisible] = useState(12);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  // const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <div className="tf-section sc-explore-2">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="flat-tabs explore-tab">
                <Tabs>
                  <TabList>
                    {dataTab.map((data) => (
                      <Tab key={data.id}>{data.title}</Tab>
                    ))}
                  </TabList>
                  {dataPanel.map((data) => (
                    <TabPanel key={data.id}>
                      {data.dataContent.slice(0, visible).map((item) => (
                        <div
                          key={item.id}
                          className={`sc-card-product explode style2 mg-bt ${
                            item.feature ? 'comingsoon' : ''
                          } `}
                        >
                          <div className="card-media">
                            <Link to="/item-details-01">
                              <img src={item.img} alt="Axies" />
                            </Link>
                            <div className="button-place-bid">
                              <button
                                // onClick={() => setModalShow(true)}
                                onClick={() => {
                                  window.open(`${item.link}`, '_blank');
                                  // window.location.assign(`${item.link}`);
                                }}
                                className="sc-button   fl-button pri-3"
                              >
                                <span>View Live</span>
                              </button>
                            </div>
                            <div className="coming-soon">{item.feature}</div>
                          </div>
                          <div className="card-title">
                            <h5>
                              <Link to="/item-details-01">{item.title}</Link>
                            </h5>
                          </div>
                          <div className="meta-info">
                            <div className="author">
                              <div className="avatar">
                                <img src={item.imgAuthor} alt="Axies" />
                              </div>
                              <div className="info">
                                <h6>
                                  <Link to="/authors-02">
                                    {item.nameAuthor}
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="card-bottom style-explode"></div>
                        </div>
                      ))}
                      {visible < data.dataContent.length && (
                        <div className="col-md-12 wrap-inner load-more text-center">
                          <Link
                            to="#"
                            id="load-more"
                            className="sc-button loadmore fl-button pri-3"
                            onClick={showMoreItems}
                          >
                            <span>Load More</span>
                          </Link>
                        </div>
                      )}
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <CardModal show={modalShow} onHide={() => setModalShow(false)} /> */}
    </Fragment>
  );
};

export default TodayPicks;
