library main.index_maker.money_div.nonfiction.nonfiction_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class NonFictionStats{
    static void main(){
        nonFictionStats();
    }
    
    static void nonFictionStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'nonfiction-stats');
        _div_element.setAttribute('ng-init', 'load.nonfiction()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
