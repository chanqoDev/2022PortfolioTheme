import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import img1 from '../assets/images/box-item/card-item-10.jpg';
import img2 from '../assets/images/box-item/card-item-111.png';
// import img3 from '../assets/images/box-item/image-box-11.jpg';
// import img4 from '../assets/images/box-item/image-box-21.jpg';
// import img5 from '../assets/images/box-item/image-box-6.jpg';

const Activity01 = () => {
  const [dataBox] = useState([
    {
      img: img2,
      title: 'Manhattan Local Meet & Greet Techies',
      status: 'Event : JUNETEENTH ',
      author: 'Expired',
      time: 'At 2:30 PM on 16th June, 2022',
      icon: 'icon-1',
      link: 'https://www.meetup.com/manhattan-education-technology-meetup-group/members/186157527/profile/',
    },
    {
      img: img1,
      title: 'Manhattan Local Meet & Greet Techies pt2.',
      status:
        'Whether you are a local or just passing through make new friends & meet Manhattans Kansas Techies Grab a coffee☕',
      author: 'Coming Up!',
      time: 'At 1:00 PM on 1st Aug, 2022',
      icon: 'icon-1',
      link: 'https://www.meetup.com/manhattan-education-technology-meetup-group/members/186157527/profile/',
    },
  ]);
  const [dataFilter] = useState([
    {
      icon: 'icon-fl-heart-filled',
      name: 'Listings',
    },
    {
      icon: 'icon-fl-heart-filled',
      name: 'Like',
    },

    {
      icon: 'icon-fl-users-filled',
      name: 'Followings',
    },
  ]);

  const [visible, setVisible] = useState(1);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 2);
  };
  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">
                  Local Meetup Networking Event
                </h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="#">Events</Link>
                  </li>
                  <li>Meetups</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-activity s1 tf-section">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-12">
              {dataBox.slice(0, visible).map((item, index) => (
                <div className="sc-card-activity style1" key={index}>
                  <div className="content">
                    <div className="media">
                      <img src={item.img} alt="Axies" />
                    </div>
                    <div className="infor">
                      <h3>
                        {' '}
                        <Link
                          to="/activity-01"
                          onClick={() => {
                            window.open(`${item.link}`, '_blank');
                          }}
                        >
                          {item.title}
                        </Link>
                      </h3>
                      <div className="status">
                        {item.status}{' '}
                        <span className="author">{item.author}</span>
                      </div>
                      <div className="time">{item.time}</div>
                    </div>
                  </div>
                  <div className={`button-active icon ${item.icon}`}></div>
                </div>
              ))}
              {visible < dataBox.length && (
                <div className="col-md-12 wrap-inner load-more text-center">
                  <Link
                    to="#"
                    id="load-more"
                    className="sc-button loadmore fl-button pri-3 mt-10"
                    onClick={showMoreItems}
                  >
                    <span>Load More</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Activity01;
