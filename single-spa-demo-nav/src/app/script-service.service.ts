import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ConfigurationService } from './common/configuration-service';
import { ConfigurationWrapperConstants } from './constants/configuration-wrapper-constants';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  private scripts: any = {};

  constructor(private configurationService: ConfigurationService) {
    const scriptSection = ConfigurationWrapperConstants.UxjsUrls;
    const scriptUrls = [];
    for (let index = 0; index < scriptSection.length; index++) {
      const scriptUrl = this.configurationService.getConfiguration(ConfigurationWrapperConstants.ScriptsList, index);
      if (scriptUrl) {
        scriptUrls.push({ name: scriptSection[index], src: scriptUrl });
      }
    }

    if (scriptUrls.length === environment.scriptList.length) {
      scriptUrls.forEach((script: any) => {
        this.scripts[script.name] = {
          loaded: false,
          src: script.src
        };
      });
    } else if (environment.scriptList != null && environment.scriptList.length > 0) {
      environment.scriptList.forEach((script: any) => {
        this.scripts[script.name] = {
          loaded: false,
          src: script.src
        };
      });

    }
  }

  // load a single or multiple scripts
  load(...scripts: string[]) {
    const promises: any[] = [];
    // push the returned promise of each loadScript call
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    // return promise.all that resolves when all promises are resolved
    return Promise.all(promises);
  }

  // load the script
  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (!this.scripts[name] || !this.scripts[name].src) {
        resolve({ script: name, loaded: false, status: 'Script Source Not Available' });
      } else if (this.scripts[name].loaded) {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      } else {
        // load script
        const script: any = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        // cross browser handling of onLoaded event
        if (script.readyState) {  // IE
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({ script: name, loaded: true, status: 'Loaded' });
            }
          };
        } else {  // Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({ script: name, loaded: true, status: 'Loaded' });
          };
        }
        script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
        // finally append the script tag in the DOM
        document.getElementsByTagName('head')[0].appendChild(script);
      }
    });
  }

}
