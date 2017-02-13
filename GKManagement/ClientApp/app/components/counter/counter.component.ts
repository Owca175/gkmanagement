import { Component } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
    selector: 'counter',
    template: require('./counter.component.html')
})
export class CounterComponent {
    public currentCount = 100;

    public incrementCounter() {
        this.currentCount++;
    }

    public settings = {
        columns: {
            id: {
                title: 'ID'
            },
            name: {
                title: 'Full Name'
            },
            username: {
                title: 'User Name'
            },
            email: {
                title: 'Email'
            }
        }
    };
}
