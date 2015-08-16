library main.index_maker.money_div.adventure.adventure_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class AdventureSn{
    static void main(){
        adventureSn();
    }
    
    static void adventureSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'adventure-sn');
        _div_element.text = 'Adventure';
        querySelector('#money-div').append(_div_element);
    }
}
