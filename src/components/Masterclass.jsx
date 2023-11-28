const Materclass = (props) => {

  const {title, dateInfo} = props;

  const {monthShort, date} = dateInfo || {};

  const formattedDate = `${monthShort} ${date}`

  return (
    <section class="section-26">
      <div class="div-contact">
        <div class="div-block-80">
          <h2 class="heading-61">
            <strong class="bold-text-13">MASTERCLASS ON</strong>
          </h2>
          <h1 class="heading-62">
            <strong class="bold-text-12">
            {title}
            </strong>
          </h1>
          <div class="div-block-83">
            <div class="div-block-81">
              <h1 class="heading-64"></h1>
            </div>
            <div class="div-block-82">
              <h3 class="heading-63">
                <strong class="bold-text-11">{formattedDate}</strong>
              </h3>
            </div>
          </div>
          <div class="div-block-84">
            <a href="#" class="button-16 w-button">
              <strong class="bold-text-22">Register now for FREE </strong>
              <span class="text-span-36">
                <strong class="bold-text-23">₹999</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materclass;