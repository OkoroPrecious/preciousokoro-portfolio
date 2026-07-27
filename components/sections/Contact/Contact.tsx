import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
    >
      <Container>

        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Amazing"
          description="Interested in working together? Feel free to reach out."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

      </Container>
    </section>
  );
}