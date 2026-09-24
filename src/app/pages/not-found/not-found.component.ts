import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-not-found',
    imports: [RouterLink],
    template: `
    <section class="not-found">
      <p>404</p>
      <h1>That page is not part of this portfolio.</h1>
      <a routerLink="/">Return to the portfolio</a>
    </section>
  `,
    styles: [`
    .not-found { display:grid; place-content:center; min-height:calc(100vh - 14rem); padding:2rem; text-align:center; color:var(--primary-color) }
    p { margin:0; color:var(--secondary-color); font-size:6rem; font-weight:900 }
    h1 { max-width:40rem; font-size:2rem }
    a { justify-self:center; padding:.9rem 1.1rem; border-radius:.4rem; color:white; background:var(--secondary-color); font-weight:700 }
  `]
})
export class NotFoundComponent implements OnInit {
  constructor(private readonly title: Title, private readonly meta: Meta) {}

  public ngOnInit(): void {
    this.title.setTitle('Page not found | Henrique Rodrigues');
    this.meta.updateTag({ name: 'robots', content: 'noindex, nofollow' });
  }
}
