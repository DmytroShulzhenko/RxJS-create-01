// defer<R extends ObservableInput<any>>(
//   observableFactory: () => R
// ): Observable<ObservableValueOf<R>>

import { run } from '../03-utils';
import { of, defer } from 'rxjs';

export function deferDemo() {
  const source1$ = of( `${new Date().toString()} ${Math.random()}`);
  const source2$ = defer(() => of( `${new Date().toString()} ${Math.random()}`));
  
  // run(source1$);
  // run(source2$);

  // setTimeout(() => {
  //   run(source2$);
  // }, 5000);
}

