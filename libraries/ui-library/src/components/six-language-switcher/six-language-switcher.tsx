import { Component, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';

/**
 * @since 2.1.0
 * @status experimental
 **/

export interface SixLanguageSwitcherInput {
  key: string;
  value: string;
}
export type SixLanguageSwitcherChangePayload = string;

const DEFAULT_LANGUAGES = ['EN', 'DE', 'ES'];

/*
 * @since 2.2.0
 * @status experimental
 * @part container - The whole component container
 * @part label - The language label
 * @part separator - The separator between the language labels
 */
@Component({
  tag: 'six-language-switcher',
  styleUrl: 'six-language-switcher.scss',
  shadow: true,
})
export class SixLanguageSwitcher {
  /** The language which should be shown as selected */
  @Prop({ mutable: true, reflect: true }) selected?: string;

  /** The languages which should be selectable options. */
  @Prop() languages: string[] | SixLanguageSwitcherInput[] = DEFAULT_LANGUAGES;

  @Watch('languages')
  handleChangesLanguages(newValue: string[]) {
    if (!Array.isArray(newValue)) {
      throw new Error('languages is expected to be an array');
    }

    this.updateSelectedLanguage();
  }
  /**
   * Emitted when the language switchers value changes
   */
  @Event({ eventName: 'six-language-switcher-change' }) sixChange!: EventEmitter<SixLanguageSwitcherChangePayload>;

  componentWillLoad() {
    if (this.selected === undefined) {
      this.updateSelectedLanguage();
    }
  }

  private updateSelectedLanguage() {
    const selectedLanguage = this.languages[0];
    if (typeof selectedLanguage === 'string') {
      this.selected = selectedLanguage;
      this.sixChange.emit(this.selected);
    } else {
      this.selected = selectedLanguage.key;
      this.sixChange.emit(selectedLanguage.value);
    }
  }

  private handleLanguageSwitching = (newLanguage: string, languageValue?: string) => () => {
    if (languageValue !== undefined) {
      this.sixChange.emit(languageValue);
    } else {
      this.sixChange.emit(newLanguage);
    }
    this.selected = newLanguage;
  };

  render() {
    return (
      <div part="container" class="language-switcher__container">
        {this.languages.map((lang, index) => {
          const language = typeof lang === 'string' ? lang : lang.key;
          return (
            <div
              onClick={this.handleLanguageSwitching(language, typeof lang === 'string' ? lang : lang.value)}
              tabindex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  this.handleLanguageSwitching(language, typeof lang === 'string' ? lang : lang.value)();
                }
              }}
            >
              <span
                part="label"
                class={{
                  'language-switcher__label': true,
                  'language-switcher__label--selected': this.selected === language,
                }}
              >
                {language}
              </span>

              {index < this.languages.length - 1 && (
                <span part="separator" class="language-switcher__separator">
                  /
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
