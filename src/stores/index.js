import {observable} from 'mobx'

export default class Store {
    // ① 使用 observable decorator
    @observable num = 1;
}