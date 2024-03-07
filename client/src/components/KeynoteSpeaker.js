import React from 'react'
import Heading from './Heading'


export default function KeynoteSpeaker() {
  return (
    <>
      <Heading text="Chief Guest" />
      <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg">
        <div className="flex flex-col items-center">
          <img alt="" style={{ width: '8cm' }} src="https://faculty.dese.iisc.ac.in/kgopakumar/wp-content/uploads/sites/7/2017/03/kgopa3.jpg" />
          <div className="mt-4">
            <a href="https://faculty.dese.iisc.ac.in/kgopakumar/">
              <h1 className="text-lg font-bold text-center">
                Professor<br />
                Dr. K. Gopakumar<br />
                Department of Electronic Systems Engineering (Formerly CEDT)<br />
                Indian Institute of Science (IISc)<br />
                Bangalore 560012
              </h1>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
