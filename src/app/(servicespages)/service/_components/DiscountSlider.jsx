"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import { hanldeScore } from "@/uitils/StarsHandle";
import { calculteDiscount } from "@/uitils/CalculateDiscount";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const DiscountSlider = ({ title, link, data }) => {
  console.log("data-->", data);

  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 2000,
      spaceBetween: 25,
      navigation: {
        nextEl: ".package-card-slider-next",
        prevEl: ".package-card-slider-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="tour-pack-section">
        <div className="container">
          <div className="row mb-50">
            <div className="col-lg-12">
              <div className="section-title2 text-center">
                <div className="eg-section-tag two">
                  <span>{link}</span>
                </div>
                <h2 className="text-black ar">{title}</h2>
              </div>
            </div>
          </div>
          <div className="package-card-slider-wrap">
            <div className="row">
              <div className="col-lg-12">
                {data && data?.length > 0 && (
                  <Swiper
                    {...settings}
                    className="swiper package-card-slider mb-60"
                  >
                    <div className="swiper-wrapper">
                      {data?.map((item, index) => {
                        return (
                          <SwiperSlide className="swiper-slide">
                            <div className="package-card3">
                              <Link
                                href={`/service/${link}`}
                                className="package-card-img"
                              >
                                <img
                                  src={
                                    item?.images[0]
                                      ? item?.images[0]
                                      : "/assets/img/home2/package-card3-img1.png"
                                  }
                                  //   src="/assets/img/home2/package-card3-img1.png"
                                  alt=""
                                />
                                <div className="batch">
                                  <span>
                                    {item?.discount > 0 ? "Discount" : "Offer"}
                                  </span>
                                </div>
                              </Link>
                              <div className="package-card-content">
                                <div className="card-content-top">
                                  <div className="rating-area">
                                    <ul dir="ltr" className="rating">
                                      {hanldeScore(item?.stars)}

                                      {/* <li>
                                        <i className="bi bi-star-fill" />
                                      </li> */}
                                    </ul>
                                    <span className=" text-lg  ar">
                                      {item?.stars} نجوم
                                    </span>
                                  </div>
                                  <h5>
                                    <Link href={`/service/${link}`}>
                                      {item?.title}
                                    </Link>
                                  </h5>

                                  {item?.offer > 0 && (
                                    <h6 className="ar text-md text-[#63AB45] mb-2 -mt-2">
                                      {" "}
                                      عرض {item?.offer} + {item?.offerplus}{" "}
                                      مجانا
                                    </h6>
                                  )}

                                  <ul className="feature-list ar">
                                    <li>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={14}
                                        viewBox="0 0 14 14"
                                      >
                                        <g clipPath="url(#clip0_1225_43)">
                                          <path d="M11.9383 6.40178V2.87087C11.9383 2.03169 11.2511 1.33856 10.4118 1.33856H10.2217V1.0992C10.2217 0.500453 9.73629 0.0150575 9.13755 0.0150575C8.5388 0.0150575 8.0534 0.500453 8.0534 1.0992V1.33856H4.07821V1.0992C4.07821 0.492141 3.58607 0 2.97901 0C2.37195 0 1.87981 0.492141 1.87981 1.0992V1.33856H1.71553C0.87631 1.33856 0.193359 2.03169 0.193359 2.87087V10.9786C0.193359 11.8178 0.87631 12.5113 1.71553 12.5113H6.4916C6.88058 12.9765 7.36678 13.351 7.916 13.6082C8.46522 13.8654 9.06412 13.9991 9.67058 14C11.9503 14 13.8073 12.1426 13.8073 9.86282C13.8074 8.41786 13.0525 7.14122 11.9383 6.40178ZM8.6557 1.0992C8.65107 0.836899 8.85991 0.620492 9.12222 0.615854C9.12643 0.615794 9.13065 0.615763 9.13487 0.615794C9.39964 0.612993 9.61659 0.825365 9.61939 1.09017C9.61942 1.09318 9.61942 1.09619 9.61939 1.0992V2.27212H8.6557V1.0992ZM2.48211 1.0992C2.48497 0.82934 2.70607 0.612903 2.97593 0.615763C2.9764 0.615758 2.97686 0.615768 2.97732 0.615794C3.24818 0.615794 3.47591 0.828376 3.47591 1.0992V2.27212H2.48211V1.0992ZM0.795661 2.87087C0.795661 2.36376 1.20842 1.94086 1.71553 1.94086H1.87981V2.5858C1.87981 2.7521 2.0187 2.87443 2.18502 2.87443H3.76968C3.93597 2.87443 4.07821 2.7521 4.07821 2.5858V1.94086H8.0534V2.5858C8.0523 2.62405 8.05903 2.66211 8.07317 2.69766C8.08732 2.7332 8.10858 2.76548 8.13566 2.79251C8.16273 2.81954 8.19505 2.84075 8.23062 2.85484C8.26619 2.86893 8.30427 2.87559 8.34251 2.87443H9.92716C9.96569 2.87571 10.0041 2.86916 10.04 2.85519C10.0759 2.84121 10.1086 2.8201 10.1362 2.79312C10.1637 2.76614 10.1855 2.73386 10.2002 2.69822C10.2149 2.66259 10.2222 2.62435 10.2217 2.5858V1.94086H10.4118C10.9223 1.94601 11.334 2.36033 11.3359 2.87087V3.83811H0.795661V2.87087ZM1.71553 11.909C1.20842 11.909 0.795661 11.4857 0.795661 10.9786V4.44041H11.3359V6.07428C10.8117 5.84412 10.2454 5.72538 9.67287 5.7256C7.39316 5.7256 5.53725 7.58572 5.53725 9.8655C5.5361 10.5817 5.72124 11.2859 6.07448 11.909H1.71553ZM9.67058 13.3923C7.71979 13.3923 6.13835 11.8109 6.13835 9.86011C6.13835 7.90931 7.71979 6.32788 9.67058 6.32788C11.6214 6.32788 13.2028 7.90931 13.2028 9.86011V9.86014C13.2006 11.81 11.6205 13.3901 9.67058 13.3923Z" />
                                          <path d="M11.0896 9.8611H9.77027V8.04908C9.77027 7.88275 9.63545 7.74792 9.46912 7.74792C9.30279 7.74792 9.16797 7.88275 9.16797 8.04908V10.162C9.16923 10.2424 9.20213 10.3192 9.25955 10.3756C9.31697 10.432 9.39429 10.4636 9.47478 10.4634H11.0896C11.2559 10.4634 11.3908 10.3286 11.3908 10.1623C11.3908 9.99593 11.2559 9.8611 11.0896 9.8611Z" />
                                        </g>
                                      </svg>
                                      {item?.days} Days
                                    </li>
                                    <li>
                                      <svg
                                        className="with-stroke"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={14}
                                        viewBox="0 0 14 14"
                                      >
                                        <g clipPath="url(#clip0_1225_49)">
                                          <path
                                            d="M6.99999 13.5898C5.35937 11.1289 2.48828 7.79299 2.48828 4.9219C2.48828 2.43415 4.51223 0.410197 6.99999 0.410197C9.48774 0.410197 11.5117 2.43415 11.5117 4.9219C11.5117 7.79299 8.64061 11.1289 6.99999 13.5898Z"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M6.99999 6.97266C5.86925 6.97266 4.94922 6.05262 4.94922 4.92188C4.94922 3.79114 5.86925 2.87111 6.99999 2.87111C8.13074 2.87111 9.05077 3.79114 9.05077 4.92188C9.05077 6.05262 8.13074 6.97266 6.99999 6.97266Z"
                                            strokeMiterlimit={10}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </g>
                                      </svg>
                                      {item?.location}
                                    </li>
                                    <li className="ar">
                                      {/* <svg
                className="with-stroke"
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 14 14"
              >
                <g clipPath="url(#clip0_1225_55)">
                  <path
                    d="M2.07812 4.19617e-05V14"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M2.07812 1.23049C2.07812 1.23049 3.30859 2.0508 4.53906 2.0508C6.50515 2.0508 7.49482 0.41018 9.46092 0.41018C10.6914 0.41018 11.9218 1.23049 11.9218 1.23049V7.79297C11.9218 7.79297 10.6914 6.97266 9.46092 6.97266C7.49482 6.97266 6.50515 8.61328 4.53906 8.61328C3.30859 8.61328 2.07812 7.79297 2.07812 7.79297"
                    strokeMiterlimit={10}
                  />
                </g>
              </svg> */}
                                      {item.childbeds} سرير اطفال
                                    </li>

                                    <li className="ar">
                                      {item.adultbeds} سرير كبير
                                    </li>
                                  </ul>
                                </div>
                                <div className="card-content-bottom  ar">
                                  <div className="price-area">
                                    <span className="title ar">
                                      تبدأ الأسعار من:
                                    </span>

                                    {item?.discount > 0 ? (
                                      <h6>
                                        <sub>$</sub>
                                        {calculteDiscount(
                                          item.price,
                                          item.discount
                                        )}

                                        <del>${item?.price}</del>
                                      </h6>
                                    ) : (
                                      <h6>${item?.price}</h6>
                                    )}

                                    <span className="ar  mt-2">
                                      للغرفة الواحدة
                                    </span>
                                  </div>
                                  <Link
                                    href={`/service/${link}/${item?._id}`}
                                    className="primary-btn2"
                                  >
                                    احجز الان
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={18}
                                      height={18}
                                      viewBox="0 0 18 18"
                                      fill="none"
                                    >
                                      <path d="M8.15624 10.2261L7.70276 12.3534L5.60722 18L6.85097 17.7928L12.6612 10.1948C13.4812 10.1662 14.2764 10.1222 14.9674 10.054C18.1643 9.73783 17.9985 8.99997 17.9985 8.99997C17.9985 8.99997 18.1643 8.26211 14.9674 7.94594C14.2764 7.87745 13.4811 7.8335 12.6611 7.80518L6.851 0.206972L5.60722 -5.41705e-07L7.70276 5.64663L8.15624 7.77386C7.0917 7.78979 6.37132 7.81403 6.37132 7.81403C6.37132 7.81403 4.90278 7.84793 2.63059 8.35988L0.778036 5.79016L0.000253424 5.79016L0.554115 8.91458C0.454429 8.94514 0.454429 9.05483 0.554115 9.08539L0.000253144 12.2098L0.778036 12.2098L2.63059 9.64035C4.90278 10.1523 6.37132 10.1857 6.37132 10.1857C6.37132 10.1857 7.0917 10.2102 8.15624 10.2261Z" />
                                      <path d="M12.0703 11.9318L12.0703 12.7706L8.97041 12.7706L8.97041 11.9318L12.0703 11.9318ZM12.0703 5.23292L12.0703 6.0714L8.97059 6.0714L8.97059 5.23292L12.0703 5.23292ZM9.97892 14.7465L9.97892 15.585L7.11389 15.585L7.11389 14.7465L9.97892 14.7465ZM9.97892 2.41846L9.97892 3.2572L7.11389 3.2572L7.11389 2.41846L9.97892 2.41846Z" />
                                    </svg>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </div>
                  </Swiper>
                )}

                <div className="slide-and-view-btn-grp style-2">
                  <div className="slider-btn-grp3">
                    <div className="slider-btn package-card-slider-prev ar">
                      <i className="bi bi-arrow-left ar" />
                      <span>السابق</span>
                    </div>
                    <Link
                      href={`/service/${link}?all=true`}
                      className="secondary-btn2 ar"
                    >
                      مشاهدة جميع {title}
                    </Link>
                    <div className="slider-btn package-card-slider-next ar  ">
                      <span>التالي</span>
                      <i className="bi bi-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountSlider;
