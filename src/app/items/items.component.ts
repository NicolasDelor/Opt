import { EquipmentModel } from './../models/equipment/equipment.model';
import { Component, OnInit } from '@angular/core';
import equipmentData from '../json/items.json';
import {Action as ActionModel} from '../models/actions/actions.model';
import actionData from '../json/actions.json';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  equipmentList: EquipmentModel[];
  actionList: ActionModel[];

  constructor() {
    this.equipmentList = equipmentData.map(equipment => new EquipmentModel(equipment));
    this.actionList = actionData.map(action => new ActionModel(action));
  }

  

  ngOnInit(): void {
  }

}
