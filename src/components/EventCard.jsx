import banner from "../images/banner.png";
import bannerSmall from "../images/banner-p-500.png";
import bannerMedium from "../images/banner-p-800.png";
import bannerLarge from "../images/banner-p-1080.png";
import bannerL1 from "../images/banner-p-1600.png";
import bannerL2 from "../images/banner-p-2000.png";
import screenshot2S from "../images/Screenshot-2023-10-23-062019.png";
import screenshot3S from "../images/Screenshot-1.png";
import optimizedImageS from "../images/1RQ6E9OJ20YRN5WU_optimized.png";
import optimizedImageM from "../images/1RQ6E9OJ20YRN5WU_optimized-p-500.png";
import optimizedImageL from "../images/1RQ6E9OJ20YRN5WU_optimized.png";
import rawpixel500 from "../images/image-from-rawpixel-id-3344470-original-p-500.png";
import rawpixel800 from "../images/image-from-rawpixel-id-3344470-original-p-800.png";
import rawpixel1080 from "../images/image-from-rawpixel-id-3344470-original-p-1080.png";
import rawpixel1600 from "../images/image-from-rawpixel-id-3344470-original-p-1600.png";
import rawpixel2000 from "../images/image-from-rawpixel-id-3344470-original-p-2000.png";
import rawpixel2600 from "../images/image-from-rawpixel-id-3344470-original-p-2600.png";
import rawpixel3000 from "../images/image-from-rawpixel-id-3344470-original.png";

const EventCard = () => {
  return (
    <div className="div-block-70">
      <div className="w-row">
        <div className="w-col w-col-7 w-col-stack w-col-small-small-stack">
          <img
            src={banner}
            loading="lazy"
            sizes="100vw"
            srcSet={`${bannerSmall} 500w, ${bannerMedium} 800w, ${bannerLarge} 1080w, ${bannerL1} 1600w, ${bannerL2} 2000w, ${banner} 2759w`}
            alt=""
            className="image-33"
          />
          <img src={screenshot2S} loading="lazy" alt="" className="image-34" />
          <h1 className="heading-43">
            <strong className="bold-text-14">
              Product Teardown Fundamentals: Masterclass for Aspiring Product
              Managers
            </strong>
          </h1>
        </div>
        <div className="w-col w-col-5 w-col-stack w-col-small-small-stack">
          <div
            id="w-node-_1bf57912-b54e-506e-a515-7ef5ef21a6ee-bc0b6753"
            className="w-layout-layout quick-stack-16 wf-layout-layout"
          >
            <div className="w-layout-cell">
              <img src={screenshot3S} loading="lazy" width="104" alt="" className="w-layout-cell-image"/>
            </div>
            <div className="w-layout-cell-2">
              <h1 className="heading-44">Time</h1>
              <h1 className="heading-45">8:00 PM - 9:30 PM</h1>
            </div>
          </div>
          <h1 className="heading-46">SPEAKER</h1>
          <div
            id="w-node-_1bf57912-b54e-506e-a515-7ef5ef21a6f8-bc0b6753"
            className="w-layout-layout quick-stack-17 wf-layout-layout"
          >
            <div className="w-layout-cell-4">
              <img
                src={optimizedImageS}
                loading="lazy"
                width="51"
                sizes="(max-width: 1279px) 51px, 48px"
                alt=""
                srcSet={`${optimizedImageM} 500w, ${optimizedImageL} 762w`}
                className="image-35"
              />
            </div>
            <div className="w-layout-cell-3">
              <h1 className="heading-47">Navneet Sharma</h1>
              <div className="text-block-48">
                Co-founder @Airtribe | Ex-Director of Product @ Unacademy
              </div>
            </div>
          </div>
          <h1 className="heading-46">SPREAD THE WORD</h1>
          <div className="columns-3 w-row">
            <div className="column-6 w-col w-col-2 w-col-medium-3 w-col-small-3 w-col-tiny-3">
              <img
                src="../images/image-from-rawpixel-id-3344470-original.png"
                loading="lazy"
                width="44"
                sizes="(max-width: 479px) 21vw, (max-width: 1279px) 44px, (max-width: 1439px) 3vw, 44px"
                alt=""
                srcSet={`
                          ${rawpixel500} 500w, 
                          ${rawpixel800} 800w, 
                          ${rawpixel1080} 1080w, 
                          ${rawpixel1600} 1600w, 
                          ${rawpixel2000} 2000w, 
                          ${rawpixel2600} 2600w, 
                          ${rawpixel3000} 3000w`}
                className="image-43"
              />
            </div>
            <div className="column-6 w-col w-col-2 w-col-medium-3 w-col-small-3 w-col-tiny-3">
              <img
                src="../images/image-from-rawpixel-id-3344470-original.png"
                loading="lazy"
                width="44"
                sizes="(max-width: 479px) 21vw, (max-width: 1279px) 44px, (max-width: 1439px) 3vw, 44px"
                alt=""
                srcSet={`
                          ${rawpixel500} 500w, 
                          ${rawpixel800} 800w, 
                          ${rawpixel1080} 1080w, 
                          ${rawpixel1600} 1600w, 
                          ${rawpixel2000} 2000w, 
                          ${rawpixel2600} 2600w, 
                          ${rawpixel3000} 3000w`}
                className="image-43"
              />
            </div>
          </div>
          <a href="#" className="button-15 w-button">
            Register now for <span>₹299</span>{" "}
            <span className="text-span-33">₹999</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
