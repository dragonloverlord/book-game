library main.index_maker.money_div.parenting.parenting_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class ParentingSn{
    static void main(){
        parentingSn();
    }
    
    static void parentingSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'parenting-sn');
        _div_element.text = '???';
        querySelector('#money-div').append(_div_element);
    }
}
