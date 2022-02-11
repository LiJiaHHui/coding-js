/*
card element
[...,{card: String, val: Number},...]
*/

//init card
function initCard() {
  const types = ['♦', '♣', '♥', '♠'],
    points = [3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2] //card's types & points
  let res = []
  let num = 0 //card's value
  for (let i = 0; i < points.length; i++) {
    types.forEach((item) => {
      // cycle add
      res.push({ card: points[i] + item, val: num })
      num++
    })
  }
  return res
}

//shuffle card
/**
 * @param {[]} card
 * @return {[]}
 */
function shuffleCard(card) {
  var res = [],
    random
  while (card.length > 0) {
    random = Math.floor(Math.random() * card.length)
    res.push(card[random])
    card.splice(random, 1)
  }
  return res
}

//chinese poker play
/**
 * @param {[]} initCard
 * @return {[]}
 */
function chinesePoker(initCard) {
  initCard.push({ card: 'bigKing', val: 100 }, { card: 'smallKing', val: 99 }) //base on the init card，add bigKing & smallKing
  let newCard = shuffleCard(initCard)
  let playCard1,
    playCard2,
    playCard3,
    length = newCard.length / 3,
    res = []
  playCard1 = newCard.slice(0, length)
  playCard2 = newCard.slice(length, length * 2)
  playCard3 = newCard.slice(length * 2)
  res.push(playCard1, playCard2, playCard3)
  return res
}

//sort unorder card
/**
 * @param {[]} card
 * @return {[]}
 */
function sortCard(card) {
  card.sort((a, b) => {
    return a.val - b.val 
  })
  return card
}

//compare card
/**
 * @param {Object,Object} cardA,cardB
 * @return {Object}
 */
function compareCard(cardA, cardB) {
  let card
  cardA.val > cardB.val ? (card = cardA) : (card = cardB)
  return card
}
