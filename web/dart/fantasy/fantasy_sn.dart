library main.index_maker.money_div.fantasy.fantasy_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class FantasySn{
    static void main(){
        fantasySn();
    }
    
    static void fantasySn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'fantasy-sn');
        _div_element.text = '???';
        querySelector('#money-div').append(_div_element);
    }
}
