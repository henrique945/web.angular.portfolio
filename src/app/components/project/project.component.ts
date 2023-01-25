//#region Imports

import { Component, Input } from '@angular/core';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {

  //#region Public Properties

  @Input()
  public project!: ProjectInterface;

  //#endregion

}
