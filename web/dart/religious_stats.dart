library main.index_maker.money_div.religious_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class ReligiousStats{
    static void main(){
        religiousStats();
    }
    
    static void religiousStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'religious-stats');
        _div_element.setAttribute('ng-init', 'load.religious()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
