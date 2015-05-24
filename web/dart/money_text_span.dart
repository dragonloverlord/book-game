library main.index_maker.money_div.money_text_span;

import 'dart:html';

import 'money_text.dart';

Element span_element = new Element.tag('span');


class MoneyTextSpan{
    static void main(){
        moneyTextSpan();
        MoneyText.main();
        addCash();
    }
    
    static void moneyTextSpan(){
        span_element = new Element.tag('span');
        span_element.setAttribute('id', 'money-text-span');
        querySelector('#money-div').append(span_element);
    }
    
    static void addCash(){
        querySelector('#money-text-span').text += '\$';
    }
}
