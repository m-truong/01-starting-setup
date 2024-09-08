import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initActionEvent } from './store/counter.actions';

@Component({
    selector: 'app-root',
    standalone: true,
    // remember must always add new components that are INSIDE the TEMPLATE of the 'standalone angular component'
    imports: [],
    templateUrl: './app.component.html',
    styleUrls: [./app.component.css'],
})
export class AppComponent implements OnInit {
    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(initActionEvent());
    }
}
