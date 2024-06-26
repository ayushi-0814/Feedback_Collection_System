import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="image" style={{ backgroundImage: "url('./public/picture12.jpg')" }}>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="picture2.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width={600}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                WELCOME
              </h1>
              <p className="lead">
                Are you prepared to use state-of-the-art IT solutions to propel your company to new heights? You don't need to search any farther! At Ayushi, we are experts in offering cutting-edge IT services and solutions customized to your particular needs.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link to='/about'>
                  <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                    About us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
