import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

export interface SixFileListDownloadPayload {
  fileId: string;
  name: string;
}

export interface SixFileListRemovePayload {
  fileId: string;
  name: string;
}

/**
 * @since 2.0.0
 * @status experimental
 *
 */
@Component({
  tag: 'six-file-list-item',
  styleUrl: 'six-file-list-item.scss',
  shadow: true,
})
export class SixFileListItem {
  /** An id to clearly identify the file */
  @Prop({ reflect: true }) identifier = '';

  /** The filename */
  @Prop({ reflect: true }) name = '';

  /** The date when the file was uploaded */
  @Prop({ reflect: true }) date = '';

  /** The file size. This number will be divided by 1024 to show the filesize in KB */
  @Prop({ reflect: true }) size: number;

  /** Set to true if you don't want to allow to download this file */
  @Prop({ reflect: true }) nodownload = false;

  /** Set to true if you don't want to allow to delete this file */
  @Prop({ reflect: true }) nodelete = false;

  /** Triggered on file download. */
  @Event({ eventName: 'six-file-list-item-download' }) downloadEvent: EventEmitter<SixFileListDownloadPayload>;

  /** Triggered on file remove. */
  @Event({ eventName: 'six-file-list-item-remove' }) removeEvent: EventEmitter<SixFileListRemovePayload>;

  downloadFile = () => {
    if (this.nodownload) {
      return;
    }

    this.downloadEvent.emit({ fileId: this.identifier, name: this.name });
  };

  removeFile = () => {
    if (this.nodelete) {
      return;
    }

    this.removeEvent.emit({ fileId: this.identifier, name: this.name });
  };

  render() {
    return (
      <div class="six-files-list-item">
        <span
          class={{
            'six-files-list-item__name': true,
            'six-files-list-item__name--disabled': this.nodownload,
          }}
          onClick={this.downloadFile}
        >
          {this.name}
        </span>
        <span class="six-files-list-item__date">{this.date}</span>
        {this.size !== undefined && <span class="six-files-list-item__size">{Math.round(this.size / 1024)} KB</span>}
        <six-icon
          class={{
            'six-files-list-item__icon': true,
            'six-files-list-item__icon--disabled': this.nodelete,
          }}
          size="small"
          onClick={this.removeFile}
        >
          delete
        </six-icon>
      </div>
    );
  }
}
