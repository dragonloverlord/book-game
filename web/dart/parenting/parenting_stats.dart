library main.index_maker.money_div.parenting.parenting_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class ParentingStats{
    static void main(){
        parentingStats();
    }
    
    static void parentingStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'parenting-stats');
        _div_element.setAttribute('ng-init', 'load.parenting()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
