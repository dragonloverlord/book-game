library main.index_maker.money_div.fiction.fiction_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class FictionSn{
    static void main(){
        fictionSn();
    }
    
    static void fictionSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'fiction-sn');
        _div_element.text = 'Fiction';
        querySelector('#money-div').append(_div_element);
    }
}
