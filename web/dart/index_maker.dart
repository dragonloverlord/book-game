library main.index_maker;

import 'dart:html';

import 'money_div.dart';

Element _div_element = new Element.tag('div');
Element _input_element = new Element.tag('input');


class IndexMaker{
    static void main(){
        lockcheck();
        mainDiv();
        MoneyDiv.main();
    }
    
    static void lockcheck(){
        _input_element = new Element.tag('input');
        _input_element.setAttribute('id', 'lock');
        _input_element.setAttribute('type', 'hidden');
        _input_element.setAttribute('value', 'lockoff');
        querySelector('#body').append(_input_element);
    }
    
    static void mainDiv(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('id', 'main-div');
        _div_element.setAttribute('class', 'main-div');
        querySelector('#body').append(_div_element);
    }
}
