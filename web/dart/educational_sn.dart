library main.index_maker.money_div.educational_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class EducationalSn{
    static void main(){
        educationalSn();
    }
    
    static void educationalSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'educational-sn');
        _div_element.text = '???';
        querySelector('#money-div').append(_div_element);
    }
}
