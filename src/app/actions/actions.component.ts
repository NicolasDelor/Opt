import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import actionData from '../json/actions.json';
import {Action as ActionModel} from '../models/actions/actions.model';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  actionList: ActionModel[];

  constructor() {
    this.actionList = actionData.map(action => new ActionModel(action));
  }

  ngOnInit(): void {
  }

}
