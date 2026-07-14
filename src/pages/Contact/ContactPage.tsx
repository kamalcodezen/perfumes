import ContactForm from "../../components/contact/ContactForm";
import ContactHero from "../../components/contact/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo";

const ContactPage = () => {
  return (
    <main className="w-full">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
  );
};

export default ContactPage;
