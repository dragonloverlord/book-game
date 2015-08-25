library main.index_maker.money_div.math.math_sn;

import 'dart:html';

Element _div_element = new Element.tag('div');


class MathSn{
    static void main(){
        mathSn();
    }
    
    static void mathSn(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'stats-text');
        _div_element.setAttribute('id', 'math-sn');
        _div_element.text = 'Math';
        querySelector('#money-div').append(_div_element);
    }
}
