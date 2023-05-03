import { useEffect } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';

const useEmailSender = () => {
    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAIL_API_KEY);
    }, []);

    const sendEmail = (user, cartItems, cartTotal, clearCart, setIsCartEmpty) => {
        const items = cartItems
            .map((item) => `${item.title}\t\t | Quantity: ${item.quantity}\t\t | Price: $${item.price}`)
            .join('\n');
        const total = `Total: $${cartTotal.toFixed(2)}`;

        const message = `Your order has been placed successfully!\n\nItem\t\t\tQuantity\t\tPrice\n----------------------------------------\n${items}\n\n${total}`;
        const templateParams = {
            from_name: 'E-commerce',
            to_email: user.email,
            message: message,
            to_name: user.displayName,
        };

        emailjs
            .send(import.meta.env.VITE_EMAIL_SERVICE, import.meta.env.VITE_EMAIL_TEMPLATE, templateParams)
            .then(() => {
                toast.success(`Correo electrónico enviado correctamente a ${user.email}`, {
                    icon: '📧',
                });
                clearCart();
                setIsCartEmpty(true);
            })
            .catch((error) => {
                toast.error('Error al enviar el correo electrónico');
                console.log('Error sending email:', error);
            });
    };

    return { sendEmail };
};

export default useEmailSender;
