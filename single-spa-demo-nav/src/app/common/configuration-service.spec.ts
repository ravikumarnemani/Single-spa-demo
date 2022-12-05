import { ConfigurationService } from './configuration-service';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';


describe('ConfigurationService', () => {
  let service;
  let httpClientSpy: { post: jasmine.Spy, get: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ConfigurationService(undefined, undefined, undefined);
  });

  it('should run #loadConfiguration()', async () => {
    service.sessionStorageService = service.sessionStorageService || {};
    service.cookieService = service.cookieService || {};
    service.cookieService.get = () => { };
    service.sessionStorageService.readFromSessionStorage = () => { };
    service.sessionStorageService.writeToSessionStorage = () => { };
    service.injector = service.injector || {};
    httpClientSpy.get.and.returnValue(of({}));
    service.injector = {
      get: (service: any) => {
        return httpClientSpy;
      }
    }
    environment.isConfigurationLoadFromApi = true;
    service.loadConfiguration();
  });

  it('should run #getConfiguration()', async () => {
    service.configurations = service.configurations || {};
    service.configurations.key = 'key';
    service.getConfiguration('key');
  });

  it('should run #getDSARedirectURL()', async () => {
    service.getDSARedirectURL();
  });

});
