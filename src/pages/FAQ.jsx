// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ResumePDF from '../assets/images/logo/Christian_E_Resume2022v3.pdf';

const FAQ = () => {
  return (
    <div>
      <Header />
      <section className="flat-title-page inner">
        <div className="overlay"></div>
        <div className="themesflat-container">
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
                  window.open(ResumePDF, '_blank');
                }}
              >
                VIEW RESUME
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
