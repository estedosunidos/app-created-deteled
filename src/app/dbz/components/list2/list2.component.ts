import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Characte } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid'
@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component implements OnInit {
  @Input()
  public CharacteList: Characte[]= [{
    id:uuid(),
    name:'Krillin',
    power:1000
  }];

  constructor() { }

  ngOnInit() {
  }
  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter()
  onDeleteCharacter(id?:string):void{
    if(!id)return
    this.onDelete.emit(id)
  }
}
