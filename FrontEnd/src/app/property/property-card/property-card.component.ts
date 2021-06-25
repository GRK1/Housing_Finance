import { createDirectiveDefinitionMap } from "@angular/compiler/src/render3/partial/directive";
import { Component } from "@angular/core";

@Component({
    selector:'app-property-card',
    // template: '<h1>I am a card</h1>',
    // styles:['h1{font-weight:normal;}']
    templateUrl:'property-card.component.html',
    styleUrls:['property-card.component.css']
}
)
export class PropertyCardComponent
{
  Property:any ={
    "Type":"Lig",
    "Id":1,
    "Price":12000,
    "Name":"Rahul"

  }
}