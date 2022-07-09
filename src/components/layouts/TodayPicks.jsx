import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardModal from './CardModal';

const TodayPicks = (props) => {
  const data = props.data;

  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4);
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
      <section className="tf-section today-pick">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-live-auctions mg-bt-21">
                <h2 className="tf-title pad-l-7">Projects</h2>
                <Link to="/explore-02" className="exp style2">
                  EXPLORE MORE
                </Link>
              </div>
            </div>
            {data.slice(0, visible).map((item, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div
                  className={`sc-card-product ${
                    item.feature ? 'comingsoon' : ''
                  } `}
                >
                  <div className="card-media">
                    <Link to="/explore-02">
                      <img src={item.img} alt="axies" />
                    </Link>
                  </div>

                  <div className="text-center">
                    <h5 className="style2">
                      <Link to="/item-details-01">{item.title}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
            {visible < data.length && (
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
          </div>
        </div>
      </section>
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </Fragment>
  );
};

TodayPicks.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TodayPicks;
