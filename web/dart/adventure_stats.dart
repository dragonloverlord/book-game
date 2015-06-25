library main.index_maker.money_div.adventure_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class AdventureStats{
    static void main(){
        adventureStats();
    }
    
    static void adventureStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'adventure-stats');
        _div_element.setAttribute('ng-init', 'load.adventure()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
