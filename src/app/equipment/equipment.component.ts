import { Component, OnInit } from '@angular/core';
import { EquipmentModel } from './../models/equipment/equipment.model';
import equipmentData from '../json/items.json';
import {Action as ActionModel} from '../models/actions/actions.model';
import actionData from '../json/actions.json';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {


  equipmentList: EquipmentModel[];
  actionList: ActionModel[];

  constructor() {
    this.equipmentList = equipmentData.map(equipment => new EquipmentModel(equipment));
    this.actionList = actionData.map(action => new ActionModel(action));
  }


  ngOnInit(): void {
  }

}
