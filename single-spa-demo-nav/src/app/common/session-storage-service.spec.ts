import { SessionStorageService } from './session-storage-service';
import { TestBed, async } from '@angular/core/testing';

describe('SessionStorageService', () => {
    let sessionStorageService: SessionStorageService;
    beforeEach(() => {
        sessionStorageService = new SessionStorageService();
      });
    it('should create an instance', () => {
        expect(sessionStorageService).toBeTruthy();
    });

    it('should call to all function with empty key and value', () => {
        sessionStorageService.writeToSessionStorage('','');
        sessionStorageService.readFromSessionStorage('');
        sessionStorageService.removeFromSessionStorage('');
    });

    it('should call to all function with valid key and value', () => {
        sessionStorageService.writeToSessionStorage('test','value');
        expect(sessionStorageService.readFromSessionStorage('test')).toEqual("value");
        sessionStorageService.removeFromSessionStorage('test');
    });
    
});
