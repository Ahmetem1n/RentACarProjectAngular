import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../../../models/class';
import { ClassService } from '../../../services/class.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  classes: Class[] = [];
  dataLoaded = false;
  constructor(
    private classService: ClassService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses() {
    this.classService.getClasses().subscribe((response) => {
      this.classes = response.data;
      this.dataLoaded = true;
    });
  }
}
