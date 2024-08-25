import React from 'react';

function Process() {
  return (
    <section className="tc-process-style1">
      <div className="container">
        <div className="title mb-100 text-center">
          <h2 className="fsz-45"> Our Process Work </h2>
        </div>
        <div className="content">
          <div className="row">
            <div className="col-lg-5">
              <div className="info">
                <div
                  className="accordion wow fadeInUp slow"
                  id="accordionProcess"
                >
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                      >
                        <span className="num"> 1 </span>
                        <h3> Lorem ipsum, dolor sit amet consectetur adipisicing elit </h3>
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, illum consequatur, et quisquam sed cupiditate ut repudiandae nisi, dolorum dolor deleniti? Eos, distinctio rem. Deleniti aut assumenda culpa aperiam voluptas?
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                      >
                        <span className="num"> 2 </span>
                        <h3> Lorem ipsum, dolor sit amet consectetur adipisicing elit </h3>
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia enim sequi reiciendis debitis? Tenetur officia asperiores aperiam autem, consectetur repellat neque libero, molestiae veniam porro tempora placeat non, a recusandae.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                      >
                        <span className="num"> 3 </span> <h3> Lorem ipsum, dolor sit amet consectetur adipisicing elit </h3>
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionProcess"
                    >
                      <div className="accordion-body">
                        <div className="text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempora reprehenderit, nesciunt alias mollitia praesentium atque beatae nostrum, nam maiores optio esse molestias impedit reiciendis quas fuga ipsum nemo ratione.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <a
                  href="#"
                  className="butn border rounded-pill mt-80 color-orange1 border-orange1 hover-bg-orange1"
                >
                  <span>
                    Our Projects
                    <i className="small ms-1 ti-arrow-top-right"></i>
                  </span>
                </a> */}
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2">
              <div className="img wow">
                <img
                  src="/home1/assets/img/process.jpg"
                  alt=""
                  className="img-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/home1/assets/img/c_line2.png" alt="" className="c-line wow" />
    </section>
  );
}

export default Process;
