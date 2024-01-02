import { Injectable } from '@angular/core';
import { Characte } from '../interfaces/character.interface';
import{ v4 as uuid} from 'uuid'
@Injectable({providedIn: 'root'})
export class dbzService {
  public character:Characte[]=[{
    id:uuid(),
    name:'Krillin',
    power:1000
  },{
    id:uuid(),
    name:'Goku',
    power:2000
  },{
    id:uuid(),
    name:'Mew',
    power:3000
  }]
  onNewCharacter(Characte:Characte){
    const newCharacter:Characte={
      id:uuid(),
      ...Characte
    }
     this.character.push(newCharacter)
  }
  deleteCharacterById(index:String){
    this.character=this.character.filter(character =>character.id !==index)
  }

}
