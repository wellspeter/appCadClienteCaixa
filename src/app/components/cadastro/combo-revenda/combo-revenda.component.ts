import { Component, OnInit } from '@angular/core';
import { Revenda } from 'src/app/models/Revenda';
import { RevendaService } from 'src/app/services/revenda.service';

@Component({
  selector: 'app-combo-revenda',
  templateUrl: './combo-revenda.component.html',
  styleUrls: ['./combo-revenda.component.css']
})
export class ComboRevendaComponent implements OnInit {
  
  revendas: Array<Revenda> = [];
  isRevendaOutros: Number = 0;

  constructor(private revendaService: RevendaService) { }

  ngOnInit(): void {
    this.revendaService.getRevendas().subscribe((revenda) => (this.revendas = revenda));
  }

}
