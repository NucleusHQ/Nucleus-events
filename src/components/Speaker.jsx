import image1 from "../images/brown_dots.5935977.svg";
import image2 from "../images/EJSTCS8HFI8OP7KH_optimized.png";

const Speaker = (props) => {

  const {guestInfo} = props;

  return (
    <section class="section-27">
      <div class="div-block-76">
        <h1 class="heading-57">
          <strong>Speaker for the session</strong>
        </h1>
        <img
          src={image1}
          loading="lazy"
          width="10"
          alt=""
          class="image-47"
        />
        <img
          src={guestInfo.src}
          loading="lazy"
          width="270"
          alt=""
          class="image-39"
        />
        <h1 class="heading-58">
          <strong class="bold-text-21">{guestInfo.fullName}</strong>
        </h1>
        <div class="text-block-50">{guestInfo.designation}</div>
        <div dangerouslySetInnerHTML={{__html: guestInfo.bio}} class="text-block-50"></div>
      </div>
    </section>
  );
};

export default Speaker;

