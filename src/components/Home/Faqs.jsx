import { useState } from 'react';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqsData = [
        {
            question: '¿Cómo puedo realizar un pedido?',
            answer:
                'Puedes realizar un pedido siguiendo estos pasos: [describir los pasos para realizar un pedido].',
        },
        {
            question: '¿Cuál es el tiempo de entrega?',
            answer:
                'El tiempo de entrega varía según tu ubicación y el método de envío seleccionado. Por lo general, los pedidos se entregan en [indicar tiempo de entrega promedio].',
        },
        {
            question: '¿Puedo realizar cambios o devoluciones?',
            answer:
                'Sí, aceptamos cambios y devoluciones dentro de un período de [indicar período] a partir de la fecha de entrega. Para más información, por favor consulta nuestra política de cambios y devoluciones.',
        },
        {
            question: '¿Cuáles son los métodos de pago aceptados?',
            answer:
                'Aceptamos los siguientes métodos de pago: [indicar métodos de pago aceptados].',
        },
        {
            question: '¿Ofrecen envío internacional?',
            answer:
                'Sí, ofrecemos envío internacional a varios países. Para conocer los detalles y costos de envío internacionales, por favor consulta nuestra sección de envíos.',
        },
        {
            question: '¿Cómo puedo contactar al servicio al cliente?',
            answer:
                'Puedes contactar a nuestro servicio al cliente a través de los siguientes canales: [indicar los canales de contacto, como teléfono, correo electrónico o chat en vivo]. Estamos disponibles para ayudarte de lunes a viernes de [horario de atención].',
        },
    ];






    return (
        <section className="bg-gray-100 ">
            <div className="container mx-auto px-4">
                <div className="md:w-1/2 mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Preguntas frecuentes</h2>
                    {faqsData.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <div
                                className="flex items-center justify-between bg-white py-3 px-4 cursor-pointer"
                                onClick={() => handleAccordionClick(index)}
                            >
                                <h3 className="text-xl font-semibold">{faq.question}</h3>
                                <svg
                                    className={`w-6 h-6 transition-transform ${index === activeIndex ? 'transform rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                            {index === activeIndex && (
                                <div className="bg-white py-2 px-4">
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
