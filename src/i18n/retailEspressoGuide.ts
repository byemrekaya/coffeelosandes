import type { Locale } from './types';

export type RetailEspressoGuideStep = {
  icon: string;
  title: string;
  desc: string;
  value: string;
};

export type RetailEspressoGuideCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  /** Mini section line above the recipe steps (right column) */
  recipeIntro: string;
  imageAlt: string;
  /** Public path; replace with a photo (e.g. .webp) when available */
  imageSrc: string;
  steps: RetailEspressoGuideStep[];
};

/** İçerik kaynağı: src/htmlfeedback/los_andes_espresso_crema_professional (1).html — Espresso Hazırlama Rehberi */
export const retailEspressoGuideByLocale: Record<Locale, RetailEspressoGuideCopy> = {
  tr: {
    eyebrow: 'Espresso',
    title: 'Espresso Hazırlama Rehberi',
    subtitle: 'Mükemmel Espresso İçin İpuçları',
    recipeIntro: 'İdeal espresso reçetesi',
    imageAlt: 'Espresso hazırlama talimatları',
    imageSrc: '/espresso-brewing-guide.svg',
    steps: [
      {
        icon: '⚖️',
        title: 'Öğütme Miktarı',
        desc: "Portafilter'e 7.0g öğütülmüş kahve ekleyin",
        value: '7,0g',
      },
      {
        icon: '🔧',
        title: 'Tamping Basıncı',
        desc: 'Kahveyi 20 kg basınçla sıkıştırın',
        value: '20 Kg',
      },
      {
        icon: '🌡️',
        title: 'Su Sıcaklığı',
        desc: 'Optimal demleme sıcaklığı',
        value: '90°/95°',
      },
      {
        icon: '💨',
        title: 'Basınç',
        desc: '9 Atm basınçla demleyin',
        value: '9 Atm',
      },
      {
        icon: '⏱️',
        title: 'Demleme Süresi',
        desc: '25 saniye boyunca demleyin',
        value: '25 sn',
      },
      {
        icon: '☕',
        title: 'Espresso Hacmi',
        desc: '25-30ml (0.85-1.18 oz) espresso elde edin',
        value: '25/30ml',
      },
    ],
  },
  de: {
    eyebrow: 'Espresso',
    title: 'Espresso-Zubereitungsleitfaden',
    subtitle: 'Tipps für einen gelungenen Espresso',
    recipeIntro: 'Rezept für den perfekten Espresso',
    imageAlt: 'Anleitung zur Espresso-Zubereitung',
    imageSrc: '/espresso-brewing-guide.svg',
    steps: [
      {
        icon: '⚖️',
        title: 'Dosierung',
        desc: '7,0 g gemahlenen Kaffee in den Siebträger geben',
        value: '7,0 g',
      },
      {
        icon: '🔧',
        title: 'Tamperdruck',
        desc: 'Den Kaffee mit 20 kg Druck tampern',
        value: '20 kg',
      },
      {
        icon: '🌡️',
        title: 'Wassertemperatur',
        desc: 'Optimale Brühtemperatur',
        value: '90°/95°',
      },
      {
        icon: '💨',
        title: 'Druck',
        desc: 'Mit 9 bar extrahieren',
        value: '9 bar',
      },
      {
        icon: '⏱️',
        title: 'Extraktionszeit',
        desc: '25 Sekunden extrahieren',
        value: '25 s',
      },
      {
        icon: '☕',
        title: 'Espresso-Volumen',
        desc: '25–30 ml Espresso (0,85–1,18 oz) anstreben',
        value: '25/30 ml',
      },
    ],
  },
  en: {
    eyebrow: 'Espresso',
    title: 'Espresso brewing guide',
    subtitle: 'Tips for a great espresso',
    recipeIntro: 'Perfect espresso recipe',
    imageAlt: 'Espresso preparation instructions',
    imageSrc: '/espresso-brewing-guide.svg',
    steps: [
      {
        icon: '⚖️',
        title: 'Dose',
        desc: 'Add 7.0 g ground coffee to the portafilter',
        value: '7.0 g',
      },
      {
        icon: '🔧',
        title: 'Tamping pressure',
        desc: 'Tamp evenly with 20 kg pressure',
        value: '20 kg',
      },
      {
        icon: '🌡️',
        title: 'Water temperature',
        desc: 'Optimal brewing temperature',
        value: '90°/95°',
      },
      {
        icon: '💨',
        title: 'Pressure',
        desc: 'Extract at 9 bar',
        value: '9 bar',
      },
      {
        icon: '⏱️',
        title: 'Shot time',
        desc: 'Extract for 25 seconds',
        value: '25 s',
      },
      {
        icon: '☕',
        title: 'Espresso volume',
        desc: 'Aim for 25–30 ml (0.85–1.18 oz)',
        value: '25/30 ml',
      },
    ],
  },
  fr: {
    eyebrow: 'Espresso',
    title: 'Guide de préparation espresso',
    subtitle: 'Conseils pour un espresso réussi',
    recipeIntro: 'Recette espresso idéale',
    imageAlt: 'Instructions de préparation espresso',
    imageSrc: '/espresso-brewing-guide.svg',
    steps: [
      {
        icon: '⚖️',
        title: 'Quantité de mouture',
        desc: 'Ajouter 7,0 g de café moulu dans le porte-filtre',
        value: '7,0 g',
      },
      {
        icon: '🔧',
        title: 'Pression du tassement',
        desc: 'Tasser avec 20 kg de pression',
        value: '20 kg',
      },
      {
        icon: '🌡️',
        title: 'Température de l’eau',
        desc: 'Température d’infusion optimale',
        value: '90°/95°',
      },
      {
        icon: '💨',
        title: 'Pression',
        desc: 'Extraire à 9 bars',
        value: '9 bars',
      },
      {
        icon: '⏱️',
        title: 'Durée d’extraction',
        desc: 'Extraire pendant 25 secondes',
        value: '25 s',
      },
      {
        icon: '☕',
        title: 'Volume espresso',
        desc: 'Viser 25–30 ml (0,85–1,18 oz)',
        value: '25/30 ml',
      },
    ],
  },
  es: {
    eyebrow: 'Espresso',
    title: 'Guía de preparación de espresso',
    subtitle: 'Consejos para un espresso perfecto',
    recipeIntro: 'Receta de espresso perfecta',
    imageAlt: 'Instrucciones de preparación de espresso',
    imageSrc: '/espresso-brewing-guide.svg',
    steps: [
      {
        icon: '⚖️',
        title: 'Cantidad de molienda',
        desc: 'Añada 7,0 g de café molido al portafiltro',
        value: '7,0 g',
      },
      {
        icon: '🔧',
        title: 'Presión de compactación',
        desc: 'Compacte con 20 kg de presión',
        value: '20 kg',
      },
      {
        icon: '🌡️',
        title: 'Temperatura del agua',
        desc: 'Temperatura óptima de extracción',
        value: '90°/95°',
      },
      {
        icon: '💨',
        title: 'Presión',
        desc: 'Extraiga a 9 bares',
        value: '9 bar',
      },
      {
        icon: '⏱️',
        title: 'Tiempo de extracción',
        desc: 'Extraiga durante 25 segundos',
        value: '25 s',
      },
      {
        icon: '☕',
        title: 'Volumen de espresso',
        desc: 'Objetivo: 25–30 ml (0,85–1,18 oz)',
        value: '25/30 ml',
      },
    ],
  },
};
