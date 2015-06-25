library main.index_maker.money_div.fantasy_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class FantasyStats{
    static void main(){
        fantasyStats();
    }
    
    static void fantasyStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'fantasy-stats');
        _div_element.setAttribute('ng-init', 'load.fantasy()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
