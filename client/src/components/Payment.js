// import React from "react";

// const Mailto = ({ email, subject = "", body = "", children }) => {
//   let params = subject || body ? "?" : "";
//   if (subject) params += `subject=${encodeURIComponent(subject)}`;
//   if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

//   return <a href={`mailto:${email}${params}`}>{children}</a>;
// };

// const Payment = () => {
//   return (
//     <div>
//       <div class="w-[83%] mx-auto bg-white p-8 border rounded-md shadow-md">
//         <h2 class="text-3xl font-bold mb-6 text-center">
//           Online Payment Details
//         </h2>

//         <div class="grid grid-cols-2 gap-4">
//           <div>
//             <p class="text-lg font-semibold">Beneficiary Name</p>
//             <p>NITK SURATHKAL</p>
//           </div>
//           <div>
//             <p class="text-lg font-semibold">Account No</p>
//             <p>37772503911</p>
//           </div>
//           <div>
//             <p class="text-lg font-semibold">Bank Name</p>
//             <p>State Bank of India</p>
//           </div>
//           <div>
//             <p class="text-lg font-semibold">IFSC Code</p>
//             <p>SBIN0002273 (For transfers from within India)</p>
//           </div>
//           <div>
//             <p class="text-lg font-semibold">MICR</p>
//             <p>575002013</p>
//           </div>
//           <div>
//             <p class="text-lg font-semibold">Address</p>
//             <p>N.I.T.K CAMPUS, SRINIVASNAGAR POST MANGALURU-575025</p>
//           </div>
//         </div>

//         <h3 class="mt-6 text-lg font-semibold">NOTE:</h3>
//         <ul>
//           <li>
//             During transactions, kindly enter "ASSETS 2024" in the purpose
//             field.
//           </li>
//           <li>
//             Registration fee is non-refundable. Fee once paid shall not be
//             refunded under any circumstances.
//           </li>
//           <li>
//             <br />
//             Kindly send the payment receipt to{" "}
//             <Mailto className="" email="assets.nitk@gmail.com">
//               <p className="text-blue-600 hover:underline font-bold text-lg mt-5">
//                 assets.nitk@gmail.com
//               </p>
//             </Mailto>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Payment;
import React from 'react'

const Payment = () => {
  return (
    <div>
         <div class="max-w-lg mx-auto bg-white p-8 border rounded-md shadow-md">
    <h2 class="text-3xl font-bold mb-6 text-center">Online Payment Details</h2>

    <div class="grid grid-cols-2 gap-4">
        <div>
            <p class="text-lg font-semibold">Beneficiary Name</p>
            <p>NITK SURATHKAL</p>
        </div>
        <div>
            <p class="text-lg font-semibold">Account No</p>
            <p>37772503911</p>
        </div>
        <div>
            <p class="text-lg font-semibold">Bank Name</p>
            <p>State Bank of India</p>
        </div>
        <div>
            <p class="text-lg font-semibold">IFSC Code</p>
            <p>SBIN0002273 (For transfers from within India)</p>
        </div>
        <div>
            <p class="text-lg font-semibold">MICR</p>
            <p>575002013</p>
        </div>
        <div>
            <p class="text-lg font-semibold">Address</p>
            <p>N.I.T.K CAMPUS, SRINIVASNAGAR POST MANGALURU-575025</p>
        </div>
    </div>

    <p class="mt-6"><span class="text-lg font-semibold">Note:</span> During transactions, kindly enter "ASSETS 2024" in the purpose field.</p>
    <p class="mt-4"><span class="text-lg font-semibold">Note:</span> Registration fee is non-refundable. Fee once paid shall not be refunded under any circumstances.</p>
</div>


<div class="mt-8 max-w-lg mx-auto bg-white p-8 border rounded-md shadow-md">
    <form action="/upload" method="post" enctype="multipart/form-data">
        <label for="pdfFile" class="block text-lg font-medium text-gray-700 mb-2">Upload Fee Receipt (PDF)</label>
        <div class="flex items-center justify-between">
            <input type="file" name="pdfFile" id="pdfFile" accept=".pdf" class="p-2 border rounded-md w-3/4" />
            <button type="submit" class="ml-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Upload Receipt</button>
        </div>
    </form>
</div>


    </div>
  )
}

export default Payment