import { SharedService } from './shared.service';
import { TestBed, async } from '@angular/core/testing';
import { IUserData } from '../models/Index';

describe('StateService', () => {
    let sharedService: SharedService;
    beforeEach(() => {
        sharedService = new SharedService();
      });
    it('should create an instance', () => {
        expect(sharedService).toBeTruthy();
    });

    it('should call to all function', () => {
        let data:IUserData
        sharedService.setUserData(data);
        sharedService.setExpandview(false);
        sharedService.setIsImportQuoteEnabled(true);
        sharedService.getIsImportQuoteEnabled();
        sharedService.IsDistributor = true;
        sharedService.IsDistributor.valueOf;
        //expect(sharedService.getuserName).toBeTruthy();
    });

    it('should call to set and get AutoScrollTimeOut', () => {
        sharedService.setAutoScrollTimeOut(3); 
        expect(sharedService.getAutoScrollTimeOut()).toEqual(3); 
    });

    it('should call to set and get ParterInfoData', () => {
        sharedService.ParterInfoData = 3;
        expect(sharedService.ParterInfoData).toEqual(3); 
    });
    
});
