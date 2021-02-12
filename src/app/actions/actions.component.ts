import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import actionData from '../json/actions.json';
import {Actions} from '../models/actions/actions.model';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  actionList = actionData as Actions[];

  constructor() { }

  ngOnInit(): void {
  }

}
