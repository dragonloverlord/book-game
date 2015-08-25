library main.index_maker.money_div;

import 'dart:html';

import 'money_text_span.dart';
import 'reset_button.dart';
import 'action/action.dart';
import 'adventure/adventure.dart';
import 'childrens/childrens.dart';
import 'comic/comic.dart';
import 'drama/drama.dart';
import 'educational/educational.dart';
import 'environmental/environmental.dart';
import 'fantasy/fantasy.dart';
import 'fashion/fashion.dart';
import 'fiction/fiction.dart';
import 'gossip/gossip.dart';
import 'gothic/gothic.dart';
import 'history/history_book.dart';
import 'humor/humor.dart';
import 'math_sn.dart';
import 'math_stats.dart';
import 'nonfiction_sn.dart';
import 'nonfiction_stats.dart';
import 'parenting_sn.dart';
import 'parenting_stats.dart';
import 'religious_sn.dart';
import 'religious_stats.dart';
import 'report_sn.dart';
import 'report_stats.dart';


Element _br_element = new Element.tag('br');
Element _div_element = new Element.tag('div');


class MoneyDiv{
    static void main(){
        moneyDiv();
        MoneyTextSpan.main();
        addBr();
        ResetButton.main();
        Action.moneyDiv();
        Adventure.moneyDiv();
        Childrens.moneyDiv();
        Comic.moneyDiv();
        Drama.moneyDiv();
        Educational.moneyDiv();
        Environmental.moneyDiv();
        Fantasy.moneyDiv();
        Fashion.moneyDiv();
        Fiction.moneyDiv();
        Gossip.moneyDiv();
        Gothic.moneyDiv();
        HistoryBook.moneyDiv();
        Humor.moneyDiv();
        MathSn.main();
        MathStats.main();
        NonFictionSn.main();
        NonFictionStats.main();
        ParentingSn.main();
        ParentingStats.main();
        ReligiousSn.main();
        ReligiousStats.main();
        ReportSn.main();
        ReportStats.main();
    }
    
    static void moneyDiv(){
        _div_element = new Element.tag('div');
        _div_element.setAttribute('ng-controller', 'chromeLoad as load');
        _div_element.setAttribute('id', 'money-div');
        _div_element.setAttribute('class', 'money');
        querySelector('#main-div').append(_div_element);
    }
    
    static void addBr(){
        _br_element = new Element.tag('br');
        querySelector('#money-div').append(_br_element);
    }
}
