import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    template: require('./counter.component.html')
})
export class CounterComponent {
    public currentCount = 100;

    public incrementCounter() {
        this.currentCount++;
    }
}