library main.index_maker.money_div.fashion.fashion_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class FashionSn{
    static void main(){
        fashionSn();
    }
    
    static void fashionSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'fashion-sn');
        _div_element.text = '???';
        querySelector('#money-div').append(_div_element);
    }
}