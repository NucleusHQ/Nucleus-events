import dateDec23 from "../images/date-dec-23.svg";

const EventCard = (props) => {

  const {title, guestInfo, dateInfo, bannerImage, onRegisterClick} = props;

  const {fullName, designation, imgUrl} = guestInfo || {};
  const {startTime, endTime} = dateInfo || {};

  const formattedTimeRange = `${startTime} - ${endTime}`;


  return (
    <div className="div-block-70">
      <div className="w-row">
        <div className="w-col w-col-7 w-col-stack w-col-small-small-stack">
          <img
            src={bannerImage}
            sizes="100vw"
            alt=""
            className="image-33"
          />
          {/* <img src={screenshot2S} loading="lazy" alt="" className="image-34" /> */}
          <h1 className="heading-43">
            <strong className="bold-text-14">{title}</strong>
          </h1>
        </div>
        <div className="w-col w-col-5 w-col-stack w-col-small-small-stack">
          <div
            id="w-node-_1bf57912-b54e-506e-a515-7ef5ef21a6ee-bc0b6753"
            className="w-layout-layout quick-stack-16 wf-layout-layout"
          >
            <div className="w-layout-cell">
              <img src={dateDec23} loading="lazy" width="104" alt="" className="w-layout-cell-image"/>
            </div>
            <div className="w-layout-cell-2">
              <h1 className="heading-44">Time</h1>
              <h1 className="heading-45">{formattedTimeRange}</h1>
            </div>
          </div>
          <h1 className="heading-46">SPEAKER</h1>
          <div
            id="w-node-_1bf57912-b54e-506e-a515-7ef5ef21a6f8-bc0b6753"
            className="w-layout-layout quick-stack-17 wf-layout-layout"
          >
            <div className="w-layout-cell-4">
              <img
                src={guestInfo.src}
                loading="lazy"
                width="51"
                sizes="(max-width: 1279px) 51px, 48px"
                alt=""
                srcSet={`${guestInfo.src} 500w, ${guestInfo.src} 762w`}
                className="image-35"
              />
            </div>
            <div className="w-layout-cell-3">
              <h1 className="heading-47">{fullName}</h1>
              <div className="text-block-48">{designation}</div>
            </div>
          </div>
          {/* <h1 className="heading-46">SPREAD THE WORD</h1> */}
          {/* <div className="columns-3 w-row">
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
          </div> */}
          <a onClick={onRegisterClick}className="button-15 w-button">
            Register now for <span>FREE</span>{" "}
            <span className="text-span-33">₹999</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
