library main.index_maker.money_div.drama.drama_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class DramaSn{
    static void main(){
        dramaSn();
    }
    
    static void dramaSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'drama-sn');
        _div_element.text = 'Drama';
        querySelector('#money-div').append(_div_element);
    }
}
