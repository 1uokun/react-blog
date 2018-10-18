import {action} from 'mobx'
export default class LifeAction {
    constructor({store}) {
        this.store = store.life;
    }

    @action('我为长者续1s')
    add_life=()=>{
        this.store.num++;
    };

    @action('总有刁民想害朕')
    cut_life=()=>{
        this.store.num--;
    }
}