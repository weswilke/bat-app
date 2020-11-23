import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() link: string;

  ngOnInit(): void {
  }

}
