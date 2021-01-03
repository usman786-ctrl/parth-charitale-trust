import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
        <div>
            <section class="slider_area slider_area_2 bg_cover d-flex align-items-center" style={{backgroundImage: 'url(assets/images/slider-bg.jpg)'}}>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6">
                    <div class="slider_content_2">
                        <h2 class="title wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.2s">We’ve funded <br/> 44,007 Dollars over <br/> 10 million peoples </h2>
                        <a href="#" class="main-btn wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">Leran More</a>
                    </div> 
                </div>
                <div class="col-lg-6 col-md-5">
                    <div class="slider_hero d-flex justify-content-center justify-content-lg-end">
                        <img class="wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.9s" src="assets/images/slider_hero.png" alt="slider hero"/>
                    </div> 
                </div> 
            </div> 
        </div> 
        <div class="slider_shape d-flex align-items-center">
            <img class="shape" src="assets/images/shape/shape-3.png" alt="shape"/>
        </div>
    </section>
    <section class="service_area">
        <div class="container-fluid p-0">
            <div class="row no-gutters justify-content-center">
                <div class="col-lg-4">
                    <div class="single_services text-center services_1">
                        <div class="services_icon">
                            <img src="assets/images/s-icon-1.png" alt="icon"/>
                        </div>
                        <div class="services_content">
                            <h4 class="services_title"><a href="#">Be a Volunteer</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders, corporate sponsors, churches.</p>
                        </div>
                    </div>

                </div>
                <div class="col-lg-4">
                    <div class="single_services active_2 text-center services_2">
                        <div class="services_icon">
                            <img src="assets/images/s-icon-2.png" alt="icon"/>
                        </div>
                        <div class="services_content">
                            <h4 class="services_title"><a href="#">Donate Now</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders, corporate sponsors, churches.</p>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-4">
                    <div class="single_services text-center services_3">
                        <div class="services_icon">
                            <img src="assets/images/s-icon-3.png" alt="icon"/>
                        </div>
                        <div class="services_content">
                            <h4 class="services_title"><a href="#">Send Gift</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders, corporate sponsors, churches.</p>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>


    <section class="campaing_doner_area">
        <div class="campaing_area pt-130 pb-110">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title text-center pb-30">
                            <img src="assets/images/section_icon.png" alt="Icon"/>
                            <h3 class="title">Featured Camapaign</h3>
                        </div> 
                    </div>
                </div> 
                <div class="row">
                    <div class="col-lg-5">
                        <div class="campaing_nav pt-15">
                            <ul class="nav" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="active" id="hospital-tab" data-toggle="tab" href="#hospital" role="tab" aria-controls="hospital" aria-selected="true">
                                        <div class="campaing_items items_color_1 d-flex">
                                            <div class="items_icon">
                                                <img src="assets/images/c-icon-1.png" alt="icon"/>
                                            </div>
                                            <div class="items_content media-body">
                                                <h4 class="items_title">Hospital Build</h4>
                                                <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                            </div>
                                        </div> 

                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a id="cancer-tab" data-toggle="tab" href="#cancer" role="tab" aria-controls="cancer" aria-selected="false">
                                        <div class="campaing_items items_color_2 d-flex">
                                            <div class="items_icon">
                                                <img src="assets/images/c-icon-2.png" alt="icon"/>
                                            </div>
                                            <div class="items_content media-body">
                                                <h4 class="items_title">Cancer Treatment </h4>
                                                <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                            </div>
                                        </div> 
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a id="environtment-tab" data-toggle="tab" href="#environtment" role="tab" aria-controls="environtment" aria-selected="false">
                                        <div class="campaing_items items_color_3 d-flex">
                                            <div class="items_icon">
                                                <img src="assets/images/c-icon-3.png" alt="icon"/>
                                            </div>
                                            <div class="items_content media-body">
                                                <h4 class="items_title">Environtment Recyle</h4>
                                                <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                            </div>
                                        </div> 
                                    </a>
                                </li>
                            </ul>
                        </div> 
                    </div>

                    <div class="col-lg-7">
                        <div class="campaing_tab_content mt-30">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="hospital" role="tabpanel" aria-labelledby="hospital-tab">
                                    <div class="campaing_content">
                                        <img src="assets/images/campaing-1.png" alt=""/>

                                        <div class="campaing_donate">
                                            <div class="donate_dollar d-flex justify-content-between">
                                                <span>Raised $17000</span>
                                                <span>Goal $37000</span>
                                            </div>
                                            <div class="donate_progress">
                                                <div class="bar_inner">
                                                    <div class="bar progress_line" data-width="59"><span class="percentage">59%</span></div>
                                                </div>
                                            </div> 
                                            <div class="donate_btn">
                                                <a href="#" class="main-btn"><i class="fa fa-heart"></i> Donate  Now</a>
                                            </div> 
                                        </div>
                                    </div> 
                                </div>
                                <div class="tab-pane fade" id="cancer" role="tabpanel" aria-labelledby="cancer-tab">
                                    <div class="campaing_content">
                                        <img src="assets/images/campaing-1.png" alt=""/>

                                        <div class="campaing_donate">
                                            <div class="donate_dollar d-flex justify-content-between">
                                                <span>Raised $17000</span>
                                                <span>Goal $37000</span>
                                            </div> 
                                            <div class="donate_progress">
                                                <div class="bar_inner">
                                                    <div class="bar progress_line" data-width="59"><span class="percentage">59%</span></div>
                                                </div>
                                            </div> 
                                            <div class="donate_btn">
                                                <a href="#" class="main-btn"><i class="fa fa-heart"></i> Donate  Now</a>
                                            </div> 
                                        </div>
                                    </div> 
                                </div>
                                <div class="tab-pane fade" id="environtment" role="tabpanel" aria-labelledby="environtment-tab">
                                    <div class="campaing_content">
                                        <img src="assets/images/campaing-1.png" alt=""/>

                                        <div class="campaing_donate">
                                            <div class="donate_dollar d-flex justify-content-between">
                                                <span>Raised $17000</span>
                                                <span>Goal $37000</span>
                                            </div> 
                                            <div class="donate_progress">
                                                <div class="bar_inner">
                                                    <div class="bar progress_line" data-width="59"><span class="percentage">59%</span></div>
                                                </div>
                                            </div> 
                                            <div class="donate_btn">
                                                <a href="#" class="main-btn"><i class="fa fa-heart"></i> Donate  Now</a>
                                            </div> 
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div> 
        </div> 
        
        <div class="doner_area pb-130">
            <div class="container">
                <div class="doner_title text-center mb-30">
                   <h4 class="title">Our Top Doners</h4>
                </div> 
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-6">
                        <div class="single_doner mt-30 text-center doner_color-1">
                            <div class="doner_image">
                                <img src="assets/images/doner-1.jpg" alt="doner"/>
                            </div>
                            <div class="doner_content">
                                <h5 class="doner_name">Maria Lodge</h5>
                                <p>Donate- $384</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-6">
                        <div class="single_doner mt-30 text-center doner_color-2">
                            <div class="doner_image">
                                <img src="assets/images/doner-2.jpg" alt="doner"/>
                            </div>
                            <div class="doner_content">
                                <h5 class="doner_name">Maria Lodge</h5>
                                <p>Donate- $384</p>
                            </div>
                        </div> 
                    </div>
                    <div class="col-lg-3 col-md-3 col-6">
                        <div class="single_doner mt-30 text-center doner_color-3">
                            <div class="doner_image">
                                <img src="assets/images/doner-3.jpg" alt="doner"/>
                            </div>
                            <div class="doner_content">
                                <h5 class="doner_name">Maria Lodge</h5>
                                <p>Donate- $384</p>
                            </div>
                        </div> 

                    </div>
                    <div class="col-lg-3 col-md-3 col-6">
                        <div class="single_doner mt-30 text-center doner_color-4">
                            <div class="doner_image">
                                <img src="assets/images/doner-4.jpg" alt="doner"/>
                            </div>
                            <div class="doner_content">
                                <h5 class="doner_name">Maria Lodge</h5>
                                <p>Donate- $384</p>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div> 
        </div> 
    </section>


    <section class="features_area pt-100 pb-130 bg_cover" style={{backgroundImage: 'url(assets/images/gray-bg.jpg)'}}>
        <div class="features_shape_1" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}}></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="features_content mt-20">
                        <h3 class="title">We spread helping hand to who are helpless</h3>
                        <p>Helpgrove is a nonproﬁt organization supported by community leaders, corporate sponsors, churches and concerned citizens join. There will be a day–in our lifetime–when we get to celebrate every person.</p>
                        <a href="#" class="main-btn">Read More</a>
                    </div> 
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="single_feature mt-30">
                                <div class="feature_icon">
                                    <img src="assets/images/f-icon-1.png" alt="icon"/>
                                </div>
                                <div class="feature_content">
                                    <h4 class="feature_title">Medical Help</h4>
                                    <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                </div>
                            </div> 
                        </div>
                        <div class="col-sm-6">
                            <div class="single_feature mt-30">
                                <div class="feature_icon">
                                    <img src="assets/images/f-icon-2.png" alt="icon"/>
                                </div>
                                <div class="feature_content">
                                    <h4 class="feature_title">Clean  Water</h4>
                                    <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                </div>
                            </div> 
                        </div>
                        <div class="col-sm-6">
                            <div class="single_feature mt-30">
                                <div class="feature_icon">
                                    <img src="assets/images/f-icon-3.png" alt="icon"/>
                                </div>
                                <div class="feature_content">
                                    <h4 class="feature_title">Cancer Fund</h4>
                                    <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                </div>
                            </div> 
                        </div>
                        <div class="col-sm-6">
                            <div class="single_feature mt-30">
                                <div class="feature_icon">
                                    <img src="assets/images/f-icon-4.png" alt="icon"/>
                                </div>
                                <div class="feature_content">
                                    <h4 class="feature_title">Food Fund</h4>
                                    <p>Helpgrove is a nonproﬁt organization supported by community leaders</p>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
        <div class="features_shape_2" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}}></div>
    </section>

    <section class="video_area video_area_2 pb-130 bg_cover" style={{backgroundImage: 'url(assets/images/slider-1.jpg)'}}>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="video_content_2 text-center mt-50">
                        <h4 class="video_title">We served more then 80,000 poor peoples</h4>
                    </div> 
                
                    <div class="video_watch  text-center mt-50">
                        <a href="https://www.youtube.com/watch?v=WKUjCCOcLFY" class="video_play video-popup"><span><i class="fa fa-play"></i></span> Watch video</a>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>



    <section class="causes_area pt-130 pb-130">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section_title text-center pb-30">
                        <img src="assets/images/section_icon.png" alt="Icon"/>
                        <h3 class="title">Latest Causes</h3>
                    </div> 
                </div>
            </div> 
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single_causes causes_bg causes_color_1 mt-30">
                        <div class="causes_image">
                            <img src="assets/images/causes-1.jpg" alt="causes"/>
                            <ul class="causes_icon">
                                <li><a href="#"><i class="fa fa-camera"></i></a></li>
                                <li><a href="#"><i class="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div class="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape"/>
                            </div>
                            <div class="causes_progress">
                                <div class="bar_inner">
                                    <div class="bar progress_line" data-width="59"><span class="percentage">59%</span></div>
                                </div>
                            </div> 
                        </div>
                        <div class="causes_content">
                            <ul class="causes_meta">
                                <li><a href="#"><i class="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                <li><a href="#"><i class="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                            </ul>
                            <h4 class="causes_title"><a href="#">Build beutifull school</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders.</p>
                            <a href="#" class="more">Read More</a>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single_causes causes_bg causes_color_2  mt-30">
                        <div class="causes_image">
                            <img src="assets/images/causes-2.jpg" alt="causes"/>
                            <ul class="causes_icon">
                                <li><a href="#"><i class="fa fa-camera"></i></a></li>
                                <li><a href="#"><i class="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div class="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape"/>
                            </div>
                            <div class="causes_progress">
                                <div class="bar_inner">
                                    <div class="bar progress_line" data-width="59"><span class="percentage">59%</span></div>
                                </div>
                            </div> 
                        </div>
                        <div class="causes_content">
                            <ul class="causes_meta">
                                <li><a href="#"><i class="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                <li><a href="#"><i class="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                            </ul>
                            <h4 class="causes_title"><a href="#">Food collect for child</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders.</p>
                            <a href="#" class="more">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single_causes causes_bg causes_color_3  mt-30">
                        <div class="causes_image">
                            <img src="assets/images/causes-3.jpg" alt="causes"/>
                            <ul class="causes_icon">
                                <li><a href="#"><i class="fa fa-camera"></i></a></li>
                                <li><a href="#"><i class="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div class="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape"/>
                            </div>
                            <div class="causes_progress">
                                <div class="bar_inner">
                                    <div class="bar progress_line" data-width="59"><span class="percentage">59%</span></div>
                                </div>
                            </div> 
                        </div>
                        <div class="causes_content">
                            <ul class="causes_meta">
                                <li><a href="#"><i class="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                <li><a href="#"><i class="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                            </ul>
                            <h4 class="causes_title"><a href="#">Home collect for child</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders.</p>
                            <a href="#" class="more">Read More</a>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single_causes causes_bg causes_color_4  mt-30">
                        <div class="causes_image">
                            <img src="assets/images/causes-4.jpg" alt="causes"/>
                            <ul class="causes_icon">
                                <li><a href="#"><i class="fa fa-camera"></i></a></li>
                                <li><a href="#"><i class="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div class="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape"/>
                            </div>
                            <div class="causes_progress">
                                <div class="bar_inner">
                                    <div class="bar progress_line" data-width="59"><span class="percentage">59%</span></div>
                                </div>
                            </div> 
                        </div>
                        <div class="causes_content">
                            <ul class="causes_meta">
                                <li><a href="#"><i class="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                <li><a href="#"><i class="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                            </ul>
                            <h4 class="causes_title"><a href="#">Save blood cancer</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders.</p>
                            <a href="#" class="more">Read More</a>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single_causes causes_bg causes_color_5  mt-30">
                        <div class="causes_image">
                            <img src="assets/images/causes-5.jpg" alt="causes"/>
                            <ul class="causes_icon">
                                <li><a href="#"><i class="fa fa-camera"></i></a></li>
                                <li><a href="#"><i class="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div class="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape"/>
                            </div>
                            <div class="causes_progress">
                                <div class="bar_inner">
                                    <div class="bar progress_line" data-width="59"><span class="percentage">59%</span></div>
                                </div>
                            </div> 
                        </div>
                        <div class="causes_content">
                            <ul class="causes_meta">
                                <li><a href="#"><i class="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                <li><a href="#"><i class="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                            </ul>
                            <h4 class="causes_title"><a href="#">Help ecosytems</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders.</p>
                            <a href="#" class="more">Read More</a>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single_causes causes_bg causes_color_6 mt-30">
                        <div class="causes_image">
                            <img src="assets/images/causes-6.jpg" alt="causes"/>
                            <ul class="causes_icon">
                                <li><a href="#"><i class="fa fa-camera"></i></a></li>
                                <li><a href="#"><i class="fa fa-video-camera"></i></a></li>
                            </ul>
                            <div class="causes_shape">
                                <img src="assets/images/shape/shape-4.png" alt="shape"/>
                            </div>
                            <div class="causes_progress">
                                <div class="bar_inner">
                                    <div class="bar progress_line" data-width="59"><span class="percentage">59%</span></div>
                                </div>
                            </div> 
                        </div>
                        <div class="causes_content">
                            <ul class="causes_meta">
                                <li><a href="#"><i class="fa fa-line-chart"></i> <span>Goal</span> : $1900</a></li>
                                <li><a href="#"><i class="fa fa-meh-o"></i> <span>Raised</span> : $900</a></li>
                            </ul>
                            <h4 class="causes_title"><a href="#">Save poor female</a></h4>
                            <p>Helpgrove is a nonproﬁt organization supported by community leaders.</p>
                            <a href="#" class="more">Read More</a>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>


    <section class="testimonial_area">
        <div class="testimonial_image_wrapper_2">
            <div class="single_testimonial_image_2">
                <img src="assets/images/testimonial-4.jpg" alt="testimonial"/>
            </div> 
            
            <div class="single_testimonial_image_2">
                <img src="assets/images/testimonial-2.jpg" alt="testimonial"/>
            </div> 
            
            <div class="single_testimonial_image_2">
                <img src="assets/images/testimonial-3.jpg" alt="testimonial"/>
            </div> 
        </div> 
        
        <div class="testimonial_content_area">
            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-lg-6">
                        <div class="testimonial_content_wrapper_2">
                           
                            <div class="single_testimonial_content text-center">
                                <i class="fa fa-quote-right"></i>
                                <h4 class="testimonial_title">Testimonial</h4>
                                <p>Helpgrove is a nonproﬁt organization supported by community leaders, corporate sponsors, churches, helpless etc. and concerned citizens </p>
                                <h6 class="author_name">Alex Heyden</h6>
                            </div> 
                           
                            <div class="single_testimonial_content text-center">
                                <i class="fa fa-quote-right"></i>
                                <h4 class="testimonial_title">Testimonial</h4>
                                <p>Helpgrove is a nonproﬁt organization supported by community leaders, corporate sponsors, churches, helpless etc. and concerned citizens </p>
                                <h6 class="author_name">Alex Heyden</h6>
                            </div> 
                           
                            <div class="single_testimonial_content text-center">
                                <i class="fa fa-quote-right"></i>
                                <h4 class="testimonial_title">Testimonial</h4>
                                <p>Helpgrove is a nonproﬁt organization supported by community leaders, corporate sponsors, churches, helpless etc. and concerned citizens </p>
                                <h6 class="author_name">Alex Heyden</h6>
                            </div> 
                            
                        </div> 
                    </div>
                </div> 
            </div> 
        </div> 
    </section>


    <section class="event_area_2 pt-130 pb-130 bg_cover" style={{backgroundImage: 'url(assets/images/gray-bg.jpg)'}}>
        <div class="event_shape_1" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}}></div>
        <div class="container">
            <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title text-center pb-60">
                            <img src="assets/images/section_icon.png" alt="Icon"/>
                            <h3 class="title">Our Latest Events</h3>
                        </div> 
                    </div>
                </div> 
            <div class="row no-gutters justify-content-center">
                <div class="col-lg-10">
                    <div class="event_active">
                        <div class="single_event_2 d-flex flex-wrap event_color-1">
                            <div class="event_image">
                                <img src="assets/images/event-1.jpg" alt="event"/>
                                <div class="event_date d-flex align-items-center justify-content-center">
                                    <img class="shape" src="assets/images/shape/shape-3.png" alt="shape"/>
                                    <span class="date"><span>13</span> Dec</span>
                                </div>
                            </div>
                            <div class="event_content_wrapper d-flex align-items-center justify-content-center">
                                <div class="event_content">
                                    <h4 class="event_title"><a href="#">4th Annual Schoolyard Dash 5K</a></h4>
                                    <p><img src="assets/images/map-2.png" alt="map"/> <span>2018/12/28 00:00 69 Warren Street, New York, USA</span> </p>
                                    <a href="#" class="more">Read More</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="single_event_2 d-flex flex-wrap event_color-2">
                            <div class="event_image">
                                <img src="assets/images/event-2.jpg" alt="event"/>
                                <div class="event_date d-flex align-items-center justify-content-center">
                                    <img class="shape" src="assets/images/shape/shape-3.png" alt="shape"/>
                                    <span class="date"><span>13</span> Dec</span>
                                </div>
                            </div>
                            <div class="event_content_wrapper d-flex align-items-center justify-content-center">
                                <div class="event_content">
                                    <h4 class="event_title"><a href="#">4th Annual Schoolyard Dash 5K</a></h4>
                                    <p><img src="assets/images/map-2.png" alt="map"/> <span>2018/12/28 00:00 69 Warren Street, New York, USA</span> </p>
                                    <a href="#" class="more">Read More</a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="single_event_2 d-flex flex-wrap event_color-3">
                            <div class="event_image">
                                <img src="assets/images/event-3.jpg" alt="event"/>
                                <div class="event_date d-flex align-items-center justify-content-center">
                                    <img class="shape" src="assets/images/shape/shape-3.png" alt="shape"/>
                                    <span class="date"><span>13</span> Dec</span>
                                </div>
                            </div>
                            <div class="event_content_wrapper d-flex align-items-center justify-content-center">
                                <div class="event_content">
                                    <h4 class="event_title"><a href="#">4th Annual Schoolyard Dash 5K</a></h4>
                                    <p><img src="assets/images/map-2.png" alt="map"/> <span>2018/12/28 00:00 69 Warren Street, New York, USA</span> </p>
                                    <a href="#" class="more">Read More</a>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div> 
        </div> 
        <div class="event_shape_2" style={{backgroundImage: 'url(assets/images/shape/shape-1.png)'}}></div>
    </section>

    <section class="volunteer_area pt-130 pb-130">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section_title text-center pb-30">
                        <img src="assets/images/section_icon.png" alt="Icon"/>
                        <h3 class="title">Our Volunteers</h3>
                    </div> 
                </div>
            </div> 
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="single_volunteer mt-30 volunteer_color_1">
                        <div class="volunteer_image">
                            <img src="assets/images/volunteer-1.jpg" alt="Volunteer"/>
                            <div class="volunteer_social">
                                <ul class="social">
                                    <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                </ul>
                            </div> 
                        </div>
                        <div class="volunteer_content d-flex align-items-center justify-content-center">
                            <div class="content_wrapper">
                                <h5 class="volunteer_name"><a href="#">Maria Noor</a></h5>
                                <p>Volunteer</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single_volunteer mt-30 volunteer_color_2">
                        <div class="volunteer_image">
                            <img src="assets/images/volunteer-2.jpg" alt="Volunteer"/>
                            <div class="volunteer_social">
                                <ul class="social">
                                    <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                </ul>
                            </div> 
                        </div>
                        <div class="volunteer_content d-flex align-items-center justify-content-center">
                            <div class="content_wrapper">
                                <h5 class="volunteer_name"><a href="#">Kiara Roy</a></h5>
                                <p>Volunteer</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single_volunteer mt-30 volunteer_color_3">
                        <div class="volunteer_image">
                            <img src="assets/images/volunteer-3.jpg" alt="Volunteer"/>
                            <div class="volunteer_social">
                                <ul class="social">
                                    <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                </ul>
                            </div> 
                        </div>
                        <div class="volunteer_content d-flex align-items-center justify-content-center">
                            <div class="content_wrapper">
                                <h5 class="volunteer_name"><a href="#">Adams Hobes</a></h5>
                                <p>Volunteer</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single_volunteer mt-30 volunteer_color_4">
                        <div class="volunteer_image">
                            <img src="assets/images/volunteer-4.jpg" alt="Volunteer"/>
                            <div class="volunteer_social">
                                <ul class="social">
                                    <li><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter-square"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                </ul>
                            </div> 
                        </div>
                        <div class="volunteer_content d-flex align-items-center justify-content-center">
                            <div class="content_wrapper">
                                <h5 class="volunteer_name"><a href="#">Adams Hobes</a></h5>
                                <p>Volunteer</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>

        </div>
  )
}
