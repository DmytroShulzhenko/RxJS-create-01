// const NEVER: Observable<never>

import { NEVER, of, startWith } from 'rxjs';
import { run } from '../03-utils';

export function neverDemo() {
  const stream$ = of(0); // finite stream
  // const stream$ = NEVER.pipe(startWith(0)); // infinite stream

  // run(stream$); // emit velue and never complete
}
