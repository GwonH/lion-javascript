
import { getNode, getStorage, setStorage } from "./lib/index.js";

const textField = getNode('#textField')
const clearButton = getNode('button')

function handleTextField(){
  const value = this.value;

  setStorage('text',value)


}

function init(){

  getStorage('text').then((res)=>{
    textField.value=res;
  })

}

function handleClear(){



}


textField.addEventListener('input',handleTextField)
window.addEventListener('DOMContentLoaded',init)
clearButton.addEventListener('click',handleClear)