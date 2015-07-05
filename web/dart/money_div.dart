library main.index_maker.money_div;

import 'dart:html';

import 'money_text_span.dart';
import 'reset_button.dart';
import 'action_sn.dart';
import 'action_stats.dart';
import 'adventure_sn.dart';
import 'adventure_stats.dart';
import 'childrens_sn.dart';
import 'childrens_stats.dart';
import 'comic_sn.dart';
import 'comic_stats.dart';
import 'drama_sn.dart';
import 'drama_stats.dart';
import 'educational_sn.dart';
import 'educational_stats.dart';
import 'environmental_sn.dart';
import 'environmental_stats.dart';
import 'fantasy_sn.dart';
import 'fantasy_stats.dart';
import 'fashion_sn.dart';
import 'fashion_stats.dart';
import 'fiction_sn.dart';
import 'fiction_stats.dart';
import 'gossip_sn.dart';
import 'gossip_stats.dart';
import 'gothic_sn.dart';
import 'gothic_stats.dart';
import 'history_sn.dart';
import 'history_stats.dart';
import 'humor_sn.dart';


Element _br_element = new Element.tag('br');
Element _div_element = new Element.tag('div');


class MoneyDiv{
    static void main(){
        moneyDiv();
        MoneyTextSpan.main();
        addBr();
        ResetButton.main();
        ActionSn.main();
        ActionStats.main();
        AdventureSn.main();
        AdventureStats.main();
        ChildrensSn.main();
        ChildrensStats.main();
        ComicSn.main();
        ComicStats.main();
        DramaSn.main();
        DramaStats.main();
        EducationalSn.main();
        EducationalStats.main();
        EnvironmentalSn.main();
        EnvironmentalStats.main();
        FantasySn.main();
        FantasyStats.main();
        FashionSn.main();
        FashionStats.main();
        FictionSn.main();
        FictionStats.main();
        GossipSn.main();
        GossipStats.main();
        GothicSn.main();
        GothicStats.main();
        HistorySn.main();
        HistoryStats.main();
        HumorSn.main();
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
