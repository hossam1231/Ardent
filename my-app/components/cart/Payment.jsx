// import React, { useState, useEffect } from "react";
// import { View, Image } from "react-native";
// import "./App.css";

// const ProductDisplay = () => (
//   <>
//   </>
//     <View className="product">
//       <Image
//         source="https://i.imgur.com/EHyR2nP.png"
//         alt="The cover of Stubborn Attachments"
//       />
//       <View className="description">
//         <Text>Stubborn Attachments</Text>
//         <Text>$20.00</Text>
//       </View>
//     </View>
//     <form action="/create-checkout-session" method="POST">
//       <button type="submit">Checkout</button>
//     </form>

// );

// const Message = ({ message }) => (
 
//     <Text>{message}</Text>
  
// );

// export default function Payment() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

//   return message ? <Message message={message} /> : <ProductDisplay />;
// }
// //  const publicKey =
// //     "pk_test_51KXVCwIGUDw8P9QpKlZWnPVNpvuNwe7De0cNBEBN0Cj27XJMAGPBGpoWPugI393nwngIoNpu301diQfHzviq2OjI00mY1lIacY";

// //   const privateKey =
// //     "sk_test_51KXVCwIGUDw8P9Qpp8FnY3zP2mh97Iqbgp7dRRy2zKuKNOJAHKFAwvFQPXajXh8ypydNwlr22I8GiS0QXiJAv2rx00afPHa4Ch";
