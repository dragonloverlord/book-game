library main.index_maker.money_div.action_stats;

import 'dart:html';

Element div_element = new Element.tag('div');


class ActionStats{
    static void main(){
        actionStats();
    }
    
    static void actionStats(){
        div_element = new Element.tag('div');
        div_element.setAttribute('class', 'save-div');
        div_element.setAttribute('id', 'action-stats');
        div_element.setAttribute('ng-init', 'load.action()');
        div_element.text = '0';
        querySelector('#money-div').append(div_element);
    }
}
