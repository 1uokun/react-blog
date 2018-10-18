import {observable} from 'mobx'

export default class Life {
    // ① 使用 observable decorator
    @observable num = 1;
}