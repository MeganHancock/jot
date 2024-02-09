import { Jot } from './models/Jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'


class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  jots = [
    new Jot({
      title: 'My New Jot',
      color: '#9c2162',
      jotBody: 'This is my very first Jot!'
    }),
    new Jot({
      title: 'My Second Jot',
      color: '#219c2f',
      jotBody: 'This is my very second Jot!'
    }),

  ]
  /**
     * @type {Jot | null}   */
  activeJot = null

}

export const AppState = createObservableProxy(new ObservableAppState())