import { useEffect, useContext, useState } from "react";

import { ShoppingContext } from "../../context/ShoppingContext";

const PaymentConfirmationPage = () => {
  const { verifiedPayment, handleVerifyPayment } = useContext(ShoppingContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    handleVerifyPayment().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="payment-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
