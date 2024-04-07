import React from "react";
import "./css/PrivacyPolicy.css";
import Contact from "./Contact";
import FaqPage from "./FaqPage";
const PrivayPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>

      <div className="privacy-policy-description">
        <p className="para">
          What personal information do we collect from the people that visit our
          blog, website or app? When ordering or registering on our site, as
          appropriate, you may be asked to enter your name, email address, phone
          number or other details to help you with your experience. When do we
          collect information?
        </p>
        <p>
          We collect information from you when you register on our site or enter
          information on our site. How do we use your information? We may use
          the information we collect from you when you register, make a
          purchase, sign up for our newsletter, respond to a survey or marketing
          communication, surf the website, or use certain other site features in
          the following ways:
        </p>

        <ul>
          <li>
            To personalize your experience and to allow us to deliver the type
            of content and product offerings in which you are most interested.
          </li>
          <li>
            To allow us to better service you in responding to your customer
            service requests.
          </li>
          <li>To ask for ratings and reviews of services or products</li>
          <li>
            To follow up with them after correspondence (live chat, email or
            phone inquiries)
          </li>
        </ul>

        <h2>How do we protect your information?</h2>
        <p>
          Our website is scanned on a regular basis for security holes and known
          vulnerabilities in order to make your visit to our site as safe as
          possible.
        </p>

        <h2>We use regular Malware Scanning.</h2>

        <p>
          Your personal information is contained behind secured networks and is
          only accessible by a limited number of persons who have special access
          rights to such systems, and are required to keep the information
          confidential. In addition, all sensitive/credit information you supply
          is encrypted via Secure Socket Layer (SSL) technology. We implement a
          variety of security measures when a user enters, submits, or accesses
          their information to maintain the safety of your personal information.
          All transactions are processed through a gateway provider and are not
          stored or processed on our servers. Do we use ‘cookies’? Yes. Cookies
          are small files that a site or its service provider transfers to your
          computer’s hard drive through your Web browser (if you allow) that
          enables the site’s or service provider’s systems to recognize your
          browser and capture and remember certain information. For instance, we
          use cookies to help us remember and process the items in your shopping
          cart. They are also used to help us understand your preferences based
          on previous or current site activity, which enables us to provide you
          with improved services. We also use cookies to help us compile
          aggregate data about site traffic and site interaction so that we can
          offer better site experiences and tools in the future.
        </p>

        <h2>We use cookies to:</h2>
        <ul>
          <li>Keep track of advertisements</li>
          <li>
            Compile aggregate data about site traffic and site interactions in
            order to offer better site experiences and tools in the future.
          </li>
        </ul>

        <p>
          We may also use trusted third-party services that track this
          information on our behalf. You can choose to have your computer warn
          you each time a cookie is being sent, or you can choose to turn off
          all cookies. You do this through your browser settings. Since browser
          is a little different, look at your browser’s Help Menu to learn the
          correct way to modify your cookies.
        </p>

        <p>
          If you turn cookies off, some features will be disabled. It won’t
          affect the user’s experience that make your site experience more
          efficient and may not function properly.
        </p>

        <p>However, you will still be able to place orders .</p>

        <h2>Third-party disclosure</h2>

        <p>
          We do not sell, trade, or otherwise transfer to outside parties your
          Personally Identifiable Information.
        </p>

        <h2>Third-party links</h2>

        <p>
          We do not include or offer third-party products or services on our
          website.
        </p>
        <h2>We have implemented the following:</h2>

        <ul>
          <li> Remarketing with Google AdSense</li>
          <li>Google Display Network Impression Reporting</li>
          <li>Demographics and Interests Reporting</li>
        </ul>

        <p>
          We, along with third-party vendors such as Google use first-party
          cookies (such as the Google Analytics cookies) and third-party cookies
          (such as the DoubleClick cookie) or other third-party identifiers
          together to compile data regarding user interactions with ad
          impressions and other ad service functions as they relate to our
          website.
        </p>

        <p>
          If at any time you would like to unsubscribe from receiving future
          emails, you can email us at info@estibuilder.com and we will promptly
          remove you from ALL correspondence.
        </p>

        <h2>Contacting Us</h2>

        <p>
          If there are any questions regarding this privacy policy, you may
          contact us using the information below. estibuilder.com
        </p>
      </div>

      <Contact />

      <FaqPage />
    </div>
  );
};

export default PrivayPolicy;
