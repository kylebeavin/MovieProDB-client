import { Component, OnInit } from '@angular/core';

import { Entry } from './entry';
import { ENTRIES } from './sample-entries';

@Component({
  selector: 'app-browse-entries',
  templateUrl: './browse-entries.component.html',
  styleUrls: ['./browse-entries.component.scss']
})
export class BrowseEntriesComponent implements OnInit {
  entries = ENTRIES;
  displayedColumns = ["entryID", "sceneID", "productID", "creatorID", "creationDate", "editorID", "lastEdited"]

  constructor() { }

  ngOnInit() {
  }

}
