import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
   public name: string = 'Iron Man';
   public age: number = 20;

   get capitaliazeName():String{
    return this.name.toUpperCase()
   }

   getHeroDescription():string{
    return this.name +'is'+ this.age +'years old';
   }

   changeHero(newName:string):void {
    this.name = 'spiderman';
   }
   changeAge():void {
    this.age = 33;
   }
   resetForm():void{
    this.name='Ironman'
    this.age=20
    document.querySelectorAll('h1').forEach(element => {
      element.innerHTML = '<h1>From Angular</h1>';

    });
   }

}
