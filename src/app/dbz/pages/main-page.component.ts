import { Component } from '@angular/core';
import { Characte } from '../interfaces/character.interface';
import { dbzService } from '../service/dbz.service';

@Component({
  selector: 'app-dbz',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
 constructor(private dbzService:dbzService){}

 get character():Characte[]{
   return [...this.dbzService.character]
 }
 onDeleteCharacter(id:string):void{
  this.dbzService.deleteCharacterById(id)
 }
 onNewCharacter(characters:Characte):void{
   this.dbzService.onNewCharacter(characters)
 }

}
