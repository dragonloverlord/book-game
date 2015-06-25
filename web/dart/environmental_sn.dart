library main.index_maker.money_div.environmental_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class EnvironmentalSn{
    static void main(){
        environmentalSn();
    }
    
    static void environmentalSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'environmental-sn');
        _div_element.text = '???';
        querySelector('#money-div').append(_div_element);
    }
}
