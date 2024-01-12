import { Person } from './person.model';
import { Teacher } from './teacher.model';

export interface Student extends Person {
  mainTeacher: Teacher;
  school: string;
}
