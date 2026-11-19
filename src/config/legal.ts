/**
 * Datos del titular de la web para el aviso legal y la política de privacidad.
 *
 * TODO: rellenar con los datos reales que dé el cliente. No inventar nada.
 * Mientras un dato esté vacío, en la web aparece "[pendiente]".
 */
export const LEGAL_OWNER = {
  /** Nombre y apellidos (autónomo) o razón social (empresa). TODO */
  name: "",
  /** NIF / CIF. TODO */
  taxId: "",
  /** Domicilio fiscal o social completo. TODO (puede no ser el del local) */
  address: "",
  /** Datos del Registro Mercantil, solo si es una sociedad (tomo, folio, hoja). TODO o dejar vacío si es autónomo */
  registry: "",
  /** Email de contacto para temas legales y de privacidad. TODO: confirmar */
  email: "rscafevng@gmail.com",
  /** Teléfono de contacto. TODO: confirmar */
  phone: "+34 621 30 67 20",
};

/** Fecha de la última revisión de los textos legales (AAAA-MM-DD). */
export const LEGAL_UPDATED = "2026-11-19";
