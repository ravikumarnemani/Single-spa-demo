import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service;

  beforeEach(() => {
    service = new LoadingService();
  });

  it('should run #show()', async () => {
    service.loaderSubject = service.loaderSubject || {};
    service.loaderSubject.next = () => { };
    service.show();
    // expect(service.loaderSubject.next).toHaveBeenCalled();
  });

  it('should run #hide()', async () => {
    service.loaderSubject = service.loaderSubject || {};
    service.loaderSubject.next = () => { };
    service.hide();
    // expect(service.loaderSubject.next).toHaveBeenCalled();
  });

});
