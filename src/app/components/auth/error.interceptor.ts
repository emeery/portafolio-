import { HttpInterceptor,HttpRequest,HttpHandler,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../shared/error/error.component';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private dlg: MatDialog) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        let errorMsg = 'ocurrió un error';
        console.log(err);
        // if(err.error.msg) errorMsg = err.error.msg;
        // if(err.error.message) errorMsg = 'ese correo ya se encuentra registrado';
        // this.dlg.open(ErrorComponent, {data: {msg: errorMsg} });
        return throwError(err);
      })
    );
  }
}
