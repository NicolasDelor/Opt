import { EquipmentModel } from './../models/equipment/equipment.model';
import { Component, OnInit } from '@angular/core';
import equipmentData from '../json/items.json';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  equipmentList: EquipmentModel[];

  constructor() {
    this.equipmentList = equipmentData.map(equipment => new EquipmentModel(equipment));
  }

  ngOnInit(): void {
  }

}
