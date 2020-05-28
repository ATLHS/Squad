import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
 
const PaypalBtn = props => {
    return (
      <div className="paypal-btn-container p-3">
            <PayPalButton
                amount={props.price}
            
                onSuccess={(details, data) => {
                    props.onSuccess(details, data)
                }}
                options={{
                    clientId: "sb",
                    currency: "EUR"
                }}
            />
      </div>
    );
}

export default PaypalBtn;