import image from "../images/pic.jpg";
import imageS from "../images/pic-p-500.jpg";

const PastEvents = () => {
  return (
    <div className="past-events">
      <div>
        <h1 class="heading-39">
          Watch our curated library of past events for{" "}
          <span class="text-span-25">FREE</span>
        </h1>
      </div>
      <div className="event">
        <div className="past-event-container">
          <div className="image-container">
            <img
              alt="instructor-image"
              className="lazyLoad isLoaded"
              src="https://space-mycohort-web.sgp1.cdn.digitaloceanspaces.com/2023/05/08/G9V7DQN0RG78I5VY.jpg"
            />
            <div className="name-role-container">
              <div className="name">Taruna Manchanda</div>
              <div className="role">Senior Product Manager, LinkedIn</div>
            </div>
          </div>
          <div className="event-details">
            <div>
              <div className="tags-container">
                <div
                  data-v-79862d12=""
                  className="event-tags-container over-card"
                >
                  <div
                    data-v-79862d12=""
                    className="tag"
                    style={{
                      background: "rgb(237, 232, 247)",
                      color: "rgb(83, 50, 152)",
                    }}
                  >
                    Product
                  </div>
                </div>
              </div>
              <div className="event-title">
                Mastering Communication as a Product Manager
              </div>
              <div className="event-description">
                <p>
                  Are you wondering what it takes to be a product manager who
                  communicates exceptionally well?
                </p>
                <p></p>
                <p>
                  Join us for a comprehensive masterclass on mastering
                  communication as a product manager by Taruna Manchanda, Senior
                  Product Manager at LinkedIn.
                </p>
                <p></p>
                <p>
                  Taruna will help you navigate communication with your product
                  team and other stakeholders with relevant frameworks, tips,
                  and tricks from her experience as a PM.
                </p>
                <p></p>
                <p>
                  Don't miss this opportunity to take your communication skills
                  to the next level. Register now!
                </p>
                <p>
                  <br />
                  <em>
                    Join our WhatsApp group to stay updated with notifications
                    about all upcoming sessions around Product Management-{" "}
                  </em>
                  <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    href="https://chat.whatsapp.com/H2vqi7WPMLs9eujzbm0Rpt"
                  >
                    <em>link.</em>
                  </a>
                </p>
              </div>
            </div>
            <div>
              <div className="instructor-details mobile">
                <div className="instructor-image">
                  <img
                    src="https://space-mycohort-web.sgp1.cdn.digitaloceanspaces.com/2023/05/08/G9V7DQN0RG78I5VY.jpg"
                    alt="instructor-image"
                    className="lazyLoad"
                  />
                </div>
                <div>
                  <div className="instructor-name">Taruna Manchanda</div>
                  <div className="instructor-role">
                    Senior Product Manager, LinkedIn
                  </div>
                </div>
              </div>
            </div>
            <button
              data-v-4a3aad02=""
              className="button-container default filled primary"
            >
              <div data-v-4a3aad02="" className="left-icon">
                {/* <img
                  data-v-4a3aad02=""
                  src="/_nuxt/img/zoom.91f4353.svg"
                  alt="icon"
                  className="icon"
                /> */}
                <span class="text-span-32"> </span>
              </div>
              <div data-v-4a3aad02="">Access recording</div>
              {/* Add any additional elements inside this button */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
