import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="not-found wrap">
      <p class="eyebrow">Error 404 · Page not found</p>
      <h1 class="display">Off the map<span>This page is not part of the engineering notebook.</span></h1>
      <p class="lead">The route may have moved, or the address may be incomplete. The project archive is still right where it should be.</p>
      <a class="btn btn--primary" routerLink="/" fragment="projects">Return to the portfolio</a>
    </section>
  `,
  styles: [`
    .not-found { display:flex; min-height:calc(100vh - 20rem); padding-block:clamp(64px, 10vw, 128px); flex-direction:column; align-items:flex-start; justify-content:center }
    .not-found .eyebrow { color:var(--copper-deep); margin-bottom:20px }
    .not-found .display { max-width:12ch }
    .not-found .lead { margin-top:24px }
    .not-found .btn { margin-top:32px }
  `],
})
export class NotFoundComponent implements OnInit {
  constructor(private readonly title: Title, private readonly meta: Meta) {}

  public ngOnInit(): void {
    this.title.setTitle('Page not found | Henrique Rodrigues');
    this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}
