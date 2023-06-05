import { Component, Element, Event, EventEmitter, h, Listen, Prop, State } from '@stencil/core';

interface ISingleFile {
  file: File;
}

interface IMultipleFiles {
  files: FileList;
}

export type SixFileUploadSuccessPayload = ISingleFile | IMultipleFiles;

export interface SixFileUploadFailurePayload {
  reason: string;
}

/**
 * @since 2.0.0
 * @status experimental
 *
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

  private handleFiles = (files: FileList) => {
    if (this.disabled || files.length === 0) {
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

      if (this.maxFileSize && file.size > this.maxFileSize) {
        const reason = files.length > 1 ? 'One or more files are too big' : 'File is too big.';
        return this.failure.emit({ reason });
      }
    }

    const eventPayload: SixFileUploadSuccessPayload = this.multiple ? { files } : { file: files[0] };
    this.success.emit(eventPayload);
  };

  componentDidLoad() {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
      this.host.addEventListener(eventName, this.preventDefaults, false);
      document.body.addEventListener(eventName, this.preventDefaults, false);
    });
  }

  disconnectedCallback() {
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
      this.host.removeEventListener(eventName, this.preventDefaults, false);
      document.body.removeEventListener(eventName, this.preventDefaults, false);
    });
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

    return (
      <div
        class={{
          'six-file-upload': true,
          'six-file-upload--disabled': this.disabled,
        }}
      >
        <Container
          class={{
            'six-file-upload__container--compact': this.compact,
            'six-file-upload__container--full': !this.compact,
          }}
        >
          {this.compact && (
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
        </Container>
      </div>
    );
  }
}
