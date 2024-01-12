import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { City } from '../model/city.model';

@Injectable({
  providedIn: 'root',
})
export class CityStore {
  #cities: WritableSignal<City[]> = signal([]);

  get cities(): Signal<City[]> {
    return this.#cities.asReadonly();
  }

  addAll(cities: City[]) {
    this.#cities.set(cities);
  }

  addOne(city: City) {
    this.#cities.set([...this.#cities(), city]);
  }

  deleteOne(id: number) {
    this.#cities.set(this.#cities().filter((s) => s.id !== id));
  }
}
