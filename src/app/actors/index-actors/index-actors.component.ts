import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../actors.service';
import { actorDTO } from '../actors.Model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css']
})
export class IndexActorsComponent implements OnInit {

  actors: actorDTO[];
  columnsToDisplay = ['name', 'actions'];
  totalAmounOfRecords;
  currentPage = 1;
  pageSize = 5;

  constructor (private actorService: ActorsService) {}

  ngOnInit(): void {
    this.actorService.getCount().subscribe((count) => {
      this.totalAmounOfRecords = count;
    });
    this.loadData();
  }

  loadData () {
    this.actorService.get(this.currentPage, this.pageSize).subscribe((actors: actorDTO[]) => {
      this.actors = actors;
    });
  }

  updatePagination (event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  delete (id: number) {
    this.actorService.delete(id).subscribe(() => {
      this.actorService.getCount().subscribe((count) => {
        this.totalAmounOfRecords = count;
      });
      this.loadData();
    });
  }

}
