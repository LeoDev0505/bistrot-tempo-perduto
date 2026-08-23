import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import itTranslation from './locales/it.json';
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      it: { translation: itTranslation },
      en: { translation: enTranslation },
      fr: { translation: frTranslation }
    },
    lng: 'it', // La lingua di partenza
    fallbackLng: 'it', // Se manca una traduzione, usa l'italiano
    interpolation: {
      escapeValue: false // React si protegge già da solo dagli attacchi XSS
    }
  });

export default i18n;