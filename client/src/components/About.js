import React from "react";

export default function About() {
  return (
    <div className="flex-grow mt-20">
      <div className="my-5 mx-auto w-11/12">
        <h1 className="mb-20 text-center text-6xl font-extrabold tracking-normal text-gray-800 ">
          About Us
        </h1>

        <div className="my-8 text-center ">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-700">
              About NITK
            </h2>
            <p className="text-justify  text-xl font-arial mb-10">
              National Institute of Technology Karnataka, Surathkal is located
              in Mangalore City, Karnataka State, India. The Institute was
              established as Karnataka Regional Engineering College (KREC) in
              1960, and upgraded as National Institute of Technology Karnataka
              (NITK) in 2002. Mangalore is the headquarters of the coastal
              district of Dakshina Kannada, and boasts an important centre of
              education, business and trade in the state. Sri. U. Srinivasa
              Mallya, a visionary and a philanthropist, contributed immensely to
              the development of the coastal region of Karnataka, and his effort
              towards establishment of KREC (now NITK) is the most significant
              one. In recognition of his role as the founder and architect of
              the institute, the campus premises is named after him as
              Srinivasnagar.
            </p>

            {/* Image and video section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                {/* Image */}
                <img
                  src=""
                  alt="NITK IMAGE empty src rn"
                  className="h-auto max-h-full max-w-full"
                />
              </div>
              <div className="flex justify-center">
                <div className="max-w-500 mx-auto w-full">
                  <div
                    style={{
                      margin: "20px",
                      border: "1px solid #ccc",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: "75%",
                        height: "0",
                        overflow: "hidden",
                      }}
                    >
                      {/* YouTube Video */}
                      <iframe
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: "100%",
                          border: "none",
                        }}
                        src="https://www.youtube.com/embed/vEYwgdjac5Y?si=WRvgSyu3P_sHLFbi"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the content... */}
        {/* ... */}
      </div>
    </div>
  );
}
