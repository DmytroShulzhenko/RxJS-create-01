// fromEventPattern<T>(
//   addHandler: (handler: NodeEventHandler) => any,
//   removeHandler?: (handler: NodeEventHandler, signal?: any) => void,
//   resultSelector?: (...args: any[]) => T
// ): Observable<T | T[]>

import {fromEventPattern, map} from 'rxjs';
import {run} from './../03-utils';

export function fromEventPatternDemo1() {
	function addHandler(handler) {
		document.addEventListener('click', handler);
	}

	function removeHandler(handler) {
		document.removeEventListener('click', handler);
	}

	const resultSelector = (event: MouseEvent) => event.clientX; // optional
	const stream$ = fromEventPattern(addHandler, removeHandler, resultSelector);
	// or
	// const stream$ = fromEventPattern(addHandler, removeHandler).pipe(map(resultSelector));

	// run(stream$);
}

export function fromEventPatternDemo2() {
	const myWorker = new Worker('04-from-event-pattern-worker.js');

	const stream$ = fromEventPattern(
		handler => {
			myWorker.onmessage = handler
		},
		handler => {
			myWorker.onmessage = undefined
		}
	).pipe(map((event: MessageEvent) => event.data));

	// run(stream$);

	myWorker.postMessage(1);
}



