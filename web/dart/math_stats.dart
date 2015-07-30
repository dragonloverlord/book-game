library main.index_maker.money_div.math_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class MathStats{
    static void main(){
        mathStats();
    }
    
    static void mathStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'math-stats');
        _div_element.setAttribute('ng-init', 'load.math()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
