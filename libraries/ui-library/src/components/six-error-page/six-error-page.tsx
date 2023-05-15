import { Component, h, Prop } from '@stencil/core';

enum ERROR_CODE {
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
const TITLE_PER_ERROR_CODE = {
  [ERROR_CODE.FORBIDDEN]: {
    en: 'Access Denied',
    de: 'Kein Zugriff',
  },
  [ERROR_CODE.NOT_FOUND]: {
    en: 'Not Found',
    de: 'Seite nicht gefunden',
  },
  [ERROR_CODE.INTERNAL_SERVER_ERROR]: {
    en: 'Ooops!',
    de: 'Ups!',
  },
};

const DESCRIPTION_PER_ERROR_CODE = {
  [ERROR_CODE.FORBIDDEN]: {
    en: [
      'You don’t have permission to access this page. ',
      'Please contact an administrator or click the SIX logo on top left.',
    ],
    de: [
      'Sie haben keine Zugriffsberechtigung auf diese Seite.',
      'Bitte wenden Sie sich an einen Administrator oder klicken Sie auf das SIX-Logo oben links.',
    ],
  },
  [ERROR_CODE.NOT_FOUND]: {
    en: ['We have not found the page you requested.', 'Please click the SIX logo on top left.'],
    de: ['Wir haben die angeforderte Seite nicht gefunden.', 'Bitte klicken Sie auf das SIX-Logo oben links.'],
  },
  [ERROR_CODE.INTERNAL_SERVER_ERROR]: {
    en: ['Sorry, we messed up! We try to fix this.', 'Please click the SIX logo on top left.'],
    de: [
      'Sorry, das war unser Fehler! Wir versuchen das zu beheben.',
      'Bitte klicken Sie auf das SIX-Logo oben links.',
    ],
  },
};
/*
 * @since 2.2.0
 * @status experimental
 * @part container - The whole component container
 * @part label - The language label
 * @part separator - The separator between the language labels
 */

@Component({
  tag: 'six-error-page',
  styleUrl: 'six-error-page.scss',
  shadow: true,
})
export class SixErrorPage {
  /**
   * Defines error Code and thus displays the proper error page.
   */
  @Prop() errorCode: number;

  /**
   * Defines language and thus displays the proper error page in the selected language.
   */
  @Prop() language: 'en' | 'de' = 'en';

  /**
   * Defines a custom title.
   */
  @Prop() customTitle?: string;

  /**
   * Defines a custom description.
   */
  @Prop() customDescription?: string[];

  /**
   * Defines a custom icon.
   */
  @Prop() customIcon?: string;

  private getIconName() {
    if (this.customIcon !== undefined) {
      return this.customIcon;
    }

    if (this.errorCode === undefined) {
      return;
    }

    if (this.errorCode === ERROR_CODE.FORBIDDEN) {
      return 'lock';
    }

    if (this.errorCode === ERROR_CODE.NOT_FOUND) {
      return 'find-in-page';
    }

    if (this.errorCode === ERROR_CODE.INTERNAL_SERVER_ERROR) {
      return 'sentiment-dissatisfied';
    }
  }

  private getErrorTitle() {
    if (this.customTitle !== undefined) {
      return this.customTitle;
    }

    if (this.errorCode === undefined) {
      return;
    }

    return TITLE_PER_ERROR_CODE[this.errorCode][this.language];
  }

  private getErrorDescription() {
    if (this.errorCode === undefined && this.customDescription === undefined) {
      return;
    }

    const descriptions = this.getDescriptions();
    return descriptions.map((errorMessage) => <div>{errorMessage}</div>);
  }

  private getDescriptions() {
    if (this.customDescription !== undefined) {
      return this.customDescription;
    }

    return DESCRIPTION_PER_ERROR_CODE[this.errorCode][this.language];
  }

  render() {
    return (
      <div part="container">
        <div class="six-error-page__icon-container" part="icon-container">
          <six-picto size="4xl" class="six-error-page__icon" part="icon">
            {this.getIconName()}
          </six-picto>
        </div>
        <div class="six-error-page__title" part="title">
          {this.getErrorTitle()}
        </div>
        <div class="six-error-page__description" part="description">
          {this.getErrorDescription()}
        </div>
      </div>
    );
  }
}
