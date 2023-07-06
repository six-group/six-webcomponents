import { getErrorMessage, Language, ValidationError } from '@six-group/ui-library';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ValidationMessagesService {
  public getErrorMessage(language: Language, error: ValidationError): string | undefined {
    return getErrorMessage(language, error);
  }
}
