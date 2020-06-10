# slapjack

## Project Description ##

Let's play slapjack! Two users can hit keys to slap and play the game.
This was a 5-day solo project.

## Learning Goals ##

* Attempt to have very clean JavaScript and CSS code and refactor whenever possible with a goal of readability.
* localStorage to persist data
* Event delegation to handle similar event listeners
* Understand the difference between the data model and how the data is displayed on the DOM
* Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

## GAMEPLAY: ##

* Players alternate turns playing cards face-up into the central pile (ex a player can’t deal twice in a row)
* Any player can slap at any time, with several outcomes!
* If a player slaps when a Jack is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.
* If a player slaps when a Double or a pair (two cards of the same number - such as two Aces, or two Fives, or two Queens) is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.
* If a player slaps when a Sandwich (two cards of the same number - such as two Aces, or two Fives, or two Queens, separated by a different card in the middle) is on top of the central pile, the entire central pile is added to the player’s hand, and their hand is shuffled automatically.
* If a player slaps when neither a Jack, Double, or Sandwich is on top of the central pile, the player who slapped loses the card on top of their hand and it is added to the bottom of their opponent’s hand.
* If one player loses all their cards, they have one chance to not lose and continue the game:
* The player with cards left continues to deal from their hand into the central pile (they are now allowed to deal multiple times in a row!)
* If the player with cards left deals all their cards into the center without revealing a Jack, the central pile returns to that player’s hand, is shuffled, and the player must continue to deal until a Jack is revealed
When a Jack is revealed, the player who is out of cards can slap it. The central pile is then their new hand, the game continues as normal.
* If however, the player who is out of cards slaps something that is not a Jack, or if the player who still has cards slaps the Jack first, then the player who is out of cards loses and the game is over!
* Doubles and Sandwiches are not valid when one player is completely out of cards - in this case, only a Jack can save them!
* The only way the player who still has cards can win is by slapping the Jack before the player without cards left does

**Wins**

* Working with CSS and JS while working under deadlines.
* Leaning how to create a full functional game with code!
* Successfully kept dom separate from the data model.

## In Action/Functionality ##

![Doubles Slap](https://giphy.com/gifs/LRN9o5icA7OBqm4oR0/html5)
![Jack slaps](https://vimeo.com/427608784)
![player 2 wins persist](https://giphy.com/gifs/ln25t3aeFXYplpnNMW/html5)
![player 1 wins persist](https://giphy.com/gifs/iFt6kQRiTi5K8TYjFU/html5)


# Programming Languages Used #

HTML
CSS
JavaScript

**Built With:**
* Vanilla JavaScript
* HTML and CSS provided by [Turing Mod 1 Instructors](https://github.com/letakeane)

**Comps Given**
https://frontend.turing.io/projects/module-1/slapjack.html

**Contributors:**

* [Amy Karnaze](https://github.com/amykarnaze)

# Additional Links: #

* [Trello](https://trello.com/b/ozTkoP24/slapjack)
* [Project page]()
* [GitHub Link](https://github.com/amykarnaze/slapjack)
* Clone Me (SSH):
