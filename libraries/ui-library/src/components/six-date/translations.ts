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
    monthsShortGrouped: [
      ['Jan', 'Feb', 'Mar', 'Apr'],
      ['May', 'Jun', 'Jul', 'Aug'],
      ['Sep', 'Oct', 'Nov', 'Dec'],
    ],
    weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    weekdaysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    weekdaysMin: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
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
    monthsShortGrouped: [
      ['Jan.', 'Feb.', 'März', 'Apr.'],
      ['Mai', 'Juni', 'Juli', 'Aug.'],
      ['Sep.', 'Okt.', 'Nov.', 'Dez.'],
    ],
    weekdays: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
    weekdaysShort: ['Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.', 'So.'],
    weekdaysMin: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
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
    monthsShortGrouped: [
      ['janv.', 'févr.', 'mars', 'avr.'],
      ['mai', 'juin', 'juil.', 'août'],
      ['sept.', 'oct.', 'nov.', 'déc.'],
    ],
    weekdays: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'],
    weekdaysShort: ['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.'],
    weekdaysMin: ['lu', 'ma', 'me', 'je', 've', 'sa', 'di'],
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
    monthsShortGrouped: [
      ['gen', 'feb', 'mar', 'apr'],
      ['mag', 'giu', 'lug', 'ago'],
      ['set', 'ott', 'nov', 'dic'],
    ],
    weekdays: ['lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato', 'domenica'],
    weekdaysShort: ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'],
    weekdaysMin: ['lu', 'ma', 'me', 'gi', 've', 'sa', 'do'],
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
    monthsShortGrouped: [
      ['ene', 'feb', 'mar', 'abr'],
      ['may', 'jun', 'jul', 'ago'],
      ['sep', 'oct', 'nov', 'dic'],
    ],
    weekdays: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'],
    weekdaysShort: ['lun', 'mar', 'mié', 'jue', 'vie', 'sáb', 'dom'],
    weekdaysMin: ['lu', 'ma', 'mi', 'ju', 'vi', 'sa', 'do'],
  },
};

export function translateMonth(month: number, language: Language) {
  return i18nDate[language].monthsShort[month - 1];
}

export function translateWeekday(day: number, language: Language) {
  return i18nDate[language].weekdaysMin[day - 1];
}
