import { Fragment } from "react";
import Head from "next/head";

import ContactForm from "../components/contact/contact-form";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Oskar</title>
        <meta name="Contact form" content="Send me a message!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
