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
    { title: 'Piadas para compartilhar', url: '/folder/Piadas para compartilhar', icon: 'person-add' },
    { title: 'Piadas favoritas', url: '/folder/Piadas favoritas', icon: 'heart' },
    { title: 'Criar Piadas', url: '/folder/Criar Piadas', icon: 'add' },
  ];

  public labels = ['Criar piadas'];
  public emojiFeliz = false;
  public emojiLingua = false;

  mostrarFeliz() {
    this.emojiFeliz = true;
  }

  mostrarLingua() {
    this.emojiLingua = true;
  }
}
