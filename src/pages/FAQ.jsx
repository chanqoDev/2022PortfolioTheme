// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
// import { Accordion } from 'react-bootstrap-accordion';

const FAQ = () => {
  // const [data] = useState([
  //   {
  //     key: '0',
  //     title: 'Download My Resume',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  //   },
  //   {
  //     key: '1',
  //     show: 'show',
  //     title: 'What is an NFT?',
  //     text: 'NFTs or non-fungible tokens, are cryptographic assets on blockchain with unique identification codes and metadata that distinguish them from each other. NFTs are unique and not mutually interchangeable, which means no two NFTs are the same.',
  //   },
  //   {
  //     key: '2',
  //     title: 'How to Contact Me?',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  //   },

  // {
  //     key: "3",
  //     title: 'What are gas fees on Axies?',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
  // },
  // {
  //     key: "4",
  //     title: 'What is the effective staking amount?',
  //     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
  // },
  // ]
  // );
  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container                                                                           /,.  c">
          <div className="row">
            <div className="col-md-12">
              <div className="page-title-heading mg-bt-12">
                <h1 className="heading text-center">RESUME</h1>
              </div>
              <div className="breadcrumbs style2">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li>
                    <Link to="#">Pages</Link>
                  </li> */}
                  <li>CV</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section wrap-accordion">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                View Resume in PDF
              </h2>

              <h5 className="sub-title help-center mg-bt-32 ">
                Here you can find the latest version of my resume.
              </h5>
              <button
                className="col-md-12 flat-accordion2 hovstyle"
                onClick={() => {
                  window.open(
                    'https://chanqodev.github.io/ChrisDevWok_v2021/assets/Christian_E_Resume2022v.pdf',
                    '_blank',
                  );
                }}
              >
                VIEW RESUME
              </button>
            </div>
            {/*<div className="col-md-12 ct ">
               <div className="flat-accordion2">
                {data.map((item, index) => (
                  <Accordion key={index} title={item.title}>
                    <p>{item.text}</p>
                  </Accordion>
                ))}
              </div> 
            </div>*/}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
