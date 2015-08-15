library main.index_maker.money_div.religious_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class ReligiousSn{
    static void main(){
        religiousSn();
    }
    
    static void religiousSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'religious-sn');
        _div_element.text = '???';
        querySelector('#money-div').append(_div_element);
    }
}
