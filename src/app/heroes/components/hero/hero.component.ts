import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  public changedName: boolean = false;
  public changedAge: boolean = false;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(name:string):void{
    this.changedName = true;
    this.name = name;
  }

  changeAge(age:number):void{
    this.changedAge = true;
    this.age = age;
  }

  reset():void{
    this.changedAge = false;
    this.changedName = false;
    this.name = 'ironman';
    this.age = 45;
  }

}
