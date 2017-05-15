import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ToastService} from './toast.service';

@Injectable()
export class ExceptionService {
  constructor(public toast: ToastService) {}

  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    let res = <Response>errorResponse;
    let err = res.json();
    let emsg = err ?
      (err.error ? err.error : JSON.stringify(err)) :
      (res.statusText || 'unknown error');
    this.toast.show(`Error - Bad Response - ${emsg}`, 'close');
    return Observable.of(false);
  }
}
