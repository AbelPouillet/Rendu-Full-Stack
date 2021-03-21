import { Component } from '@angular/core';

interface IMenuItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';

  menuItems: IMenuItem[] = [
    {
      label: 'Personnages',
      link: 'characters'
    },
    {
      label: 'Films',
      link: 'movies'
    }
  ];
}
