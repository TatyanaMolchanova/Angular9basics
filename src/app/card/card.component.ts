import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.sass'],
    interpolation: ['{{', '}}']
})
export class CardComponent implements OnInit {

    @Input() card: Card;
    @Input() index: number;

    // disabled = false;
    title: string = 'My Card Title';
    text = 'My Sample Text';

    cardDate: Date = new Date();

    textColor: string;

    // number = 42;
    // array = [1, 1, 2, 3, 5, 8, 13];
    // obj = {name: 'Tanya', info: {age: 25, job: 'Front-End'}};
    // getInfo(): string {
    //     return 'This is my info';
    // }

    // imgUrl: string = 'https://ghost.nehalist.io/content/images/2017/09/angular-logo-1.png';

    ngOnInit() {
        setTimeout(() => {
            // this.imgUrl = 'https://cdn-media-1.freecodecamp.org/images/1*-8AAdexfOAK9R-AIha_PBQ.png';
            // this.disabled = true;
        }, 3000);
    }

    changeTitle() {
        this.card.title = 'Title has been changed';
    }

    // inputHandler(event: any) {
    //     console.log(event);
    //     const value = event.target.value;
    //     this.title = value;
    // }

    // inputHandler(value) {
    //     this.title = value;
    // }

    changeHandler() {
        console.log(this.title);
    }

}