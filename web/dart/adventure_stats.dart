library main.index_maker.money_div.adventure_stats;

import 'dart:html';

Element div_element = new Element.tag('div');


class AdventureStats{
    static void main(){
        adventureStats();
    }
    
    static void adventureStats(){
        div_element = new Element.tag('div');
        div_element.setAttribute('class', 'save-div');
        div_element.setAttribute('id', 'adventure-stats');
        div_element.setAttribute('ng-init', 'load.adventure()');
        div_element.text = '0';
        querySelector('#money-div').append(div_element);
    }
}
