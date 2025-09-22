import { Truck, Package, Headset } from 'lucide-react';

const logisticsData = [
  {
    icon: <Truck size={32} className="text-primary" />,
    title: "Cobertura Total",
    description: "Entregas sin cargo en CABA y GBA. Despachamos tu mercadería al transporte de tu elección para llegar a cada rincón del país."
  },
  {
    icon: <Package size={32} className="text-primary" />,
    title: "Embalaje Garantizado",
    description: "Cada pedido se prepara cumpliendo con las más estrictas normativas, asegurando que tus productos lleguen a destino en perfecto estado."
  },
  {
    icon: <Headset size={32} className="text-primary" />,
    title: "Asesoramiento Personalizado",
    description: "Nuestro equipo calificado está siempre disponible para brindarte respuestas y asesoramiento técnico en cada etapa de tu compra."
  }
];

export function LogisticsSection() {
  return (
    <section id="logistica" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Logística Eficiente
        </h2>
        <p className="text-lg text-light-text max-w-3xl mx-auto mb-16">
          Nuestro mayor compromiso es despachar tus pedidos en tiempo y forma, garantizando una entrega segura y puntual en todo el territorio nacional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {logisticsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-base-text mb-3">{item.title}</h3>
              <p className="text-light-text">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

