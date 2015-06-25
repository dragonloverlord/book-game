library main.index_maker.money_div.money_text_span.money_text;

import 'dart:html';

Element _span_element = new Element.tag('span');


class MoneyText{
    static void main(){
        moneyText();
    }
    
    static void moneyText(){
        _span_element = new Element.tag('span');
        _span_element.setAttribute('id', 'money-text');
        _span_element.setAttribute('ng-init', 'load.money()');
        _span_element.text = '0';
        querySelector('#money-text-span').append(_span_element);
    }
}
