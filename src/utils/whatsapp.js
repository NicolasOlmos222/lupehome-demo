import { STORE_INFO } from '../data/products.js';

export function formatCurrency(amount) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(amount);
}

export function buildWhatsAppLink({
  product,
  variant,
  fabric,
  color,
  legs,
  tachas,
  puffAddon,
  paymentMethod,
  finalPrice,
  customNotes
}) {
  const isGrupoB = fabric?.group === 'B';
  const paymentLabel = paymentMethod === 'tarjeta' ? 'Tarjeta de crédito / Cuotas' : 'Efectivo / Transferencia';

  const lines = [
    `¡Hola ${STORE_INFO.name}! 👋 Quiero consultar y pedir cotización para este modelo:`,
    ``,
    `🛋️ *Producto:* ${product.name}`,
    `📐 *Medida/Versión:* ${variant?.sizeLabel || 'Estándar'}`,
    `🧵 *Tela:* ${fabric ? `${fabric.name} (${fabric.groupLabel})` : 'A definir'}`,
    `🎨 *Color:* ${color ? color.name : 'A coordinar con muestrario'}`
  ];

  if (legs) {
    lines.push(`🪵 *Patas:* ${legs}`);
  }

  if (product.hasTachasOption && tachas !== undefined) {
    lines.push(`✨ *Tachas:* ${tachas ? 'Con tachas decorativas' : 'Sin tachas (liso)'}`);
  }

  if (puffAddon) {
    lines.push(`🛋️ *Puff Adicional:* Sí (0,70 x 0,70 m)`);
  }

  lines.push(
    ``,
    `💳 *Forma de pago elegida:* ${paymentLabel}`,
    `🏷️ *Precio estimado:* ${formatCurrency(finalPrice)} ${isGrupoB ? '(incluye +10% tela Grupo B)' : ''}`,
    ``,
    `📍 *Envíos:* Consultar costo a mi localidad.`
  );

  if (customNotes && customNotes.trim()) {
    lines.push(
      ``,
      `📝 *Consulta especial:* ${customNotes.trim()}`
    );
  }

  lines.push(
    ``,
    `¿Tienen stock para entrega inmediata o cuál es el plazo de entrega estimado? Muchas gracias!`
  );

  const messageText = lines.join('\n');
  const encoded = encodeURIComponent(messageText);

  return `https://wa.me/${STORE_INFO.phone}?text=${encoded}`;
}
