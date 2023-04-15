//#region Imports

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { projects } from '../../data/projects';
import { OrientationEnum } from '../../models/enums/orientation.enum';
import { formattedTechEnum } from '../../models/enums/tech.enum';
import { ProjectInterface } from '../../models/interfaces/project.interface';

//#endregion

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {

  //#region Constructor

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.projectId = this.route.snapshot.params['id'] || '';
  }

  //#endregion

  //#region Public Properties

  public projectId: string = '';

  public listProjects: ProjectInterface[] = projects;

  public project: ProjectInterface = {
    id: '',
    name: '',
    developmentDate: '',
    coverImage: '',
    description: '',
    outcome: '',
    imageUrls: [],
    techs: [],
    orientation: OrientationEnum.HORIZONTAL,
    tags: [],
    links: [],
    position: 0,
  };

  public tags: string = '';
  public techs: string = '';

  //#endregion

  //#region Public Functions

  public ngOnInit(): void {
    const project = this.listProjects.find(i => i.id === this.projectId);

    if (project)
      this.project = project;
    else
      this.router.navigateByUrl('/home');

    this.formatTags();
    this.formatTechs();
  }

  public openZoom(image: string): void {
    console.log(image);
    // TODO: implement Zoom Image Modal
  }

  //#endregion

  //#region Private Functions

  private formatTags(): void {
    this.tags = this.project.tags.join(', ');
  }

  private formatTechs(): void {
    this.project.techs.forEach((tech, i) => {
      this.techs += (i !== 0 ? ', ' : '') + formattedTechEnum[tech];
    });
  }

  //#endregion

}
