library main.index_maker.money_div.environmental.environmental_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class EnvironmentalStats{
    static void main(){
        environmentalStats();
    }
    
    static void environmentalStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'environmental-stats');
        _div_element.setAttribute('ng-init', 'load.environmental()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
