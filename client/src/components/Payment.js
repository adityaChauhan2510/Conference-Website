import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [paymentPdf, setPaymentPdf] = useState(null);
  const toast = useToast();

  async function handleSubmit() {
    setLoading(true);

    if (!paymentPdf) {
      toast({
        title: "Please Select Payment Receipt",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("paymentReceipt", paymentPdf);

      console.log(formData);
      const response = await axios.post(
        "http://localhost:5000/api/submit",
        formData
      );

      if (!response.status === 200) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: "Payment Receipt submitted successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });

      setPaymentPdf(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description:
          "An error occurred while submitting the form. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } finally {
      setLoading(false);
    }
  }

  const postDetails = (pdf) => {
    setLoading(true);

    if (pdf === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    if (pdf.type !== "application/pdf") {
      toast({
        title: "Please Select a PDF File!",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    //console.log(pdf);
    setPaymentPdf(pdf);
    setLoading(false);

    toast({
      title: "Image uploaded successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom",
    });
  };

  return (
    <div className="my-10">
      <div className="w-[90%] sm:w-[75%] md:w-[80%]  mx-auto bg-white p-8 border rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Online Payment Details
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-lg font-semibold">Beneficiary Name</p>
            <p>NITK SURATHKAL</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Account No</p>
            <p>37772503911</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Bank Name</p>
            <p>State Bank of India</p>
          </div>
          <div>
            <p className="text-lg font-semibold">IFSC Code</p>
            <p>SBIN0002273 (For transfers from within India)</p>
          </div>
          <div>
            <p className="text-lg font-semibold">MICR</p>
            <p>575002013</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Address</p>
            <p>N.I.T.K CAMPUS, SRINIVASNAGAR POST MANGALURU-575025</p>
          </div>
        </div>

        <p className="mt-6">
          <span className="text-lg font-semibold">Note:</span> During
          transactions, kindly enter "ASSETS 2024" in the purpose field.
        </p>

        <p className="mt-4">
          <span className="text-lg font-semibold">Note:</span> Registration fee
          is non-refundable. Fee once paid shall not be refunded under any
          circumstances.
        </p>

        <FormControl id="img" my="2em">
          <FormLabel>Upload Payment Receipt</FormLabel>
          <Input
            type="file"
            p={1.5}
            accept=".pdf"
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </FormControl>

        <Button
          colorScheme="blue"
          width="100%"
          rounded="10px"
          onClick={handleSubmit}
          isLoading={loading}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export default Payment;
