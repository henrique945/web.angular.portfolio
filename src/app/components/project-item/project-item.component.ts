//#region Imports

import { Component, Input } from '@angular/core';
import { OrientationEnum } from '../../models/enums/orientation.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

@Component({
    selector: 'app-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.scss'],
    standalone: false
})
export class ProjectItemComponent {

  //#region Public Properties

  @Input()
  public project!: ProjectInterface;

  public readonly orientation = OrientationEnum;

  //#endregion

}
