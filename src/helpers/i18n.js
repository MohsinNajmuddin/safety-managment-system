import i18next from 'i18next'; // i18next is already a singleton.

import translations from '../translations/translations.js';

// use this function to switch Locales when we support it, it runs with en-US in index.js for now.
i18next.loadTranslations = (
  locale,
  namespace,
  translationsJSON = translations,
) => {
  i18next.addResourceBundle(locale, namespace, translationsJSON);
  i18next.changeLanguage(locale);
};

i18next.init({
  fallbackLng: 'en-US',
  lng: 'en-US',
  // debug: true, // prints helpful status to console
  resources: translations,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18next;
