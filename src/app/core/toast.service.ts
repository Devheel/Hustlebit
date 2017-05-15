import {Injectable} from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Injectable()
export class ToastService {
  constructor(public MdSnackBar: MdSnackBar) {}
  show(m, a?: string) {
    a = '' ? a = 'Close' : null;
    this.MdSnackBar.open(m, a, {
      duration: 2000,
    }).onAction(
      // TODO check if it's an http request and if so retry on fail
    );
  }
}
