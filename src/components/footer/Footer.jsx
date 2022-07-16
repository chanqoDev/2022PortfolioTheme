import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logodark from '../../assets/images/logo/logo_dark.png';
import logofooter from '../../assets/images/logo/logo.png';
const Footer = () => {
  const accountList = [
    {
      title: 'Work Portfolio',
      link: '/authors-01',
    },
  ];
  const resourcesList = [
    {
      title: 'Local Meetups',
      link: '/activity-01',
    },
    {
      title: 'Blog',
      link: '/blog-details',
    },
    {
      title: 'Youtube Channel',
      link: '/blog-details',
    },
  ];
  const companyList = [
    {
      title: 'Github Projects',
      link: '/explore-02',
    },
    {
      title: 'Contact Us',
      link: '/contact-02',
    },
  ];
  const socialList = [
    {
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/christianelena/',
    },
    {
      icon: 'fab fa-github',
      link: 'https://github.com/chanqoDev',
    },
    {
      icon: 'fab fa-twitter',
      link: 'https://twitter.com/Tweeting_chriis',
    },
    {
      icon: 'fab fa-youtube',
      link: 'https://www.youtube.com/channel/UCaHXZcSmcbPZiRII8KclXag',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      <footer id="footer" className="footer-light-style clearfix bg-style">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-12">
              <div className="widget widget-logo">
                <div className="logo-footer" id="logo-footer">
                  <Link to="/">
                    <img
                      className="logo-dark"
                      id="logo_footer"
                      src={logodark}
                      alt="nft-gaming"
                    />
                    <img
                      className="logo-light"
                      id="logo_footer"
                      src={logofooter}
                      alt="nft-gaming"
                    />
                  </Link>
                </div>
                <p className="sub-widget-logo">Christian Developer 2022 ©</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-5 col-5">
              <div className="widget widget-menu style-1">
                <h5 className="title-widget">Work Experience</h5>
                <ul>
                  {accountList.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-7 col-7">
              <div className="widget widget-menu style-2">
                <h5 className="title-widget">Resources</h5>
                <ul>
                  {resourcesList.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-5 col-5">
              <div className="widget widget-menu fl-st-3">
                <h5 className="title-widget">Company</h5>
                <ul>
                  {companyList.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-7 col-12">
              <div className="widget widget-subcribe">
                <h4 className="title-widget">
                  <h6>christianelena92@gmail.com </h6>
                  {/* Text to Phone:<br></br>(949)375-9321<br></br> */}
                </h4>

                <h5 className="title-widget">Email Me</h5>
                <div className="form-subcribe">
                  <form
                    id="subscribe-form"
                    action="#"
                    method="GET"
                    acceptCharset="utf-8"
                    className="form-submit"
                  >
                    <input
                      name="email"
                      className="email"
                      type="email"
                      placeholder="info@yourgmail.com"
                      required
                    />
                    <button id="submit" name="submit" type="submit">
                      <i className="icon-fl-send"></i>
                    </button>
                  </form>
                </div>
                <div className="widget-social style-1 mg-t32">
                  <ul>
                    {socialList.map((item, index) => (
                      <li key={index}>
                        <Link
                          to="#"
                          onClick={() => {
                            window.open(`${item.link}`, '_blank');
                          }}
                        >
                          <i className={item.icon}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {isVisible && <Link onClick={scrollToTop} to="#" id="scroll-top"></Link>}
    </div>
  );
};

export default Footer;
