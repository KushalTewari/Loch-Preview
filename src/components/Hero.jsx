import React from "react";
import Typography from "./Typography";
import OwlCarousel from "react-owl-carousel";
import { SmallBarChart, SmallBellIcon } from "../assets/CommonSVGs";
import Cohorts from "../assets/images/Cohorts.png";
import TypographyRight from "./TypographyRight";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex flex--veryLoose flex--alignCenter flex--wrap">
        <div className="flex-item flex-item--50 flex-item--M100">
          <Typography />
        </div>
        <div className="flex-item flex-item--50 flex-item--M100">
          <div className="carousel__container">
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={14}
              nav={false}
              items={1.6}
              dots={false}
            >
              <div className="item">
                <div className="carousel__card">
                  <div className="flex flex--alignCenter flex--justifyBetween">
                    <div className="flex-item">{SmallBellIcon}</div>
                    <div className="flex-item">
                      <button>Save</button>
                    </div>
                  </div>
                  <h3>We’ll be sending notifications to you here</h3>
                  <input type="email" placeholder="hello@gmail.com" />
                </div>
              </div>
              <div className="item">
                <div className="carousel__card">
                  <div className="flex flex--alignCenter flex--justifyBetween">
                    <div className="flex-item">{SmallBarChart}</div>
                    <div className="flex-item">
                      <input
                        type="checkbox"
                        name="second"
                        id="2"
                        checked={true}
                      />
                    </div>
                  </div>
                  <h3>Notify me when any wallets move more than </h3>
                  <select>
                    <option value={1000}>$1000</option>
                    <option value={2000}>$2000</option>
                    <option value={3000}>$3000</option>
                  </select>
                </div>
              </div>
              <div className="item">
                <div className="carousel__card">
                  <div className="flex flex--alignCenter flex--justifyBetween">
                    <div className="flex-item">{SmallBarChart}</div>
                    <div className="flex-item">
                      <input
                        type="checkbox"
                        name="third"
                        id="3"
                        checked={true}
                      />
                    </div>
                  </div>
                  <h3>Notify me when any wallet dormant for</h3>
                  <select>
                    <option value={30}>{`> 30 days`}</option>
                    <option value={45}>{`> 45 days`}</option>
                    <option value={50}>{`> 50 days`}</option>
                  </select>
                </div>
              </div>
            </OwlCarousel>
            ;
          </div>
        </div>
      </div>
      <div className="hero__center">
        <div className="flex flex--veryLoose flex--alignCenter  flex--wrap">
          <div className="flex-item flex-item--50 flex-item--M100">
            <img src={Cohorts} alt="" />
          </div>
          <div className="flex-item flex-item--50 flex-item--M100">
            <TypographyRight />
          </div>
        </div>
      </div>

      <div className="hero__testimonial">
        <h3>Testimonial</h3>
        <div className="testimonial__container">
          <OwlCarousel
            className="owl-theme"
            loop={true}
            margin={14}
            nav={false}
            items={1.6}
            dots={false}
          >
            <div className="item">
              <div className="testimonial__card">
                <div className="testimonial__card-header">
                  <h5>Jack F</h5>
                  <h6>Ex Blackrock PM</h6>
                </div>
                <p>
                  “Love how Loch integrates portfolio analytics and whale
                  watching into one unified app.”
                </p>
              </div>
            </div>

            <div className="item">
              <div className="testimonial__card">
                <div className="testimonial__card-header">
                  <h5>Yash P</h5>
                  <h6>Research, 3poch Crypto Hedge Fund</h6>
                </div>
                <p>
                  “I use Loch everyday now. I don't think I could analyze crypto
                  whale trends markets without it. I'm addicted!”
                </p>
              </div>
            </div>

            <div className="item">
              <div className="testimonial__card">
                <div className="testimonial__card-header">
                  <h5>Shiv S</h5>
                  <h6>Co-Founder Magik Labs</h6>
                </div>
                <p>
                  “Managing my own portfolio is helpful and well designed.
                  What’s really interesting is watching the whales though.”
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
