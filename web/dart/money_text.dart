library main.index_maker.money_div.money_text_span.money_text;

import 'dart:html';

Element span_element = new Element.tag('span');


class MoneyText{
    static void main(){
        moneyText();
    }
    
    static void moneyText(){
        span_element = new Element.tag('span');
        span_element.setAttribute('id', 'money-text');
        span_element.setAttribute('ng-init', 'load.money()');
        span_element.text = '0';
        querySelector('#money-text-span').append(span_element);
    }
}
