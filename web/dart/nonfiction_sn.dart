library main.index_maker.money_div.nonfiction_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');

class NonFictionSn{
    static void main(){
        nonFictionSn();
    }
    
    static void nonFictionSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'nonfiction-sn');
        _div_element.text = 'NonFiction';
        querySelector('#money-div').append(_div_element);
    }
}
