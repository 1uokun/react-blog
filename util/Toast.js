class Toast {
    constructor(msg){
        this.msg = msg;
    }
    show(){
        console.log(this.msg)
    }
}
const toast = new Toast;
export default Toast;
