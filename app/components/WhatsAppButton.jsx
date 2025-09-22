import { MessageCircle } from 'lucide-react'; // O cualquier otro icono que prefieras

export function WhatsAppButton() {
  const phoneNumber = "541156526226"; // Número de teléfono de Cafu
  const message = "Hola, quería hacer una consulta desde la página web.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
