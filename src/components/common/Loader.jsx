import React from 'react';

function Loader() {
  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <div className="load-text">
          {/* <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span> */}
          <img src="/home1/assets/img/logo-dark.png" style={{width: "60px", height: "60px"}} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
