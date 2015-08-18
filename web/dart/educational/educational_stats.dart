library main.index_maker.money_div.educational.educational_stats;

import 'dart:html';

Element _div_element = new Element.tag('div');


class EducationalStats{
    static void main(){
        educationalStats();
    }
    
    static void educationalStats(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('class', 'save-div');
        _div_element.setAttribute('id', 'educational-stats');
        _div_element.setAttribute('ng-init', 'load.educational()');
        _div_element.text = '0';
        querySelector('#money-div').append(_div_element);
    }
}
