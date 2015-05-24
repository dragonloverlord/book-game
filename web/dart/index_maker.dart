library main.index_maker;

import 'dart:html';

import 'money_div.dart';

Element div_element = new Element.tag('div');
Element input_element = new Element.tag('input');


class IndexMaker{
    static void main(){
        lockcheck();
        mainDiv();
        MoneyDiv.main();
    }
    
    static void lockcheck(){
        input_element = new Element.tag('input');
        input_element.setAttribute('id', 'lock');
        input_element.setAttribute('type', 'hidden');
        input_element.setAttribute('value', 'lockoff');
        querySelector('#body').append(input_element);
    }
    
    static void mainDiv(){
        div_element = new Element.tag('div');
        div_element.setAttribute('id', 'main-div');
        div_element.setAttribute('class', 'main-div');
        querySelector('#body').append(div_element);
    }
}
