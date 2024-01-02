import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Characte } from 'src/app/dbz/interfaces/character.interface';
import {v4 as uuid} from 'uuid'
@Component({
  selector: 'app-addcharacter',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css']
})
export class AddcharacterComponent implements OnInit {
  @Output()
  onNewCharacter = new EventEmitter<Characte>();
  public character:Characte={
    id:uuid(),
    name:'',
    power:0
  }
  constructor() { }

  ngOnInit() {
  }
  emitCharacter():void{
    if(this.character.name.length===0)return
    this.onNewCharacter.emit(this.character)
    console.log(this.character)
  }
}
