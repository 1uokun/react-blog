import {action} from 'mobx'
export default class LifeAction {
    constructor({store}) {
        this.store = store.life;
    }

    @action
    add_life=()=>{
        this.store.num++;
    };

    @action
    cut_life=()=>{
        this.store.num--;
    }
}