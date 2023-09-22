import { useEffect, useContext } from "react";

import { ShoppingContext } from "../../context/ShoppingContext";

const PaymentConfirmationPage = () => {
  const { verifiedPayment, handleVerifyPayment } = useContext(ShoppingContext);

  useEffect(() => {
    handleVerifyPayment();
    console.log("Logging status from useEffect: ", verifiedPayment);
  }, [handleVerifyPayment, verifiedPayment]);

  return verifiedPayment === true ? (
    <div>Your payment was successful!</div>
  ) : (
    <div>Your payment was not successful!</div>
  );
};

export default PaymentConfirmationPage;
