import { Component, Element, Event, EventEmitter, h, Listen, Prop, State } from '@stencil/core';
import { hasSlot } from '../../utils/slot';

export interface SixFileUploadSuccessPayload {
  files: FileList;
}

export interface SixFileUploadFailurePayload {
  reason: string;
}

/**
 * @since 2.0.0
 * @status experimental
 *
 * @slot error-text - Error text that is shown when the status is set to invalid. Alternatively, you can use the error-text prop.
 */
@Component({
  tag: 'six-file-upload',
  styleUrl: 'six-file-upload.scss',
  scoped: true,
  shadow: false,
})
export class SixFileUpload {
  @Element() readonly host!: HTMLSixFileUploadElement;

  private fileInput?: HTMLInputElement;

  @State() isOver = false;
  @State() hasError = false;

  /** Set to true if file control should be small. */
  @Prop() readonly compact: boolean = false;

  /** Label of the drop area. */
  @Prop() readonly label?: string;

  /** Set when button is disabled. */
  @Prop() readonly disabled = false;

  /** Accepted MIME-Types. */
  @Prop() readonly accept?: string;

  /** More than one file allowed. */
  @Prop() readonly multiple = false;

  /** Allowed max file size in bytes. */
  @Prop() readonly maxFileSize?: number;

  /** Set to true to draw the control in a loading state. */
  @Prop({ reflect: true }) uploading = false;

  /** The error message shown, if `invalid` is set to true.  */
  @Prop() errorText: string | string[] = '';

  /** If this property is set to true and an error message is provided by `errorText`, the error message is displayed.  */
  @Prop({ reflect: true }) invalid = false;

  /** Triggers when a file is added. */
  @Event({ eventName: 'six-file-upload-success' }) success!: EventEmitter<SixFileUploadSuccessPayload>;

  /** Triggers when an uploaded file doesn't match MIME type or max file size. */
  @Event({ eventName: 'six-file-upload-failure' }) failure!: EventEmitter<SixFileUploadFailurePayload>;

  @Listen('dragenter', { capture: false })
  dragenterHandler() {
    if (!this.disabled) {
      this.isOver = true;
    }
  }

  @Listen('dragover', { capture: false })
  dragoverHandler() {
    if (!this.disabled) {
      this.isOver = true;
    }
  }

  @Listen('dragleave', { capture: false })
  dragleaveHandler() {
    if (!this.disabled) {
      this.isOver = false;
    }
  }

  @Listen('drop', { capture: false })
  dropHandler({ dataTransfer }: DragEvent) {
    if (!this.disabled) {
      this.isOver = false;
      if (dataTransfer != null) {
        this.handleFiles(dataTransfer.files);
      }
    }
  }

  private handleSlotChange = () => {
    let validType = false;

    if (
      this.errorText != null &&
      ((typeof this.errorText == 'string' && this.errorText.trim().length > 0) ||
        (typeof this.errorText == 'object' && this.errorText.length > 0))
    ) {
      validType = true;
    }

    this.hasError = validType || hasSlot(this.host, 'error-text');
    console.log(this.errorText);
    console.log(this.hasError);
  };

  private handleFiles = (files: FileList) => {
    if (this.disabled || files.length === 0 || this.uploading) {
      return;
    }

    if (!this.multiple && files.length > 1) {
      return this.failure.emit({ reason: 'Only one file is allowed.' });
    }

    for (const file of files) {
      if (file == null) {
        return;
      }

      let acceptedTypesList: string[] = [];
      if (this.accept != null) {
        acceptedTypesList = this.accept.replace(/\s/g, '').split(',');
      }

      if (acceptedTypesList.length > 0 && acceptedTypesList.indexOf(file.type) === -1) {
        const reason = files.length > 1 ? 'One or more files have invalid MIME type.' : 'File has invalid MIME type.';
        return this.failure.emit({ reason });
      }

      if (this.maxFileSize != null && file.size > this.maxFileSize) {
        const reason = files.length > 1 ? 'One or more files are too big' : 'File is too big.';
        return this.failure.emit({ reason });
      }
    }

    this.success.emit({ files } as SixFileUploadSuccessPayload);
  };

  componentWillLoad() {
    this.handleSlotChange();
  }

  componentDidLoad() {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
      this.host.addEventListener(eventName, this.preventDefaults, false);
      document.body.addEventListener(eventName, this.preventDefaults, false);
    });
    this.host.shadowRoot?.addEventListener('slotchange', this.handleSlotChange);
  }

  disconnectedCallback() {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
      this.host.removeEventListener(eventName, this.preventDefaults, false);
      document.body.removeEventListener(eventName, this.preventDefaults, false);
    });
    this.host.shadowRoot?.removeEventListener('slotchange', this.handleSlotChange);
  }

  private preventDefaults(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  private onChange = () => {
    if (this.fileInput?.files != null) {
      const files = this.fileInput.files;
      this.handleFiles(files);
      this.fileInput.value = '';
    }
  };

  private renderLabel() {
    return (
      this.label ??
      (this.compact ? (
        'Upload'
      ) : (
        <span>
          Drop files to upload, or <span class="six-file-upload__label--highlighted">browse</span>
        </span>
      ))
    );
  }

  render() {
    const Container = this.compact ? 'six-button' : 'six-card';

    const errorMessages = (Array.isArray(this.errorText) ? this.errorText : [this.errorText]).filter(
      (text) => text != null && text.trim() !== ''
    );

    return (
      <div
        class={{
          'six-file-upload': true,
          'six-file-upload--disabled': this.disabled || this.uploading,
        }}
      >
        <Container
          disabled={this.disabled || this.uploading}
          aria-invalid={this.invalid ? 'true' : 'false'}
          class={{
            'six-file-upload__container--compact': this.compact,
            'six-file-upload__container--full': !this.compact,
          }}
        >
          {this.compact && !this.uploading && (
            <span slot="prefix">
              <six-icon class="six-file-upload__label-icon">arrow_circle_up</six-icon>
            </span>
          )}
          <div
            class={{
              'six-file-upload__drop-zone': true,
              'six-file-upload__drop-zone--hover': this.isOver,
              'six-file-upload__drop-zone--compact': this.compact,
            }}
          >
            {this.uploading ? (
              <span class="six-file-upload__drop-zone__spinner-container">
                <six-spinner /> Uploading...
              </span>
            ) : (
              <div>
                <span>{this.renderLabel()}</span>
                <input
                  class="six-file-upload__input"
                  type="file"
                  name="resume"
                  disabled={this.disabled}
                  accept={this.accept}
                  multiple={this.multiple}
                  onChange={this.onChange}
                  ref={(el) => (this.fileInput = el)}
                />
              </div>
            )}
          </div>
        </Container>
        <div aria-hidden={this.invalid ? 'false' : 'true'}>
          <slot name="error-text">
            {errorMessages.map((text) => (
              <six-error>
                <div class="six-file-upload__error-text">{text}</div>
              </six-error>
            ))}
          </slot>
        </div>
      </div>
    );
  }
}
