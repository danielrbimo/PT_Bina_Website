#Bugs
##Bug 1: (Milestone 3)
###Code Inspection
Insufficient coverage of unit tests for turn-taking functionality.
fix: FishStateTest line 152 and 386

##Bug 2: (Milestone 4)
###Refactoring
Insufficient interpretation of the game state
(it should be clear what all components of the data definition mean:
why does the board field exist?)
Fix: FishState line 12

###Code Inspection
It is unclear if the game tree node can represent all three kinds of nodes:
game-is-over, current-player-is-stuck, and current-player-can-move;
only current-player-can-move is obvious
Fix: FishTreeNode line 14

Signature/purpose statement does not explain the first query functionality clearly
(Possible illegal actions given to function and resulting errors are not described)
Fix: FishTreeNode line 100

##Bug 3: (Milestone 5)
###Refactoring
Data definition/interpretation of the game tree doesn't mention
how "skip" transitions are dealt with. i.e. the reader of your code should be able to understand this
without inspecting the code that generates child trees
Fix: FishTreeNode line 16
###Code Inspection
####PLACEMENT
Choosing placement: purpose statement doesn't specify side effects
(the input <INSERT SMTH LIKE State> is mutated)
Fix: Strategy line 22
####Movement
Choosing turn action: purpose statement doesn't specify what happens
when the current player does not have valid moves
Fix: Strategy line 59