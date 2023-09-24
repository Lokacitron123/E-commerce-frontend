import { useEffect, useContext, useState } from "react";

import { ShoppingContext } from "../../context/ShoppingContext";

const PaymentConfirmationPage = () => {
  const { verifiedPayment, handleVerifyPayment } = useContext(ShoppingContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Start loading
    setIsLoading(true);

    // Make the verification request
    handleVerifyPayment().then(() => {
      // Verification is complete, stop loading
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="payment-container">
      {isLoading ? (
        // Display a loading indicator while waiting for the response
        <p>Loading...</p>
      ) : (
        // Render the result based on verifiedPayment
        <p>
          {verifiedPayment
            ? "Payment was successful!"
            : "Payment was unsuccessful"}
        </p>
      )}
    </div>
  );
};

export default PaymentConfirmationPage;
