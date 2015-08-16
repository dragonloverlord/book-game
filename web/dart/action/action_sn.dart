library main.index_maker.money_div.action.action_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class ActionSn{
    static void main(){
        actionSn();
    }
    
    static void actionSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'action-sn');
        _div_element.text = '???';
        querySelector('#money-div').append(_div_element);
    }
}
