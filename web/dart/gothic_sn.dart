library main.index_maker.money_div.gothic_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class GothicSn{
    static void main(){
        gothicSn();
    }
    
    static void gothicSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'gothic-sn');
        _div_element.text = 'Gothic';
        querySelector('#money-div').append(_div_element);
    }
}
