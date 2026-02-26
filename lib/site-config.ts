// ============================================================
// CONFIGURACION DEL SITIO
// ============================================================
// Este es el UNICO archivo que necesitas modificar para
// desplegar una nueva instancia para otra municipalidad/comuna.
//
// 1. Cambia los datos de la entidad (nombre, logo, descripcion)
// 2. Agrega la URL del archivo de audio
// 3. Configura los enlaces (sitio web, redes, telefono, etc.)
// 4. Ajusta la paleta de colores para coincidir con la marca
// ============================================================

export type LinkItem = {
  /** Texto visible del enlace */
  label: string;
  /** URL del enlace (puede ser https://, tel:, mailto:, etc.) */
  href: string;
  /** Tipo de icono a mostrar */
  icon:
    | "globe"
    | "map-pin"
    | "phone"
    | "mail"
    | "instagram"
    | "facebook"
    | "link";
};

export type SiteConfig = {
  /** Nombre de la municipalidad, comuna o entidad */
  name: string;

  /** Descripcion corta que se muestra debajo del nombre */
  description: string;

  /** Ruta al logo (relativa a /public). Dejar vacio para usar icono por defecto */
  logoSrc: string;

  /** Texto que acompana al audio, por ej. "Informacion sobre la Plaza Central" */
  audioTitle: string;

  /** URL del archivo de audio (mp3, ogg, wav, etc.) */
  audioSrc: string;

  /** Enlaces de contacto e informacion */
  links: LinkItem[];

  /**
   * Paleta de colores de la marca.
   * Usa valores HSL sin la funcion hsl(), solo "H S% L%"
   * Ejemplo: "220 65% 42%"
   *
   * - primary: color principal de la marca (botones, acentos)
   * - primaryForeground: color del texto sobre el primary (generalmente blanco)
   * - background: fondo general de la pagina
   * - foreground: color de texto principal
   * - card: fondo de tarjetas
   * - muted: fondo de elementos secundarios
   * - mutedForeground: texto secundario/sutil
   * - border: color de bordes
   */
  theme: {
    primary: string;
    primaryForeground: string;
    background: string;
    foreground: string;
    card: string;
    muted: string;
    mutedForeground: string;
    border: string;
  };
};

// ============================================================
// EDITA AQUI ABAJO PARA CADA NUEVA IMPLEMENTACION
// ============================================================

const siteConfig: SiteConfig = {
  name: "Comuna de Oliveros",

  description:
    "Accede a la informacion de este punto. Reproduce el audio para escuchar los detalles o visita nuestros enlaces para mas informacion.",

  // Coloca tu logo en /public y pon la ruta aqui, ej: "/logo-municipalidad.png"
  // Dejar vacio "" para usar el icono de audio por defecto
  logoSrc: "/logo.png",

  audioTitle: "Presiona play para escuchar la informacion",

  // Cambia esta URL por el archivo de audio real
  audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",

  links: [
    {
      label: "Sitio web oficial",
      href: "https://example.com",
      icon: "globe",
    },
    {
      label: "Como llegar",
      href: "https://maps.google.com",
      icon: "map-pin",
    },
    {
      label: "Llamar",
      href: "tel:+56912345678",
      icon: "phone",
    },
    {
      label: "Correo electronico",
      href: "mailto:contacto@ejemplo.cl",
      icon: "mail",
    },
    // Agrega mas enlaces segun necesites:
    // { label: "Instagram", href: "https://instagram.com/...", icon: "instagram" },
    // { label: "Facebook", href: "https://facebook.com/...", icon: "facebook" },
  ],

  // Paleta de colores (formato HSL: "H S% L%")
  // Cambia estos valores para coincidir con los colores de la marca
  theme: {
    primary: "220 65% 42%", // Azul institucional
    primaryForeground: "0 0% 100%", // Blanco
    background: "0 0% 98%", // Gris muy claro
    foreground: "220 20% 14%", // Casi negro
    card: "0 0% 100%", // Blanco puro
    muted: "220 14% 94%", // Gris claro
    mutedForeground: "220 10% 46%", // Gris medio
    border: "220 14% 88%", // Gris borde
  },
};

export default siteConfig;
