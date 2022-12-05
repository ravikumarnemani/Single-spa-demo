import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoaderState } from './loading.models';
import { LoadingService } from './loading.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit, OnDestroy {

    show = false;
    private subscription: Subscription;
    
    constructor(private loadingService: LoadingService) { }

    ngOnInit() {
        
        this.subscription = this.loadingService.loaderState
            .subscribe((state: LoaderState) => {
                this.show = state.show;
            });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
