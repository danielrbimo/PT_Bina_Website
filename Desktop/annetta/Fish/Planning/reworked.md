#Reworked
##Rework 1: (Milestone 3)
###Code Inspection
Insufficient coverage of unit tests for turn-taking functionality.
###Solution
Added unit testing for placement and movement methods in FishStateTest for when
a penguin is moving to a hole.

##Rework 2: (Milestone 4)
###Refactoring
Insufficient interpretation of the game state
(it should be clear what all components of the data definition mean:
why does the board field exist?)
###Solution
Described each variable in FishState.
###Code Inspection 1
It is unclear if the game tree node can represent all three kinds of nodes:
game-is-over, current-player-is-stuck, and current-player-can-move;
only current-player-can-move is obvious
###Solution 1
Described each state of a game, for example when a player is stuck, a player can move
and a game is over.
###Code Inspection 2
Signature/purpose statement does not explain the first query functionality clearly
(Possible illegal actions given to function and resulting errors are not described)
###Solution 2
Added to the purpose statement for when a applyActionToState is given an invalid move
and would result in a IllegalArgumentException being thrown.

###Rework 3: (Milestone 5)
###Refactoring
Data definition/interpretation of the game tree doesn't mention
how "skip" transitions are dealt with. i.e. the reader of your code should be able to understand this
without inspecting the code that generates child trees
###Solution
Added into the purpose statement in FishTreeNode informing readers what happens
when a player is stuck or skipped.
###Code Inspection 1
Choosing placement: purpose statement doesn't specify side effects
(the input <INSERT SMTH LIKE State> is mutated)
## Solution 1
Described in detail how a FishState is being modified in order to get
the next position through zig-zag strategy.
###Code Inspection 2
Choosing turn action: purpose statement doesn't specify what happens
when the current player does not have valid moves
###Solution 2
Added to the purpose statement for when a findMinimaxAction method is given 
a null tree node or other exception from helper methods it will throw
an IllegalArgumentException.