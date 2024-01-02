import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes: string[] = ['iron man', 'captain america', 'hulk'];
 public deletedHero?:string
  removeLastHero(): void {
    this.deletedHero= this.heroes.pop();
  }
}
