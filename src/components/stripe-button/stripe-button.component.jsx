import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_brzMoQaOfFnp0a9dFiygx7v000DEz3whbH";

  const onToken = token => {
    console.log(token);
    alert("Payment Successfull");
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Kitty Fresh INC.'
      billingAddress
      shippingAddress
      image='https://image.flaticon.com/icons/svg/763/763741.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
