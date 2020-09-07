const Validation = {}
Validation.install = function (Vue, options) {
  Vue.prototype.$validateImageDropzone = function (file, ref, maxFile, maxFileSize, maxFileSizeText) {
    if (!/\.(jpg|jpeg|png|svg)$/i.test(file.name)) {
      Swal.fire({
        title: "Error",
        text: 'Debe seleccionar una imagen svg, jpg, jpeg o png',
        type: "error",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-inverse-primary"
        }
      });
      ref.files.pop();
      if (file.previewElement.parentNode.classList.contains("dz-started") && ref.files < 1) {
        file.previewElement.parentNode.classList.remove("dz-started");
      }
      if (file.previewElement)
        file.previewElement.parentNode.removeChild(file.previewElement);
    }
    if (file.size > maxFileSize) {
      Swal.fire({
        title: "Error",
        text: 'Debe seleccionar una imagen menor a ' + maxFileSizeText,
        type: "error",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-inverse-primary"
        }
      });
      if (ref.files.length) {
        ref.files.pop();
      }
      if (file.previewElement.parentNode.classList.contains("dz-started") && ref.files < 1) {
        file.previewElement.parentNode.classList.remove("dz-started");
      }
      file.previewElement.parentNode.removeChild(file.previewElement);
    }
    if (ref.files.length > maxFile) {
      Swal.fire({
        title: "Error",
        text: 'Solo puede subir ' + maxFile + ' archivo',
        type: "error",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-inverse-primary"
        }
      });
      ref.files.pop();
      if (ref.files.length)
        file.previewElement.parentNode.removeChild(file.previewElement);
    }
  }

  Vue.prototype.$validatePDFDropzone = function (file, ref, maxFile, maxFileSize, maxFileSizeText) {
    if (!/\.(pdf)$/i.test(file.name)) {
      Swal.fire({
        title: "Error",
        text: 'Debe seleccionar un pdf',
        type: "error",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-inverse-primary"
        }
      });
      ref.files.pop();
      if (file.previewElement.parentNode.classList.contains("dz-started") && ref.files < 1) {
        file.previewElement.parentNode.classList.remove("dz-started");
      }
      if (file.previewElement)
        file.previewElement.parentNode.removeChild(file.previewElement);
    }
    if (file.size > maxFileSize) {
      Swal.fire({
        title: "Error",
        text: 'Debe seleccionar un pdf menor a ' + maxFileSizeText,
        type: "error",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-inverse-primary"
        }
      });
      if (ref.files.length) {
        ref.files.pop();
      }
      if (file.previewElement.parentNode.classList.contains("dz-started") && ref.files < 1) {
        file.previewElement.parentNode.classList.remove("dz-started");
      }
      file.previewElement.parentNode.removeChild(file.previewElement);
    }
    if (ref.files.length > maxFile) {
      Swal.fire({
        title: "Error",
        text: 'Solo puede subir ' + maxFile + ' archivo',
        type: "error",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-inverse-primary"
        }
      });
      ref.files.pop();
      if (ref.files.length)
        file.previewElement.parentNode.removeChild(file.previewElement);
    }
  }

  Vue.prototype.$validateVideoDropzone = function (file, ref, maxFile, maxFileSize, maxFileSizeText) {
    if (!/\.(mp4)$/i.test(file.name)) {
      Swal.fire({
        title: "Error",
        text: 'Debe seleccionar un video mp4',
        type: "error",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-inverse-primary"
        }
      });
      ref.files.pop();
      if (file.previewElement.parentNode.classList.contains("dz-started") && ref.files < 1) {
        file.previewElement.parentNode.classList.remove("dz-started");
      }
      if (file.previewElement)
        file.previewElement.parentNode.removeChild(file.previewElement);
    }
    if (file.size > maxFileSize) {
      Swal.fire({
        title: "Error",
        text: 'Debe seleccionar una video menor a ' + maxFileSizeText,
        type: "error",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-inverse-primary"
        }
      });
      if (ref.files.length) {
        ref.files.pop();
      }
      if (file.previewElement.parentNode.classList.contains("dz-started") && ref.files < 1) {
        file.previewElement.parentNode.classList.remove("dz-started");
      }
      file.previewElement.parentNode.removeChild(file.previewElement);
    }
    if (ref.files.length > maxFile) {
      Swal.fire({
        title: "Error",
        text: 'Solo puede subir ' + maxFile + ' archivo',
        type: "error",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-inverse-primary"
        }
      });
      ref.files.pop();
      if (ref.files.length)
        file.previewElement.parentNode.removeChild(file.previewElement);
    }
  }

  Vue.prototype.$uploadImageUploadComponent = function (file, ref, maxFileSize, maxFileSizeText, url) {
    if (!/\.(jpg|jpeg|png)$/i.test(file.name)) {
      /*options.app.$bvToast.toast('Debe seleccionar una imagen jpg, jpeg o png', {
          title: "Error",
          autoHideDelay: 5000,
          appendToast: true,
          variant: 'danger',
          toaster: 'b-toaster-top-right'
      })*/
      Swal.fire({
        title: "Error",
        text: 'Debe seleccionar una imagen jpg, jpeg o png',
        type: "error",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-inverse-primary"
        }
      });
      return;
    }
    if (file.size > maxFileSize) {
      /*options.app.$bvToast.toast('Debe seleccionar una imagen menor a '+maxFileSizeText, {
          title: "Error",
          autoHideDelay: 5000,
          appendToast: true,
          variant: 'danger',
          toaster: 'b-toaster-top-right'
      })*/
      Swal.fire({
        title: "Error",
        text: 'Debe seleccionar una imagen menor a ' + maxFileSizeText,
        type: "error",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: "btn btn-inverse-primary"
        }
      });
      return;
    }
    if (file) {
      file.url = ''
      let URL = window.URL || window.webkitURL
      if (URL && URL.createObjectURL) {
        file.url = URL.createObjectURL(file.file)
        //Get Ref Editor
        let quill = ref.quill;
        //Get Lenght of text on Editor
        let length = quill.getSelection().index;
        const fd = new FormData();
        fd.append('image', file.file);
        /*options.app.$bvToast.toast('La imagen se esta subiendo, espere por favor', {
            title: "Info",
            noAutoHide: true,
            appendToast: true,
            variant: 'info',
            toaster: 'b-toaster-top-right'
        })*/

        Swal.fire({
          title: 'Info',
          text: 'Subiendo imagen...',
          type: 'info',
          allowOutsideClick: false,
          showConfirmButton: false,
          allowOutsideClick: false,
        });

        axios.post(url + '/image', fd).then(response => {
          if (response) {
            //options.app.$bvToast.hide();
            Swal.close();
          }
          quill.insertEmbed(length, 'image', response.data.image)
          quill.setSelection(length + 1);
        }).
          catch(error => {
            /*this.$bvToast.toast(error.response.data.message, {
                title: error.response.data.title,
                autoHideDelay: 5000,
                appendToast: true,
                variant: 'danger',
                toaster: 'b-toaster-top-right'
            })*/

            Swal.fire({
              title: error.response.data.title,
              text: error.response.data.message,
              type: "error",
              confirmButtonText: "OK",
              buttonsStyling: false,
              customClass: {
                confirmButton: "btn btn-inverse-primary"
              }
            });

          });
      }
    }
  }
}
export default Validation;
