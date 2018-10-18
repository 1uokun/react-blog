import {store} from '../stores'
import LifeAction from './LifeAction'

export const actions = {
    LifeAction: new LifeAction({store})
}