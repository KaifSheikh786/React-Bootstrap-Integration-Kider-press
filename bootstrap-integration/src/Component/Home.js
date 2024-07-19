import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <>
        {/* // <!-- Carousel Start --> */}
        <div className="container-fluid p-0 mb-5">
            <div className="owl-carousel header-carousel position-relative">
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/carousel-1.jpg" alt=""/>
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(0, 0, 0, .2)'}}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-2 text-white animated slideInDown mb-4">The Best Kindergarten School For Your Child</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <p href="#" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</p>
                                    <p href="#" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our classNamees</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/carousel-2.jpg" alt=""/>
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: 'rgba(0, 0, 0, .2)'}}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h1 className="display-2 text-white animated slideInDown mb-4">Make A Brighter Future For Your Child</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <p href="#" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Learn More</p>
                                    <p href="#" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our classNamees</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* // <!-- Carousel End --> */}


        {/* <!-- Facilities Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: 600}}>
                    <h1 className="mb-3">School Facilities</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="facility-item">
                            <div className="facility-icon bg-primary">
                                <span className="bg-primary"></span>
                                <i className="fa fa-bus-alt fa-3x text-primary"></i>
                                <span className="bg-primary"></span>
                            </div>
                            <div className="facility-text bg-primary">
                                <h3 className="text-primary mb-3">School Bus</h3>
                                <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="facility-item">
                            <div className="facility-icon bg-success">
                                <span className="bg-success"></span>
                                <i className="fa fa-futbol fa-3x text-success"></i>
                                <span className="bg-success"></span>
                            </div>
                            <div className="facility-text bg-success">
                                <h3 className="text-success mb-3">Playground</h3>
                                <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="facility-item">
                            <div className="facility-icon bg-warning">
                                <span className="bg-warning"></span>
                                <i className="fa fa-home fa-3x text-warning"></i>
                                <span className="bg-warning"></span>
                            </div>
                            <div className="facility-text bg-warning">
                                <h3 className="text-warning mb-3">Healthy Canteen</h3>
                                <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="facility-item">
                            <div className="facility-icon bg-info">
                                <span className="bg-info"></span>
                                <i className="fa fa-chalkboard-teacher fa-3x text-info"></i>
                                <span className="bg-info"></span>
                            </div>
                            <div className="facility-text bg-info">
                                <h3 className="text-info mb-3">Positive Learning</h3>
                                <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Facilities End --> */}

        {/* <!-- About Start --> */}
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-4">Learn More About Our Work And Our Cultural Activities</h1>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p class="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>
                        <div class="row g-4 align-items-center">
                            <div class="col-sm-6">
                                <p class="btn btn-primary rounded-pill py-3 px-5" href="#">Read More</p>
                            </div>
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ width: 45, height: 45 }} />
                                    <div class="ms-3">
                                        <h6 class="text-primary mb-1">Jhon Doe</h6>
                                        <small>CEO & Founder</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                        <div class="row">
                            <div class="col-12 text-center">
                                <img class="img-fluid w-75 rounded-circle bg-light p-3" src="img/about-1.jpg" alt=""/>
                            </div>
                            <div class="col-6 text-start" style={{ marginTop: 150 }}>
                                <img class="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-2.jpg" alt=""/>
                            </div>
                            <div class="col-6 text-end" style={{ marginTop: 150 }}>
                                <img class="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-3.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}

        {/* <!-- Call To Action Start --> */}
<div classNameName="container-xxl py-5">
    <div className="container">
        <div className="bg-light rounded">
            <div className="row g-0">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{ minHeight: 400 + 'px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded" src="img/call-to-action.jpg" style={{objectFit: "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="h-100 d-flex flex-column justify-content-center p-5">
                        <h1 className="mb-4">Become A Teacher</h1>
                        <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </p>
                        <p className="btn btn-primary py-3 px-5" href="#">Get Started Now<i className="fa fa-arrow-right ms-2"></i></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- Call To Action End --> */}

{/* <!-- classes Start --> */}
<div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: 600}}>
            <h1 className="mb-3">School classes</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="classNamees-item">
                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                        <img className="img-fluid rounded-circle" src="img/classes-1.jpg" alt=""/>
                    </div>
                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                        <p className="d-block text-center h3 mt-3 mb-4" href="#">Art & Drawing</p>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: 45, height: 45}}/>
                                <div className="ms-3">
                                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                                    <small>Teacher</small>
                                </div>
                            </div>
                            <span className="bg-primary text-white rounded-pill py-2 px-3" href="#">$99</span>
                        </div>
                        <div className="row g-1">
                            <div className="col-4">
                                <div className="border-top border-3 border-primary pt-2">
                                    <h6 className="text-primary mb-1">Age:</h6>
                                    <small>3-5 Years</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border-top border-3 border-success pt-2">
                                    <h6 className="text-success mb-1">Time:</h6>
                                    <small>9-10 AM</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border-top border-3 border-warning pt-2">
                                    <h6 className="text-warning mb-1">Capacity:</h6>
                                    <small>30 Kids</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="classNamees-item">
                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                        <img className="img-fluid rounded-circle" src="img/classes-2.jpg" alt=""/>
                    </div>
                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                        <p className="d-block text-center h3 mt-3 mb-4" href="#">Color Management</p>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: 45, height: 45}}/>
                                <div className="ms-3">
                                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                                    <small>Teacher</small>
                                </div>
                            </div>
                            <span className="bg-primary text-white rounded-pill py-2 px-3" href="#">$99</span>
                        </div>
                        <div className="row g-1">
                            <div className="col-4">
                                <div className="border-top border-3 border-primary pt-2">
                                    <h6 className="text-primary mb-1">Age:</h6>
                                    <small>3-5 Years</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border-top border-3 border-success pt-2">
                                    <h6 className="text-success mb-1">Time:</h6>
                                    <small>9-10 AM</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border-top border-3 border-warning pt-2">
                                    <h6 className="text-warning mb-1">Capacity:</h6>
                                    <small>30 Kids</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="classNamees-item">
                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                        <img className="img-fluid rounded-circle" src="img/classes-3.jpg" alt=""/>
                    </div>
                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                        <p className="d-block text-center h3 mt-3 mb-4" href="#">Athletic & Dance</p>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: 45, height: 45}}/>
                                <div className="ms-3">
                                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                                    <small>Teacher</small>
                                </div>
                            </div>
                            <span className="bg-primary text-white rounded-pill py-2 px-3" href="#">$99</span>
                        </div>
                        <div className="row g-1">
                            <div className="col-4">
                                <div className="border-top border-3 border-primary pt-2">
                                    <h6 className="text-primary mb-1">Age:</h6>
                                    <small>3-5 Years</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border-top border-3 border-success pt-2">
                                    <h6 className="text-success mb-1">Time:</h6>
                                    <small>9-10 AM</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border-top border-3 border-warning pt-2">
                                    <h6 className="text-warning mb-1">Capacity:</h6>
                                    <small>30 Kids</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="classNamees-item">
                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                        <img className="img-fluid rounded-circle" src="img/classes-4.jpg" alt=""/>
                    </div>
                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                        <p className="d-block text-center h3 mt-3 mb-4" href="#">Language & Speaking</p>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: 45, height: 45}}/>
                                <div className="ms-3">
                                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                                    <small>Teacher</small>
                                </div>
                            </div>
                            <span className="bg-primary text-white rounded-pill py-2 px-3" href="#">$99</span>
                        </div>
                        <div className="row g-1">
                            <div className="col-4">
                                <div className="border-top border-3 border-primary pt-2">
                                    <h6 className="text-primary mb-1">Age:</h6>
                                    <small>3-5 Years</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border-top border-3 border-success pt-2">
                                    <h6 className="text-success mb-1">Time:</h6>
                                    <small>9-10 AM</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border-top border-3 border-warning pt-2">
                                    <h6 className="text-warning mb-1">Capacity:</h6>
                                    <small>30 Kids</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="classNamees-item">
                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                        <img className="img-fluid rounded-circle" src="img/classes-5.jpg" alt=""/>
                    </div>
                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                        <p className="d-block text-center h3 mt-3 mb-4" href="#">Religion & History</p>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: 45, height: 45}}/>
                                <div className="ms-3">
                                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                                    <small>Teacher</small>
                                </div>
                            </div>
                            <span className="bg-primary text-white rounded-pill py-2 px-3" href="#">$99</span>
                        </div>
                        <div className="row g-1">
                            <div className="col-4">
                                <div className="border-top border-3 border-primary pt-2">
                                    <h6 className="text-primary mb-1">Age:</h6>
                                    <small>3-5 Years</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border-top border-3 border-success pt-2">
                                    <h6 className="text-success mb-1">Time:</h6>
                                    <small>9-10 AM</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border-top border-3 border-warning pt-2">
                                    <h6 className="text-warning mb-1">Capacity:</h6>
                                    <small>30 Kids</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="classNamees-item">
                    <div className="bg-light rounded-circle w-75 mx-auto p-3">
                        <img className="img-fluid rounded-circle" src="img/classes-6.jpg" alt=""/>
                    </div>
                    <div className="bg-light rounded p-4 pt-5 mt-n5">
                        <p className="d-block text-center h3 mt-3 mb-4" href="#">General Knowledge</p>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{width: 45, height: 45}}/>
                                <div className="ms-3">
                                    <h6 className="text-primary mb-1">Jhon Doe</h6>
                                    <small>Teacher</small>
                                </div>
                            </div>
                            <span className="bg-primary text-white rounded-pill py-2 px-3" href="#">$99</span>
                        </div>
                        <div className="row g-1">
                            <div className="col-4">
                                <div className="border-top border-3 border-primary pt-2">
                                    <h6 className="text-primary mb-1">Age:</h6>
                                    <small>3-5 Years</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border-top border-3 border-success pt-2">
                                    <h6 className="text-success mb-1">Time:</h6>
                                    <small>9-10 AM</small>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="border-top border-3 border-warning pt-2">
                                    <h6 className="text-warning mb-1">Capacity:</h6>
                                    <small>30 Kids</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- classes End --> */}

      {/* Appointment Started */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-light rounded">
            <div className="row g-0">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 className="mb-4">Make Appointment</h1>
                  <form>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="gname"
                            placeholder="Gurdian Name"
                          />
                          <label for="gname">Gurdian Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control border-0"
                            id="gmail"
                            placeholder="Gurdian Email"
                          />
                          <label for="gmail">Gurdian Email</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="cname"
                            placeholder="Child Name"
                          />
                          <label for="cname">Child Name</label>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="cage"
                            placeholder="Child Age"
                          />
                          <label for="cage">Child Age</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control border-0"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: 100 }}
                          ></textarea>
                          <label for="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="col-lg-6 wow fadeIn"
                data-wow-delay="0.5s"
                style={{ minHeight: 400 }}
              >
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded"
                    src="/img/appointment.jpg"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment Started */}

            {/* Team */}
            <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-3">Popular Teachers</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item position-relative">
                <img
                  className="img-fluid rounded-circle w-75"
                  src="/img/team-1.jpg"
                  alt=""
                />
                <div className="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div className="d-flex align-items-center">
                    <p className="btn btn-square btn-primary mx-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </p>
                    <p className="btn btn-square btn-primary  mx-1" href="#">
                      <i className="fab fa-twitter"></i>
                    </p>
                    <p className="btn btn-square btn-primary  mx-1" href="#">
                      <i className="fab fa-instagram"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item position-relative">
                <img
                  className="img-fluid rounded-circle w-75"
                  src="/img/team-2.jpg"
                  alt=""
                />
                <div className="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div className="d-flex align-items-center">
                    <p className="btn btn-square btn-primary mx-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </p>
                    <p className="btn btn-square btn-primary  mx-1" href="#">
                      <i className="fab fa-twitter"></i>
                    </p>
                    <p className="btn btn-square btn-primary  mx-1" href="#">
                      <i className="fab fa-instagram"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item position-relative">
                <img
                  className="img-fluid rounded-circle w-75"
                  src="/img/team-3.jpg"
                  alt=""
                />
                <div className="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div className="d-flex align-items-center">
                    <p className="btn btn-square btn-primary mx-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </p>
                    <p className="btn btn-square btn-primary  mx-1" href="#">
                      <i className="fab fa-twitter"></i>
                    </p>
                    <p className="btn btn-square btn-primary  mx-1" href="#">
                      <i className="fab fa-instagram"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
           {/* Team */}

      {/* Testimonial */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 560, margin:  10, padding: 10}}
          >
            <h1 className="mb-3">Our Clients Say!</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="testimonial-item bg-light rounded p-5">
              <p className="fs-5">
                Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                est kasd kasd erat eos
              </p>
              <div
                className="d-flex align-items-center bg-white me-n5"
                style={{ borderRadius: "50px 0 0 50px" }}
              >
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src="/img/testimonial-1.jpg"
                  style={{ width: 90 + 'px', height: 90 +'px' }}
                />
                <div className="ps-3">
                  <h3 className="mb-1">Client Name</h3>
                  <span>Profession</span>
                </div>
                <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded p-5">
              <p className="fs-5">
                Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                est kasd kasd erat eos
              </p>
              <div
                className="d-flex align-items-center bg-white me-n5"
                style={{ borderRadius: "50px 0 0 50px" }}
              >
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src="/img/testimonial-2.jpg"
                  style={{ width: 90, height: 90 }}
                />
                <div className="ps-3">
                  <h3 className="mb-1">Client Name</h3>
                  <span>Profession</span>
                </div>
                <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
              </div>
            </div>
            <div className="testimonial-item bg-light rounded p-5">
              <p className="fs-5">
                Tempor stet labore dolor clita stet diam amet ipsum dolor duo
                ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet
                est kasd kasd erat eos
              </p>
              <div
                className="d-flex align-items-center bg-white me-n5"
                style={{ borderRadius: "50px 0 0 50px" }}
              >
                <img
                  className="img-fluid flex-shrink-0 rounded-circle"
                  src="/img/testimonial-3.jpg"
                  style={{ width: 90, height: 90 }}
                />
                <div className="ps-3">
                  <h3 className="mb-1">Client Name</h3>
                  <span>Profession</span>
                </div>
                <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
            {/* Testimonial */}
        </>
        
    )
  }
}
