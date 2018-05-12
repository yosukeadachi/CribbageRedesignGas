//ゲームデッキクラス
//ゲームでの１揃えのトランプ
var GameDeck = function() {
  this.cardList = new CardList();
  for(var s = 0; s < SUITS.length; s++) {
    this.cardList.cards.push(new Card(2,SUITS[s]));
    this.cardList.cards.push(new Card(3,SUITS[s]));
    this.cardList.cards.push(new Card(4,SUITS[s]));
    this.cardList.cards.push(new Card(5,SUITS[s]));
    this.cardList.cards.push(new Card(5,SUITS[s]));    
  }
}
