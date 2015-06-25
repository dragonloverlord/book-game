library main.index_maker.money_div.reset_button;

import 'dart:html';

Element _button_element = new Element.tag('button');


class ResetButton{
    static void main(){
        resetButton();
    }
    
    static void resetButton(){
        _button_element = new Element.tag('button');
        _button_element.setAttribute('class', 'save-button');
        _button_element.setAttribute('type', 'button');
        _button_element.setAttribute('id', 'reset');
        _button_element.text = 'New Game';
        querySelector('#money-div').append(_button_element);
    }
}
