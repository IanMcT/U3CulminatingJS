class Deck{
  #cards = [];
  constructor(){
    for(var i = 0; i < 52; i++){
      this.#cards.push(new Card(i));
    }//end loop
  }//end constructor

  showDeck(){
    var output = "";
    for(var i = 0; i < 52; i++){
      output += this.#cards[i].Face + " of " + this.#cards[i].Suit + "<br />";
    }//end loop
    return output;
  }//end showDeck
}//end class