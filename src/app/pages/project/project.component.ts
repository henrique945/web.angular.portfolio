//#region Imports

import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { projects } from '../../data/projects';
import { ContactModalComponent } from '../../modals/contact-modal/contact-modal.component';
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
    @Inject(DOCUMENT)
    private readonly doc: Document,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly modal: SimpleModalService,
  ) {
    this.projectId = this.route.snapshot.params['id'] || '';
  }

  //#endregion

  //#region Public Properties

  public projectId: string = '';

  public listProjects: ProjectInterface[] = projects;

  public project: ProjectInterface = {
    isActive: true,
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

  public async openZoom(image: string): Promise<void> {
    await this.router.navigate([], { queryParams: { modal: 'img|' + image } });
  }

  public topFunction(): void {
    this.doc.body.scrollTop = 0;
    this.doc.documentElement.scrollTop = 0;
  }

  public openContactModal(): void {
    this.modal.addModal(ContactModalComponent);
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

  @HostListener('window:scroll', ['$event'])
  private onScroll(): void {
    this.toggleOnTop();
  }

  private toggleOnTop(): void {
    const toTopButton = this.doc.getElementById('toTopBtn');

    if (!toTopButton)
      return;

    toTopButton.style.display = 'none';

    if (this.doc.body.scrollTop > 100 || this.doc.documentElement.scrollTop > 100)
      toTopButton.style.display = 'block';
  }

  //#endregion

}
