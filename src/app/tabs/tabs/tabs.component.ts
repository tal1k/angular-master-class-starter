import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit{
  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>

  constructor() { }

  ngOnInit() { }

  ngAfterContentInit() {
    this.select(this.tabs.first)
  }

  select(tab: TabComponent) {
    this.tabs.forEach(t => t.selected = false);
    tab.selected = true;
  }
}
