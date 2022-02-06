import { Component } from '@angular/core';
import { Color } from './model/color';
import { Fruit } from './model/fruit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  newFruitName = ''
  newFruitColor = ''

  availableColors: string[] = [];

  fruits: Fruit[] = [];

  ngOnInit() {
    this.availableColors = Object.keys(Color).filter((item) => {
      return isNaN(Number(item));
    });
    console.log(this.availableColors)
  }

  addFruit() { 
    if(this.newFruitName != '' && this.newFruitColor != ''){
      this.fruits.push(new Fruit(this.newFruitName, this.newFruitColor))
    } else {
      alert('Please fill in all the details.')
    }
   
  }
}
