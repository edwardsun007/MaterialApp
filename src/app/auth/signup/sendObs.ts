import { Observable } from "rxjs";
import { of } from "rxjs";
import { interval } from "rxjs"; // for creating observable that emit integers over sequential intervals
import { delay } from "rxjs/operators";

export function getSingleValueObs() {
  return of("single value");
}

export function getDelayedValueObservable() {
  return of("delayed value").pipe(delay(2000));
}
