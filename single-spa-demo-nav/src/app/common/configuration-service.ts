import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SessionStorageService } from './session-storage-service';


@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private configurations: any;

  

  constructor(private injector: Injector, private sessionStorageService: SessionStorageService, ) { }

  loadConfiguration() {
    const currentURL = new URL(window.location.href);
    
    // create cookie here
    // if (environment.isConfigurationLoadFromApi) {
    //   // this.configurations = this.sessionStorageService.readFromSessionStorage('Configurations');
    //   // if (!this.configurations) {
    //   const http = this.injector.get(HttpClient);
    //   let url = '';
    //   const dashboardCookie = this.cookieService.get('osc4-dashboard-cookie');
    //   if (dashboardCookie) {
    //     const dashboardCookieInfo = JSON.parse(dashboardCookie);
    //     url = (dashboardCookieInfo.AppSettingUrl || '');
    //   }
    //   if (url) {
    //     url = `${url}Configuration`;
    //   } else {
    //     url = `${this.configurationWrapperUrl}/api/Configuration`;
    //   }
    //   return new Promise<void>((resolve) => {
    //     http.get(url)
    //       .subscribe((response) => {
    //         this.configurations = response;
    //         this.sessionStorageService.writeToSessionStorage('Configurations', response);
    //         resolve();
    //       }, (error) => {
    //         this.configurations = environment;
    //         resolve();
    //       });
    //   });
    //   // }
    // }
  }

  getConfiguration(key: string, scriptKey?: number) {
    let configuration = '';
    // if (this.configurations) {
    //   if (scriptKey !== undefined) {
    //     const scriptSection = environment[key];
    //     const configName = scriptSection[scriptKey]?.name;
    //     if (configName) {
    //       configuration = this.configurations[configName];
    //     }
    //   } else {
    //     configuration = this.configurations[key];
    //   }
    // }
    // if (!configuration) {
    //   if (scriptKey !== undefined) {
    //     const scriptSection = environment[key];
    //     configuration = scriptSection[scriptKey].src;
    //   } else {
    //     configuration = environment[key];
    //   }
    // }
    return configuration;
  }
  // public getDSARedirectURL() {
  //   return this.dsaRedirectURL;
  //}
}


export function initApp(configurationService: ConfigurationService) {
  return () => configurationService.loadConfiguration();
}

