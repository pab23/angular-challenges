import { Component, OnInit } from '@angular/core';
import {
  FakeHttpService,
  randStudent,
} from '../../data-access/fake-http.service';
import { StudentStore } from '../../data-access/student.store';
import { CardComponent } from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-student-card',
  template: `
    <app-card
      [list]="store.students()"
      customClass="bg-light-green"
      (add)="onItemAdd()">
      <img src="assets/img/student.webp" width="200px" pic />
      <ng-template #rowRef let-student>
        <app-list-item (delete)="onItemDelete(student.id)">
          {{ student.firstName }}
        </app-list-item>
      </ng-template>
    </app-card>
  `,
  standalone: true,
  imports: [CardComponent, ListItemComponent],
})
export class StudentCardComponent implements OnInit {
  constructor(
    private http: FakeHttpService,
    public store: StudentStore,
  ) {}

  ngOnInit(): void {
    this.http.fetchStudents$.subscribe((s) => this.store.addAll(s));
  }

  onItemAdd(): void {
    this.store.addOne(randStudent());
  }

  onItemDelete(id: number): void {
    this.store.deleteOne(id);
  }
}
