import download from "../images/download.svg"
import live from "../images/live.png"
import month from "../images/24oct.png"
import image from "../images/Screenshot-2023-10-24-114611.png"
import workshop from "../images/workshop-resources.15ffb2a.svg"

const AboutEvent = (props) => {

  const { aboutInfo, whyInfo, targetAudience, takeaways, dateInfo } = props;

  const { startTime, endTime } = dateInfo || {};

  const formattedTimeRange = `${startTime} - ${endTime}`;

  return (
    <section class="section-23">
      <div class="div-block-71">
      <h1 class="heading-49">
          <strong>What you will learn from the event </strong>
        </h1>
        <div class="columns-4 w-row learnings">
          {takeaways.map((item, index) => {
            return (
              <div class="w-col w-col-4 w-col-stack learning-block">
                <div class="div-block-72">
                  <h1 class="heading-51">{`0` + String(Number(index) + 1)}</h1>
                  <h1 class="heading-52">{item}</h1>
                </div>
              </div>
            )
          })}
        </div>
        <h1 class="heading-49">
          <strong class="bold-text-15">Who Should Join</strong>
        </h1>
        <div class="w-row">
          <div class="w-col w-col-6">
            {targetAudience.slice(0, 2).map(item => {
              return <div
                id="w-node-c6bf7205-2f24-d6ec-5c60-a979c3be9dd1-bc0b6753"
                class="w-layout-layout quick-stack-18 wf-layout-layout"
              >
                <div class="w-layout-cell w-layout-cell-4">
                  <img
                    src={download}
                    loading="lazy"
                    width="48"
                    alt=""
                    class="image-36"
                  />
                </div>
                <div class="w-layout-cell w-layout-cell-3">
                  <h1 class="heading-50">
                    <strong class="bold-text-16">{item}</strong>
                  </h1>
                </div>
              </div>
            })}
          </div>
          <div class="w-col w-col-6">
            {targetAudience.slice(2, 4).map(item => {
              return <div
                id="w-node-c6bf7205-2f24-d6ec-5c60-a979c3be9dd1-bc0b6753"
                class="w-layout-layout quick-stack-18 wf-layout-layout"
              >
                <div class="w-layout-cell w-layout-cell-4">
                  <img
                    src={download}
                    loading="lazy"
                    width="48"
                    alt=""
                    class="image-36"
                  />
                </div>
                <div class="w-layout-cell w-layout-cell-3">
                  <h1 class="heading-50">
                    <strong class="bold-text-16">{item}</strong>
                  </h1>
                </div>
              </div>
            })}
          </div>
        </div>
     

        <AboutEventSection aboutInfo={aboutInfo} />
        <WhyEventSection whyInfo={whyInfo}/>
        <h1 class="heading-49">
          <strong>Schedule</strong>
        </h1>
        <div class="div-block-73">
          <div class="w-row">
            <div class="column-13 w-col w-col-2 w-col-medium-4 w-col-small-4 w-col-tiny-4">
              <img
                src={month}
                loading="lazy"
                width="85"
                alt=""
                class="image-37"
              />
            </div>
            <div class="w-col w-col-8 w-col-medium-4 w-col-small-4 w-col-tiny-4">
              <h1 class="heading-53">
                <strong>Event</strong>
              </h1>
              <h1 class="heading-54">
                <span class="text-span-34">
                  <strong class="bold-text-17">  </strong>
                </span>
                <strong class="bold-text-18">{formattedTimeRange}</strong>
              </h1>
            </div>
            <div class="column-10 w-col w-col-2 w-col-medium-4 w-col-small-4 w-col-tiny-4">
              <img
                src={live}
                loading="lazy"
                alt=""
                class="image-38"
              />
            </div>
          </div>
        </div>
        <div class="div-block-74">
          <div class="w-row">
            <div class="column-8 w-col w-col-2">
              <img
                src={image}
                loading="lazy"
                alt=""
                class="image-37"
              />
            </div>
            <div class="column-7 w-col w-col-6">
              <h1 class="heading-55">
                <strong class="bold-text-26">
                  Unlock bonus resources on attending the session!
                </strong>
              </h1>
              <div class="text-block-49">
                Get access to handpicked resources and reads that will take your
                expertise to the next level.
              </div>
            </div>
            <div class="column-12 w-col w-col-4">
              <img
                src={workshop}
                loading="lazy"
                alt=""
                class="image-38"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;



const AboutEventSection = ({ aboutInfo }) => {
  return (
    <div>
      <h1 class="heading-48">About the Event</h1>
      {aboutInfo.map(item => {
        return <p dangerouslySetInnerHTML={{ __html: item }} class="paragraph-27"></p>
      })}
    </div>
  )
}


const WhyEventSection = ({whyInfo}) => {
  return (
    <div>
      <h1 class="heading-65">{whyInfo.title}</h1>
      {whyInfo.content.map(item => {
        return <p dangerouslySetInnerHTML={{ __html: item }} class="paragraph-27"></p>
      })}
    </div>
  )
}