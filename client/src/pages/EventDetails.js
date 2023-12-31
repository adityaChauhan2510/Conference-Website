import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

function EventDetails() {
  return (
    <>
      <header>
        <Logo />
        <Navbar />
      </header>

      <main className="bg-gray-200 w-full">
        <div className="p-10 md:col-span-2">
          <Heading text="Key Conference Details" />

          <div className="mt-20">
            <p className="text-3xl space-x-3 font-semibold text-gray-800">
              Technical Sessions and Paper Presentations
            </p>
            <p className="mt-3 opacity-70">
              Participants will have the opportunity to present and discuss
              their research in dedicated technical sessions covering various
              aspects of smart and sustainable energy.
            </p>
          </div>

          <div className="mt-20">
            <p className="text-3xl space-x-3 font-semibold text-gray-800">
              Workshops and Tutorials
            </p>
            <p className="mt-3 opacity-70">
              Pre-conference workshops and tutorials conducted by experts will
              provide in-depth knowledge and skills in specific areas of
              interest.
            </p>
          </div>

          <div className="mt-20">
            <p className="text-3xl space-x-3 font-semibold text-gray-800">
              Keynote Speakers
            </p>
            <p className="mt-3 opacity-70 ">
              Renowned experts in the field will deliver keynote addresses,
              sharing their expertise and insights on emerging trends and future
              directions in smart energy technologies.
            </p>
          </div>

          <div className="mt-20">
            <p className="text-3xl space-x-4 font-semibold text-gray-800">
              Publication in Springer Nature
            </p>
            <p className="mt-3 opacity-70 ">
              Accepted papers will be published in the conference proceedings by
              Springer Nature under the Scopus index, ensuring wide visibility
              and accessibility to the global research community.
            </p>
          </div>

          <div className="mt-20">
            <p className="text-3xl space-x-3 font-semibold text-gray-800">
              Networking Opportunities
            </p>
            <p className="mt-3 opacity-70">
              Networking sessions, social events, and a gala dinner will foster
              collaboration and networking among participants, promoting a
              dynamic exchange of ideas.
            </p>
          </div>

          <div className="mt-20">
            <p className="text-3xl space-x-3 font-semibold text-gray-800">
              Poster Presentations
            </p>
            <p className="mt-3 opacity-70 ">
              A dedicated poster session will provide an additional platform for
              researchers to showcase their work and engage in discussions with
              conference attendees.
            </p>
          </div>

          <div className="mt-20">
            <p className="text-3xl space-x-3 font-semibold text-gray-800">
              Topics of Interest
            </p>
            <p className="mt-3 opacity-70 ">
              The conference will cover a broad spectrum of topics, including
              but not limited to: <br />
              Renewable Energy Sources <br />
              Smart Grid Technologies <br />
              Energy Storage Systems <br />
              Internet of Things (IoT) in Energy <br />
              Sustainable Transportation <br />
              Energy Policy and Economics <br />
              Emerging Technologies and Innovations <br />
              Environmental Impact and Sustainability
            </p>
          </div>

          <div className="mt-20">
            <p className="text-3xl space-x-3 font-semibold text-gray-800">
              Submission Guidelines
            </p>
            <p className="mt-3 opacity-70">
              Authors are invited to submit original and unpublished research
              papers following the conference guidelines. Detailed submission
              instructions can be found on the conference website.
            </p>
          </div>

          <div className="mt-20">
            <p className="text-3xl space-x-3 font-semibold text-gray-800">
              Registration
            </p>
            <p className="mt-3 opacity-70">
              Conference registration details will be available on the
              conference website. Join us at ASSETS 2024 for a stimulating
              exchange of ideas and advancements in the exciting field of smart
              and sustainable energy. Let's collectively contribute to a greener
              and more sustainable future!
            </p>
          </div>
        </div>

        <footer className="mt-40">
          <Footer />
        </footer>
      </main>
    </>
  );
}

export default EventDetails;
