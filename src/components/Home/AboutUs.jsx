

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Acerca de Nosotros</h2>
            <p className="text-gray-700 leading-relaxed">
              En nuestro ecommerce, nos dedicamos a brindar productos de alta calidad que se adaptan a las necesidades y gustos de nuestros clientes. Con una amplia variedad de productos cuidadosamente seleccionados, nos esforzamos por ofrecer la mejor experiencia de compra en línea.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Nuestro equipo de expertos en ecommerce se encarga de buscar los productos más populares y de tendencia para asegurarnos de que siempre encuentres lo que buscas. Valoramos la satisfacción del cliente y nos esforzamos por proporcionar un excelente servicio al cliente en cada paso del camino.
            </p>
          </div>
          <div className="md:w-1/2">
            <img className="rounded-lg shadow-lg" src="https://dummyimage.com/600x400/000/fff" alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
