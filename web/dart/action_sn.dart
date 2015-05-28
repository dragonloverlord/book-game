library main.index_maker.money_div.action_sn;

import 'dart:html';

Element div_element = new Element.tag('div');


class ActionSn{
    static void main(){
        actionSn();
    }
    
    static void actionSn(){
        div_element = new Element.tag('div');
        div_element.setAttribute('class', 'stats-text');
        div_element.setAttribute('id', 'action-sn');
        div_element.text = '???';
        querySelector('#money-div').append(div_element);
    }
}
