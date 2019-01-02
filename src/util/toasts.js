
import toastr from 'toastr';

export const Types = { 
  success: 'success',
  error: 'error',
  warn: 'warning',
  info: 'info',
}

toastr.options.positionClass = 'toast-bottom-center';
toastr.options.closeButton = true;

const toast = (type, msg, header) => {
  if(type){
    toastr[type](msg, header);
  }else{
    toastr.info(msg, header);
  }
}

export default toast;