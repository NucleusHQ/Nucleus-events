const EventTile = (props) => {

    const { eventsList, onClick } = props;

    const founderUrl = require("../images/harish.jpeg");


    return (
        <div class="columns-2 w-row event-row">
            {eventsList.filter(item => item.isUp).map(event => {

                const { title, guestInfo, dateInfo, eventId } = event || {};
                const bannerImage = require(`../images/banner_${eventId}.png`);

                const { month, day, date, startTime, endTime} = dateInfo || {};
                const { fullName, designation, imgUrl } = guestInfo || {};

                const formattedDate = `${month} ${date}, ${day} | ${startTime}`

                return (
                    <div onClick={() => onClick(eventId)} class="column-4 w-col w-col-4 w-col-stack eventTile">
                        <div class="div-block-65">
                            <img
                                src={bannerImage}
                                alt=""
                                class="image-30"
                            />
                            <h1 class="heading-35 contrast">{formattedDate}</h1>
                            <h1 class="heading-36">{title}</h1>
                            <div
                                id="w-node-_22b68f77-8b7c-3782-d076-49e36adc00fe-3b3cf9cb"
                                class="w-layout-layout quick-stack-15 wf-layout-layout"
                            >
                                <div class="w-layout-cell">
                                    <img
                                        src={founderUrl}
                                        loading="lazy"
                                        width="86"
                                        alt=""
                                        class="image-29"
                                    />
                                </div>
                                <div class="w-layout-cell">
                                    <h1 class="heading-37">{fullName}</h1>
                                    <div class="text-block-44">
                                        {designation}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>)
}

export default EventTile;