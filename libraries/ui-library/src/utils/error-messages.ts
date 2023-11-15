export const languages = ['de', 'fr', 'it', 'en', 'es'] as const;
export type Language = (typeof languages)[number];

const dateFormat = new Intl.DateTimeFormat('de-CH');

export type ValidationError =
  | { key: 'required' }
  | { key: 'requiredtrue' }
  | { key: 'email'; requiredPattern: string }
  | { key: 'minlength'; requiredLength: number }
  | { key: 'maxlength'; requiredLength: number }
  | { key: 'pattern'; requiredPattern: string }
  | { key: 'min'; min: number }
  | { key: 'max'; max: number }
  | { key: 'mindate'; mindate: Date; actual: Date }
  | { key: 'maxdate'; maxdate: Date; actual: Date }
  | { key: 'invaliddate'; actual: Date }
  | { key: 'custom'; text: string };

/**
 * Returns an error message for the given language and error.
 */
export function getErrorMessage(language: Language, error: ValidationError): string | undefined {
  try {
    const message = translation[language][error.key];
    switch (error.key) {
      case 'required':
      case 'requiredtrue':
      case 'email':
        return message;
      case 'minlength':
      case 'maxlength':
        return message.replace('{requiredLength}', String(error.requiredLength));
      case 'pattern':
        return message.replace('{pattern}', String(error.requiredPattern));
      case 'min':
        return message.replace('{min}', String(error.min));
      case 'max':
        return message.replace('{max}', String(error.max));
      case 'mindate':
        return message.replace('{mindate}', dateFormat.format(error.mindate));
      case 'maxdate':
        return message.replace('{maxdate}', dateFormat.format(error.maxdate));
      case 'invaliddate':
        return message;
      case 'custom':
        return error.text;
    }
  } catch (e) {
    console.warn(`no error message in '${language}' for error:`, error);
    return undefined;
  }
}

const translation: Record<Language, Record<string, string>> = {
  en: {
    required: 'Please fill out this field.',
    minlength: 'Please enter at least {requiredLength} characters.',
    maxlength: 'Please enter no more than {requiredLength} characters.',
    pattern: 'Please enter a value that matches the pattern: {pattern}.',
    email: 'Please enter a valid email address.',
    min: 'Please enter a value greater than or equal to {min}.',
    max: 'Please enter a value less than or equal to {max}.',
    requiredtrue: 'Please check this field.',
    mindate: 'Please enter a date on or after {mindate}.',
    maxdate: 'Please enter a date on or before {maxdate}.',
    invaliddate: 'Please enter a valid date.',
  },
  fr: {
    required: "Veuillez remplir ce champ s'il vous plaît.",
    minlength: 'Veuillez entrer au moins {requiredLength} caractères.',
    maxlength: 'Veuillez entrer au maximum {requiredLength} caractères.',
    pattern: 'Veuillez entrer une valeur qui correspond au format : {pattern}.',
    email: 'Veuillez entrer une adresse email valide.',
    min: 'Veuillez entrer une valeur supérieure ou égale à {min}.',
    max: 'Veuillez entrer une valeur inférieure ou égale à {max}.',
    requiredtrue: "Veuillez cocher cette case s'il vous plaît.",
    mindate: 'Veuillez entrer une date le {mindate} ou après.',
    maxdate: 'Veuillez entrer une date le {maxdate} ou avant.',
    invaliddate: 'Veuillez entrer une date valide.',
  },
  de: {
    required: 'Bitte füllen Sie dieses Feld aus.',
    minlength: 'Bitte geben Sie mindestens {requiredLength} Zeichen ein.',
    maxlength: 'Bitte geben Sie höchstens {requiredLength} Zeichen ein.',
    pattern: 'Bitte geben Sie einen Wert ein, der dem Muster entspricht: {pattern}.',
    email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
    min: 'Bitte geben Sie einen Wert größer oder gleich {min} ein.',
    max: 'Bitte geben Sie einen Wert kleiner oder gleich {max} ein.',
    requiredtrue: 'Bitte aktivieren Sie dieses Feld.',
    mindate: 'Bitte geben Sie ein Datum am oder nach dem {mindate} ein.',
    maxdate: 'Bitte geben Sie ein Datum am oder vor dem {maxdate} ein.',
    invaliddate: 'Bitte geben Sie ein gültiges Datum ein.',
  },
  it: {
    required: 'Si prega di compilare questo campo.',
    minlength: 'Si prega di inserire almeno {requiredLength} caratteri.',
    maxlength: 'Si prega di inserire al massimo {requiredLength} caratteri.',
    pattern: 'Si prega di inserire un valore che corrisponde al formato: {pattern}.',
    email: 'Si prega di inserire un indirizzo email valido.',
    min: 'Si prega di inserire un valore maggiore o uguale a {min}.',
    max: 'Si prega di inserire un valore minore o uguale a {max}.',
    requiredtrue: 'Si prega di spuntare questo campo.',
    mindate: 'Si prega di inserire una data il {mindate} o successiva.',
    maxdate: 'Si prega di inserire una data il {maxdate} o precedente.',
    invaliddate: 'Inserisci una data valida.',
  },

  es: {
    required: 'Por favor, rellene este campo.',
    minlength: 'Por favor, introduzca al menos {requiredLength} caracteres.',
    maxlength: 'Por favor, introduzca no más de {requiredLength} caracteres.',
    pattern: 'Por favor, introduzca un valor que coincida con el patrón: {pattern}.',
    email: 'Por favor, introduzca una dirección de correo electrónico válida.',
    min: 'Por favor, introduzca un valor mayor o igual a {min}.',
    max: 'Por favor, introduzca un valor menor o igual a {max}.',
    requiredtrue: 'Por favor, marque este campo.',
    mindate: 'Por favor, introduzca una fecha igual o posterior a {mindate}.',
    maxdate: 'Por favor, introduzca una fecha igual o anterior a {maxdate}.',
    invaliddate: 'Por favor, introduzca una fecha válida.',
  },
};
