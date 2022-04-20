import { Component, OnInit } from '@angular/core';
import { Eventos } from 'src/app/models/Eventos';
import { EventosService } from 'src/app/services/eventos.service';

@Component({
  selector: 'app-combo-eventos',
  templateUrl: './combo-eventos.component.html',
  styleUrls: ['./combo-eventos.component.css']
})
export class ComboEventosComponent implements OnInit {

  eventos:Array<Eventos> = [];
  selectedEvento: string = '';

  constructor(private eventoService: EventosService) { }

  ngOnInit(): void {
    this.eventoService.getEventos().subscribe((evento) => (this.eventos = evento));
  }

}
