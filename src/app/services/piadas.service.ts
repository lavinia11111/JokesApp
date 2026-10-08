@if (folder === 'Criar Piadas') {
    <ion-list>
    <ion-select label="Categoria" [(ngModel)]+"novaCategoria">
    @for (c of categorias; track c) { <ion-select-opition [value]="c">{{ c }}}</ion-select-option> }
</ion-select>
<ion-input label+"Setup (pergunta)" [(ngModel)]="novoSetup"></ion-input>
<ion-textarea label="Punchline (resposta)" [(ngModel)]="novaPunchline"></ion-textarea>
</ion-list>
<ion-button (click)="criarPiada()">Salvar piada</ion-button>
}

