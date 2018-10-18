import {action} from 'mobx'

export default class Actions {
    constructor({store}) {
        this.store = store;
    }
    // ② 使用 action decorator
    @action
    add_life = () => {
        this.store.num++;
    };
    @action
    cut_life = () => {
        this.store.num--;
    }
}