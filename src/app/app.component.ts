import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pianito';

  aplicarSonido(numero: number): void{ //basado en el autoplay de audio, se configura la ruta concatenando el numero el cual dara el sonido de la nota correspondiente.
    const audio = new Audio();
    audio.src = '../assets/sonidos/note' + numero + '.wav';
    audio.load();
    audio.play();
  }
}


