import { Language } from '../../utils/error-messages';

export const i18nDate = {
  en: {
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdaysMin: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    formatHelp: (pattern: string) => `Please enter the date in the format  ${pattern}`,
  },
  de: {
    months: [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ],
    monthsShort: ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'],
    weekdaysMin: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
    formatHelp: (pattern: string) => `Bitte geben Sie das Datum im Format '${pattern}' ein.`,
  },
  fr: {
    months: [
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre',
    ],
    monthsShort: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
    weekdaysMin: ['lu', 'ma', 'me', 'je', 've', 'sa', 'di'],
    formatHelp: (pattern: string) => `Veuillez saisir la date au format '${pattern}'.`,
  },
  it: {
    months: [
      'gennaio',
      'febbraio',
      'marzo',
      'aprile',
      'maggio',
      'giugno',
      'luglio',
      'agosto',
      'settembre',
      'ottobre',
      'novembre',
      'dicembre',
    ],
    monthsShort: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
    weekdaysMin: ['lu', 'ma', 'me', 'gi', 've', 'sa', 'do'],
    formatHelp: (pattern: string) => `Si prega di inserire la data nel formato '${pattern}'.`,
  },
  es: {
    months: [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre',
    ],
    monthsShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    weekdaysMin: ['lu', 'ma', 'mi', 'ju', 'vi', 'sa', 'do'],
    formatHelp: (pattern: string) => `Por favor, introduzca la fecha en el formato '${pattern}'.`,
  },
};

export function translateMonth(month: number, language: Language) {
  return i18nDate[language].months[month - 1];
}

export function translateMonthShort(month: number, language: Language) {
  return i18nDate[language].monthsShort[month - 1];
}

export function translateWeekday(day: number, language: Language) {
  return i18nDate[language].weekdaysMin[day - 1];
}

export function translateFormatHelp(language: Language, pattern: string) {
  return i18nDate[language].formatHelp(pattern);
}
