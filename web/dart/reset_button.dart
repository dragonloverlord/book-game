library main.index_maker.money_div.reset_button;

import 'dart:html';

Element button_element = new Element.tag('button');


class ResetButton{
    static void main(){
        resetButton();
    }
    
    static void resetButton(){
        button_element = new Element.tag('button');
        button_element.setAttribute('class', 'save-button');
        button_element.setAttribute('type', 'button');
        button_element.setAttribute('id', 'reset');
        button_element.text = 'New Game';
        querySelector('#money-div').append(button_element);
    }
}
