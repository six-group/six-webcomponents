import { Injectable } from '@angular/core';
import { ValidationMessagesService } from '@six-group/ui-library-angular';
import { Language, ValidationError } from '@six-group/ui-library';

@Injectable({
  providedIn: 'root',
})
export class CustomValidationMessagesService extends ValidationMessagesService {
  public override getErrorMessage(language: Language, error: ValidationError) {
    switch (error.key) {
      case 'required':
        switch (language) {
          case 'en':
            return 'Required';
        }
    }
    return super.getErrorMessage(language, error);
  }
}
