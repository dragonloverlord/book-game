library main.index_maker.money_div.action.action_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');

class ActionStats{
    static void main(){
        actionStats();
    }
    
    static void actionStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'action-stats');
        _div_element.setAttribute('ng-init', 'load.action()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
