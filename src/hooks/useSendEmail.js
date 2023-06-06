import { useEffect } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";

const useEmailSender = () => {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAIL_API_KEY);
  }, []);

  const sendEmail = (user, cartItems, cartTotal, clearCart, setIsCartEmpty) => {
    const items = cartItems
      .map(
        (item) =>
          `${item.title}\t\t | Quantity: ${item.quantity}\t\t | Price: $${item.price}`
      )
      .join("\n");
    const total = `Total: $${cartTotal.toFixed(2)}`;

    const message = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              table {
                border-collapse: collapse;
                width: 100%;
              }
              
              th, td {
                text-align: left;
                padding: 8px;
                border-bottom: 1px solid #ddd;
              }
              
              th {
                background-color: #f2f2f2;
              }
            </style>
          </head>
          <body>
            <h2>Your order has been placed successfully!</h2>
            
            <table>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              ${items}
            </table>
            
            <p>Total: ${total}</p>
          </body>
        </html>
        `;

    const templateParams = {
      from_name: "E-commerce",
      to_email: user.email,
      message: message,
      to_name: user.displayName,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        templateParams
      )
      .then(() => {
        toast.success(
          `Correo electrónico enviado correctamente a ${user.email}`,
          {
            icon: "📧",
          }
        );
        clearCart();
        setIsCartEmpty(true);
      })
      .catch((error) => {
        toast.error("Error al enviar el correo electrónico");
        console.log("Error sending email:", error);
      });
  };

  return { sendEmail };
};

export default useEmailSender;
