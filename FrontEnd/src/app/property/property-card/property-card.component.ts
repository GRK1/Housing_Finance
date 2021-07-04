import { createDirectiveDefinitionMap } from "@angular/compiler/src/render3/partial/directive";
import { Component, Input } from "@angular/core";
import { IProperty } from "../IProperty.interface";

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
  @Input()
  property_name!: IProperty;
  constructor() { }
}