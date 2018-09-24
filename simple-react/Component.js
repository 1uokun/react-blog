/**
 * @param type | string | element
 * @param props | object | attr/event
 * @param children | array | loop top/textNode
 * */
class Component {
    constructor(){
        document.body.appendChild(this.createElement(this.render()))
    }

    createElement(node){
        if(typeof node === 'string') {
            return document.createTextNode(node)
        }
        const $el = document.createElement(node.type)
        if(node.props&&JSON.stringify(node.props) !== '{}'){
            for(let propName in node.props){
                let propValue = node.props[propName];
                //props events
                if(typeof propValue === 'function'){
                    $el.addEventListener(
                        propName,
                        propValue
                    );
                }else {
                    //props attr
                    $el.setAttribute(propName, propValue)
                }

            }
        }


        node.children.map(a=>{
            $el.appendChild(this.createElement(a))
        });
        return $el
    }
}