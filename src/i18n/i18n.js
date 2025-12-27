import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import it from './it.json';
import en from './en.json';

const resources = { it: { translation: it }, en: { translation: en } };

i18n.use(initReactI18next).init({
  resources,
  lng: 'it',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
