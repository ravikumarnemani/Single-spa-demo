import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { ScriptService } from '../script-service.service';
import { LoadingService } from '../shared/loading/loading.service';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class StandardRulesResolver implements Resolve<any> {
  constructor(public scriptService: ScriptService, private loadingService: LoadingService) { }

  resolve() {
    return this.loadComponentScripts();
  }

  loadComponentScripts() {
    this.loadingService.show();
    const scriptList = ['standardrulesUX'];
    return new Promise((resolve, reject) => {
      this.scriptService
        // one or more arguments
        .load(...scriptList)
        .then(() => {
          this.loadingService.hide();
          resolve(true);
        }).catch(() => {
          this.loadingService.hide();
          reject(false);
        });
    });
  }
}

