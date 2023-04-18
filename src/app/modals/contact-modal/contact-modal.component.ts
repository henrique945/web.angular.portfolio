//#region Imports

import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { listProjects, projects } from '../../data/projects';
import { TechEnum } from '../../models/enums/tech.enum';

//#endregion

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss'],
})
export class ContactModalComponent extends SimpleModalComponent<void, void> implements AfterViewInit {

  //#region Constructor

  constructor(
    private readonly router: Router,
  ) {
    super();

    this.router.navigate([], { queryParams: { modal: 'contact' } });
  }

  //#endregion

  //#region Public Properties

  public charOption: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Projects',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        emphasis: {
          label: {
            show: true,
          },
        },
        labelLine: {
          show: false,
        },
        label: {
          color: '#445964',
        },
        data: this.loadGraphData(),
      },
    ],
  };

  public projectsCount: number = 0;

  //#endregion

  //#region Public Functions

  public ngAfterViewInit(): void {
    const chart = document.getElementById('chart');

    if (!chart)
      return;

    echarts.init(chart);
    this.loadGraphData();
    this.loadCounterAnimation();
  }

  public async closeModal(): Promise<void> {
    this.router.navigate([], { queryParams: {} });
    await this.close();
  }

  //#endregion

  //#region Private Functions

  private loadGraphData(): any {
    return [
      { name: 'Ionic', value: this.countProjectsByTech(TechEnum.IONIC) },
      { name: 'NodeJs', value: this.countProjectsByTech(TechEnum.NESTJS) },
      { name: 'PWA', value: this.countProjectsByTech(TechEnum.PWA) },
      { name: 'Angular', value: this.countProjectsByTech(TechEnum.ANGULAR) },
      // { name: 'React', value: this.countProjectsByTech(TechEnum.REACT) },
      // { name: 'Unity', value: this.countProjectsByTech(TechEnum.UNITY) },
    ];
  }

  private loadCounterAnimation(): void {
    const totalProjects: number = listProjects.length;

    const counter = setInterval(() => {
      if (this.projectsCount === totalProjects)
        clearInterval(counter);

      this.projectsCount++;
    }, 70);
  }

  private countProjectsByTech(tech: TechEnum): number {
    return projects.filter(project => project.techs.includes(tech)).length;
  }

  //#endregion

}
