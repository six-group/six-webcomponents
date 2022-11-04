(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[39],{62:function(i,e,l){"use strict";l.r(e),l.d(e,"six_file_upload",(function(){return t}));var o=l(14),s=l(15),a=l(21),t=function(){function i(e){var l=this;Object(o.a)(this,i),Object(a.i)(this,e),this.fileUploadSuccessEvent=Object(a.e)(this,"six-file-upload-success",7),this.fileUploadFailureEvent=Object(a.e)(this,"six-file-upload-failure",7),this.isOver=!1,this.compact=!1,this.disabled=!1,this.maxFileSize=void 0,this.handleFiles=function(i){if(!l.disabled){var e=i.item(0);if(e)return l.accept&&l.accept!==e.type?l.fileUploadFailureEvent.emit({reason:"File has invalid MIME type."}):l.maxFileSize&&e.size>l.maxFileSize?l.fileUploadFailureEvent.emit({reason:"File is too big."}):void l.fileUploadSuccessEvent.emit({file:e})}},this.onChange=function(){var i;if(null===(i=l.fileInput)||void 0===i?void 0:i.files){var e=l.fileInput.files;l.handleFiles(e),l.fileInput.value=""}}}return Object(s.a)(i,[{key:"dragenterHandler",value:function(){this.disabled||(this.isOver=!0)}},{key:"dragoverHandler",value:function(){this.disabled||(this.isOver=!0)}},{key:"dragleaveHandler",value:function(){this.disabled||(this.isOver=!1)}},{key:"dropHandler",value:function(i){var e=i.dataTransfer;this.disabled||(this.isOver=!1,e&&this.handleFiles(e.files))}},{key:"componentDidLoad",value:function(){var i=this;["dragenter","dragover","dragleave","drop"].forEach((function(e){i.host.addEventListener(e,i.preventDefaults,!1),document.body.addEventListener(e,i.preventDefaults,!1)}))}},{key:"disconnectedCallback",value:function(){var i=this;["dragenter","dragover","dragleave","drop"].forEach((function(e){i.host.removeEventListener(e,i.preventDefaults,!1),document.body.removeEventListener(e,i.preventDefaults,!1)}))}},{key:"preventDefaults",value:function(i){i.preventDefault(),i.stopPropagation()}},{key:"renderLabel",value:function(){return this.label||(this.compact?"Upload":Object(a.g)("span",null,"Drop files to upload, or ",Object(a.g)("span",{class:"six-file-upload__label--highlighted"},"browse")))}},{key:"render",value:function(){var i=this,e=this.compact?"six-button":"six-card";return Object(a.g)("div",{class:{"six-file-upload":!0,"six-file-upload--disabled":this.disabled}},Object(a.g)(e,{class:{"six-file-upload__container--compact":this.compact,"six-file-upload__container--full":!this.compact}},this.compact&&Object(a.g)("span",{slot:"prefix"},Object(a.g)("six-icon",{class:"six-file-upload__label-icon"},"arrow_circle_up")),Object(a.g)("div",{class:{"six-file-upload__drop-zone":!0,"six-file-upload__drop-zone--hover":this.isOver,"six-file-upload__drop-zone--compact":this.compact}},Object(a.g)("span",null,this.renderLabel()),Object(a.g)("input",{class:"six-file-upload__input",type:"file",name:"resume",disabled:this.disabled,accept:this.accept,onChange:this.onChange,ref:function(e){return i.fileInput=e}}))))}},{key:"host",get:function(){return Object(a.f)(this)}}]),i}();t.style=".sc-six-file-upload-h{position:relative;box-sizing:border-box}.sc-six-file-upload-h *.sc-six-file-upload,.sc-six-file-upload-h *.sc-six-file-upload:before,.sc-six-file-upload-h *.sc-six-file-upload:after{box-sizing:inherit}.sc-six-file-upload-h{position:static;display:block}.six-file-upload.sc-six-file-upload six-card.sc-six-file-upload{box-shadow:none;padding:0;width:100%}.six-file-upload.sc-six-file-upload six-card.kyc-file-upload__container--compact.sc-six-file-upload{width:inherit}.six-file-upload__label--highlighted.sc-six-file-upload{color:var(--six-color-action-600)}.six-file-upload__container--full.sc-six-file-upload{border:dashed 1px var(--six-color-web-rock-500)}.six-file-upload__label-icon.sc-six-file-upload{margin-right:0.5rem}.six-file-upload__drop-zone.sc-six-file-upload{padding:2rem 0;display:flex;justify-content:center;width:100%;transition:background-color 0.3s}.six-file-upload__drop-zone--compact.sc-six-file-upload{padding:0}.six-file-upload__input.sc-six-file-upload{cursor:pointer;position:absolute;top:0;left:0;width:100%;user-select:none;height:100%;opacity:0;outline:none}.six-file-upload--disabled.sc-six-file-upload .six-file-upload__drop-zone.sc-six-file-upload{background-color:var(--six-color-inactive)}.six-file-upload.sc-six-file-upload:not(.six-file-upload--disabled) .six-file-upload__drop-zone.sc-six-file-upload:hover,.six-file-upload__drop-zone--hover.sc-six-file-upload{background-color:var(--six-color-action-light-to-be-defined)}.six-file-upload.sc-six-file-upload:not(.six-file-upload--disabled) .six-file-upload__drop-zone.sc-six-file-upload:hover.six-file-upload__drop-zone--compact,.six-file-upload__drop-zone--hover.six-file-upload__drop-zone--compact.sc-six-file-upload{background-color:inherit}.six-file-upload--disabled.sc-six-file-upload .six-file-upload__input.sc-six-file-upload{cursor:not-allowed}"}}]);
//# sourceMappingURL=39.7a107919.chunk.js.map