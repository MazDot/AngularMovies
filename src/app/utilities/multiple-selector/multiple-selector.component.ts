import { Component, Input } from '@angular/core';
import { multipleSelectorModel } from './multiple-selector.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent {

  @Input()
  selectedItems: multipleSelectorModel[] = [];
  @Input()
  nonSelectedItems: multipleSelectorModel[] = [];

  select(item: multipleSelectorModel, index: number) {
    this.selectedItems.push(item);
    this.nonSelectedItems.splice(index, 1);
  }

  selectAll() {
    this.selectedItems.push(...this.nonSelectedItems);
    this.nonSelectedItems = [];
  }

  deselect(item: multipleSelectorModel, index: number) {
    this.nonSelectedItems.push(item);
    this.selectedItems.splice(index, 1);
  }

  deselectAll() {
    this.nonSelectedItems.push(...this.selectedItems);
    this.selectedItems = [];
  }
}
