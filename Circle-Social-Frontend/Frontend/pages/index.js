import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>circle social</title>
          <meta property="og:title" content="circle social" />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar">
          <img
            alt="image"
            src="/make%20it%20suitable%20for%20grey%20background%20background%20removed-200w.png"
            className="home-image"
          />
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          ></div>
          <div className="home-container1"></div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group"></div>
          <div className="home-container2">
            <button className="home-view button">Connect Wallet  🦊</button>
            <div className="home-container3"></div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="button home-button">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div className="home-container4"></div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container5">
                <span className="home-logo">Character</span>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text">About</span>
                <span className="home-text01">Features</span>
                <span className="home-text02">Pricing</span>
                <span className="home-text03">Team</span>
                <span className="home-text04">Blog</span>
              </nav>
              <div className="home-container6">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <section className="home-hero">
          <div className="home-heading">
            <h2 className="home-header">connect, share and vibe</h2>
            <p className="home-caption">
              <span className="home-text05">
                a social media spot where you can vibe with like-minded peeps
                without censorship or privacy drama! 🤟
              </span>
              <br></br>
              <br></br>
              <span>sounds cool? 😎</span>
              <br></br>
              <span>connect your wallet 🦊</span>
              <br></br>
              <span>and</span>
            </p>
          </div>
          <div className="home-buttons">
            <button className="home-view1 button">unlock the circle!</button>
          </div>
        </section>
        <section className="home-description">
          <img
            alt="image"
            src="/hero-divider-1500w.png"
            className="home-divider-image"
          />
          <div className="home-container7">
            <div className="home-description1">
              <div className="home-content">
                <p className="home-paragraph">
                  We live in a world where social media is censored and privacy
                  is compromised ☹️
                </p>
                <p className="home-paragraph1">
                  <span className="home-text13">
                    circle steps up to break the chains with a community that is
                    100% pure and 420% epic 🔥
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    and yes, we 💚 open source
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
              <div className="home-links"></div>
            </div>
          </div>
        </section>
        <section className="home-cards">
          <div className="home-row">
            <div className="home-card">
              <div className="home-avatar">
                <img
                  alt="image"
                  src="/Avatars/avatar.svg"
                  className="home-avatar1"
                />
              </div>
              <div className="home-main">
                <div className="home-content1">
                  <h2 className="home-header01">unleash Your voice!</h2>
                  <p className="home-description2">
                    📣 no censorship, just pure self-expression. 💥 drop your
                    takes, engage in fiery convos, and show the world your
                    unique flavor. it&apos;s time to make some noise and own
                    your space! 🌟
                  </p>
                </div>
              </div>
            </div>
            <div className="home-card1">
              <div className="home-avatar2">
                <span>🔒💪</span>
              </div>
              <div className="home-main1">
                <div className="home-content2">
                  <h2 className="home-header02">ironclad privacy!</h2>
                  <p className="home-description3">
                    <span>
                      at circle, we&apos;ve got your back when it comes to
                      privacy. your data stays with you, safe and sound. no
                      creepy algorithms or data-hungry corps. with 🔒 top-notch
                      encryption and 🌐 decentralized architecture, your info is
                      locked down tight. be yourself, worry-free. your privacy,
                      your rules.
                    </span>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-join-us">
          <div className="home-content3">
            <div className="home-main2">
              <div className="home-heading1">
                <h2 className="home-header03">join the circle</h2>
              </div>
              <button className="home-view2 button">connect wallet 🦊</button>
            </div>
            <img alt="image" src="/group%202273.svg" className="home-image1" />
          </div>
        </section>
        <section className="home-faq">
          <h2 className="home-header04">we have all the answers</h2>
          <div className="home-accordion">
            <div
              data-role="accordion-container"
              className="home-element accordion"
            >
              <div className="home-content4">
                <span className="home-header05">
                  how is circle different from other social media platforms?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description4"
                >
                  <span className="home-text20">
                    circle, at its core is a decentralized social media platform
                    built on the lens protocol, offering greater user privacy,
                    censorship resistance, and control over personal data.
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-icon-container">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon10"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon12"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element1 accordion"
            >
              <div className="home-content5">
                <span className="home-header06">how can i join circle?</span>
                <span
                  data-role="accordion-content"
                  className="home-description5"
                >
                  just connect your ethereum wallet to sign in with your lens
                  handle, and you&apos;re done!
                </span>
              </div>
              <div className="home-icon-container1">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon14"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon16"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element2 accordion"
            >
              <div className="home-content6">
                <span className="home-header07">
                  can i connect with my friends on circle?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description6"
                >
                  absolutely! infact, we also issue nfts when you follow
                  someone... go check your wallet
                </span>
              </div>
              <div className="home-icon-container2">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon18"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon20"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element3 accordion"
            >
              <div className="home-content7">
                <span className="home-header08">
                  is circle available for mobile devices?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description7"
                >
                  as of now, we are only available to our friends on the web,
                  but we&apos;re coming soon to mobile as well
                </span>
              </div>
              <div className="home-icon-container3">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon22"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon24"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element4 accordion"
            >
              <div className="home-content8">
                <span className="home-header09">got more doubts?</span>
                <span
                  data-role="accordion-content"
                  className="home-description8"
                >
                  just head over to out github and raise an issue, we&apos;ll
                  take care of the rest
                </span>
              </div>
              <div className="home-icon-container4">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon26"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon28"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="home-get-yours">
          <div className="home-row1">
            <div className="home-column">
              <div className="home-card2">
                <img
                  alt="image"
                  src="/Characters/character-9.svg"
                  className="home-image2"
                />
              </div>
            </div>
          </div>
          <div className="home-column1">
            <div className="home-card3">
              <img
                alt="image"
                src="/Characters/character-10.svg"
                className="home-image3"
              />
            </div>
          </div>
        </section>
        <div>
          <Script
            html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
          ></Script>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #27272d;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image {
            width: 100px;
            object-fit: cover;
          }
          .home-desktop-menu {
            display: flex;
            position: relative;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-btn-group {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: space-between;
            flex-direction: column;
          }
          .home-view {
            top: -27px;
            left: 0px;
            color: var(--dl-color-gray-black);
            width: 221px;
            position: absolute;
            font-family: Raleway;
            text-transform: lowercase;
          }
          .home-container3 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-container4 {
            flex: 0 0 auto;
            width: auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container5 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text01 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container6 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-heading {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-family: Montserrat Alternates;
            font-weight: 300;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            text-align: center;
            font-family: Raleway;
            line-height: 36px;
          }
          .home-buttons {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .home-view1 {
            top: -40px;
            left: -109px;
            width: 199px;
            position: absolute;
            font-family: Raleway;
          }
          .home-description {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-divider-image {
            width: 100%;
            object-fit: cover;
          }
          .home-container7 {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-description1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-paragraph {
            color: rgb(255, 255, 255);
            width: 773px;
            font-size: 40px;
            font-family: Raleway;
            line-height: 60px;
            text-transform: lowercase;
          }
          .home-paragraph1 {
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-family: Raleway;
            line-height: 60px;
          }
          .home-links {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .home-cards {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-row {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-card {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #000000;
          }
          .home-avatar {
            width: 60px;
            height: 60px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: #fdea6b;
          }
          .home-avatar1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-main {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header01 {
            color: rgb(255, 255, 255);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description2 {
            color: rgba(255, 255, 255, 0.8);
            width: 339px;
            font-size: 18px;
            max-width: 400px;
            line-height: 27px;
          }
          .home-card1 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #ffcf77;
          }
          .home-avatar2 {
            width: 60px;
            height: 60px;
            display: flex;
            overflow: hidden;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-success-700);
          }
          .home-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header02 {
            color: rgb(0, 0, 0);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description3 {
            color: rgb(0, 0, 0);
            width: 100%;
            font-size: 18px;
            max-width: 400px;
            line-height: 27px;
          }
          .home-join-us {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-content3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: #ffcf77;
          }
          .home-main2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header03 {
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-family: Montserrat Alternates;
            font-weight: 500;
            line-height: 108px;
          }
          .home-view2 {
            font-family: Raleway;
            background-color: rgb(157, 218, 219);
          }
          .home-image1 {
            width: 100%;
            object-fit: cover;
          }
          .home-faq {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-header04 {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-family: Montserrat Alternates;
            font-weight: 500;
            line-height: 108px;
          }
          .home-accordion {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-element {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
            border-top-width: 1px;
          }
          .home-content4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header05 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-family: Raleway;
            font-weight: 500;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description4 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-text20 {
            font-family: Raleway;
          }
          .home-icon-container {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon10 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon12 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element1 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header06 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-family: Raleway;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description5 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            font-family: Raleway;
            line-height: 27px;
          }
          .home-icon-container1 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon14 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon16 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element2 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content6 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header07 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-family: Raleway;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description6 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            font-family: Raleway;
            line-height: 27px;
          }
          .home-icon-container2 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon18 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon20 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element3 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content7 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header08 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-family: Raleway;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description7 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            font-family: Raleway;
            line-height: 27px;
          }
          .home-icon-container3 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon22 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon24 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element4 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content8 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header09 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-family: Raleway;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description8 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            font-family: Raleway;
            line-height: 27px;
          }
          .home-icon-container4 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon26 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon28 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-get-yours {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 555px;
            display: flex;
            max-width: 1440px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-row1 {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            flex-direction: row;
          }
          .home-column {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-card2 {
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            background-color: #ffcf77;
          }
          .home-image2 {
            width: 240px;
            object-fit: cover;
          }
          .home-column1 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-card3 {
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-image3 {
            width: 240px;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .home-desktop-menu {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-button {
              display: flex;
              padding: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .home-logo {
              color: #000000;
            }
            .home-row {
              flex-direction: column;
            }
            .home-card {
              width: 100%;
            }
            .home-card1 {
              width: 100%;
            }
            .home-heading1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-get-yours {
              height: auto;
              align-items: center;
              flex-direction: column;
            }
            .home-row1 {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
              height: 555px;
              align-items: center;
              justify-content: center;
            }
            .home-column {
              flex: 1;
              align-items: flex-start;
            }
            .home-card2 {
              width: 100%;
              aspect-ratio: 0.85;
              justify-content: center;
            }
            .home-column1 {
              width: 100%;
            }
            .home-card3 {
              width: 100%;
              aspect-ratio: 0.85;
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-heading {
              gap: var(--dl-space-space-unit);
            }
            .home-header {
              font-size: 36px;
              max-width: 70%;
              line-height: 43px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-text05 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-description {
              gap: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-description1 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content {
              gap: var(--dl-space-space-unit);
            }
            .home-paragraph {
              font-size: 20px;
              line-height: 30px;
            }
            .home-paragraph1 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-text13 {
              font-size: 20px;
              line-height: 30px;
            }
            .home-cards {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-card {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-main {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header01 {
              font-size: 24px;
            }
            .home-description2 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-card1 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-main1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header02 {
              font-size: 24px;
            }
            .home-description3 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-join-us {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content3 {
              padding-top: var(--dl-space-space-threeunits);
            }
            .home-main2 {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading1 {
              gap: var(--dl-space-space-unit);
            }
            .home-header03 {
              font-size: 36px;
              line-height: 43px;
            }
            .home-image1 {
              width: 150%;
            }
            .home-faq {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-header04 {
              font-size: 36px;
              line-height: 43px;
            }
            .home-element {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header05 {
              font-size: 16px;
            }
            .home-description4 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element1 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header06 {
              font-size: 16px;
            }
            .home-description5 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element2 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header07 {
              font-size: 16px;
            }
            .home-description6 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element3 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header08 {
              font-size: 16px;
            }
            .home-description7 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element4 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header09 {
              font-size: 16px;
            }
            .home-description8 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-get-yours {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-row1 {
              gap: var(--dl-space-space-oneandhalfunits);
              height: 555px;
            }
            .home-card2 {
              padding: var(--dl-space-space-unit);
            }
            .home-image2 {
              width: 100%;
            }
            .home-card3 {
              padding: var(--dl-space-space-unit);
            }
            .home-image3 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-image1 {
              width: 200%;
            }
            .home-header05 {
              font-size: 16px;
            }
            .home-description4 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header06 {
              font-size: 16px;
            }
            .home-description5 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header07 {
              font-size: 16px;
            }
            .home-description6 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header08 {
              font-size: 16px;
            }
            .home-description7 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header09 {
              font-size: 16px;
            }
            .home-description8 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-row1 {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
