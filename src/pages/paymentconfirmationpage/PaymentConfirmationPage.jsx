import { useEffect, useContext } from "react";

import { ShoppingContext } from "../../context/ShoppingContext";

const PaymentConfirmationPage = () => {
  const { verifiedPayment, handleVerifyPayment } = useContext(ShoppingContext);

  useEffect(() => {
    handleVerifyPayment();
  }, []);

  return (
    <div className="payment-container">
      <p>
        {verifiedPayment === true
          ? "Payment was successful!"
          : "Payment was unsuccessful! Please try again"}
      </p>
    </div>
  );
};

export default PaymentConfirmationPage;
