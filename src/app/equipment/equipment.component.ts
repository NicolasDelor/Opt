import { Component, OnInit } from '@angular/core';
import { EquipmentModel } from './../models/equipment/equipment.model';
import equipmentData from '../json/items.json';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {


  equipmentList: EquipmentModel[];

  constructor() {
    this.equipmentList = equipmentData.map(equipment => new EquipmentModel(equipment));
  }


  ngOnInit(): void {
  }

}
