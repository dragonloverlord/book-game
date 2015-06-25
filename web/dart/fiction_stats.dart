library main.index_maker.money_div.fiction_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class FictionStats{
    static void main(){
        fictionStats();
    }
    
    static void dictionStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'fiction-stats');
        _div_element.setAttribute('ng-init', 'load.fiction()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
