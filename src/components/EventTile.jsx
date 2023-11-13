import imageS from "../images/RDZ3N93FSTJ1E0AJ_optimized-p-500.png"
import imageM from "../images/RDZ3N93FSTJ1E0AJ_optimized-p-800.png"
import imageL from "../images/RDZ3N93FSTJ1E0AJ_optimized-p-1600.png"
import imageL1 from "../images/RDZ3N93FSTJ1E0AJ_optimized-p-2000.png"
import imageL2 from "../images/RDZ3N93FSTJ1E0AJ_optimized.png"
import founder from "../images/EJSTCS8HFI8OP7KH_optimized.png"


const EventTile = (props) => {

    const { eventsList, onClick } = props;

    return (
        <div class="columns-2 w-row">
            {eventsList.map(event => {

                const { title, guestInfo, date, eventId } = event || {};
                const { fullName, designation, imgUrl } = guestInfo || {};

                return (
                    <div onClick={() => onClick(eventId)} class="column-4 w-col w-col-4 w-col-stack">
                        <div class="div-block-65">
                            <img
                                src="../images/RDZ3N93FSTJ1E0AJ_optimized.png"
                                loading="lazy"
                                sizes="(max-width: 479px) 90vw, (max-width: 767px) 69vw, (max-width: 991px) 56vw, (max-width: 8900px) 31vw, 2759px"
                                srcSet={`${imageS} 500w,  800w, ${imageM} 1080w, ${imageL} 1600w, ${imageL1} 2000w, ${imageL2} 2759w`}
                                alt=""
                                class="image-30"
                            />
                            <h1 class="heading-35">{date}</h1>
                            <h1 class="heading-36">{title}</h1>
                            <div
                                id="w-node-_22b68f77-8b7c-3782-d076-49e36adc00fe-3b3cf9cb"
                                class="w-layout-layout quick-stack-15 wf-layout-layout"
                            >
                                <div class="w-layout-cell">
                                    <img
                                        src={founder}
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