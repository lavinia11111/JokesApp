import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Piadas para você', url: '/folder/Piadas para você', icon: 'happy' },
    { title: 'Enigmas para você', url: '/folder/Enigmas para você', icon: 'help-circle' },
    { title: 'Piadas para compartilhar', url: '/folder/Piadas para compartilhar', icon: 'person-add' },
    { title: 'Piadas favoritas', url: '/folder/Piadas favoritas', icon: 'heart' },
    { title: 'Enigmas favoritos', url: '/folder/Enigmas favoritos', icon: 'heart-circle' },
    { title: 'Criar Piadas', url: '/folder/Criar Piadas', icon: 'add' },
    { title: 'Criar Enigmas', url: '/folder/Criar Enigmas', icon: 'add' },
  ];
  public labels = ['Criar piadas', 'Criar enigmas'];
  constructor() {}
}
