import { Injectable } from '@angular/core';
import { IUserData } from '../models/Index';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private AutoScrollTimeOut : number;
  public userData = new BehaviorSubject<IUserData>(null);

  public isDistributor = false;

  userInfo = this.userData.asObservable();

  public isExpand = new BehaviorSubject<boolean>(false);
  IsExpandview = this.isExpand.asObservable();

  public isImportQuoteEnabled: boolean = false;

  private partnerInfo = new BehaviorSubject<any>(null);
  public PartnerInfo = this.partnerInfo.asObservable();

  private navigationChangedSubject = new BehaviorSubject<string>(null);
  public navigationChanged$ = this.navigationChangedSubject.asObservable();

  constructor() { }

  public setUserData(data: IUserData) {
    this.userData.next(data);
  }

  public getUserData(): IUserData {
    return this.userData.value;
  }

  public setExpandview(data: boolean) {
    this.isExpand.next(data);
  }

  public setIsImportQuoteEnabled(isEnabled: boolean) {
    this.isImportQuoteEnabled = isEnabled;
  }

  public getIsImportQuoteEnabled(): boolean {
    return this.isImportQuoteEnabled;
  }

  set IsDistributor(val) {
    this.isDistributor = val;
  }

  get IsDistributor() {
    return this.isDistributor;
  }

  setAutoScrollTimeOut(time){
    this.AutoScrollTimeOut = time;
  }
  getAutoScrollTimeOut(){
      return this.AutoScrollTimeOut;
  }

  get ParterInfoData() {
      return this.partnerInfo.value;
  }

  set ParterInfoData(val) {
      this.partnerInfo.next(val);
  }

  public setNavigationLink(link: any) {
    this.navigationChangedSubject.next(link);
  }
}
