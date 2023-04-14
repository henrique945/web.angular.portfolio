//#region Imports

import { Component, Input } from '@angular/core';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent {

  //#region Public Properties

  @Input()
  public project!: ProjectInterface;

  //#endregion

}
