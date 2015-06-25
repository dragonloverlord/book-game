library main.index_maker.money_div.money_text_span;

import 'dart:html';

import 'money_text.dart';

Element _span_element = new Element.tag('span');


class MoneyTextSpan{
    static void main(){
        moneyTextSpan();
        MoneyText.main();
        addCash();
    }
    
    static void moneyTextSpan(){
        _span_element = new Element.tag('span');
        _span_element.setAttribute('id', 'money-text-span');
        querySelector('#money-div').append(_span_element);
    }
    
    static void addCash(){
        querySelector('#money-text-span').text += '\$';
    }
}
