library main.index_maker.money_div.humor_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class HumorSn{
    static void main(){
        humorSn();
    }
    
    static void humorSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'humor-sn');
        _div_element.text = 'Humor';
        querySelector('#money-div').append(_div_element);
    }
}
