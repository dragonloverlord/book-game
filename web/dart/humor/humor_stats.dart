library main.index_maker.money_div.humor.humor_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class HumorStats{
    static void main(){
        humorStats();
    }
    
    static void humorStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'humor-stats');
        _div_element.setAttribute('ng-init', 'load.humor()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
