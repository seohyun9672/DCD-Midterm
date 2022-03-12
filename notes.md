Tasks
- phone & laundry detergent: 
    - relayout things in infocard template innerHTML (literal)
    - primary div: first info card
        - textbtn is always "next"
    - secondary div: 2nd info card
        - display: none
        - textbtn is always "gotit"
        - when clicking next button, primary = display:none; and secondary > display:block;
        - objects with only one card: secondary div only



FUNCTIONS:
1. ShowInfoCard()
- click on object > info card shows up (this function)
- display: none to display:block;

2. ChangeInfoCard()
- when clicking next button, primary = display:none; and secondary > display:block;

3. CloseInfoCard()
- display:block to display:none;
- click got it > this function

//done//
4. ChangeTextBtn("color","text") 
- changing textbtn color and inner text

this.story = 1;

//done// remove chevrons 

textOrder becomes the state of the story image. so according to the state, we could control the
text container, objects, and the infocard accordingly. 

clicking got it > closes overlay and triggers NextStory() 

//done// NextStory() increases textOrder ++; then runs UpdateStoryUI

5. UpdateStoryUI() 
- add:
    - change footprint cycle //done
    - change time //maybe?
    - change story img //done
    - greenman //done
    - object

 

when the car is shown, the infocard information should be change, but HOW???? WHY IS IT NOT CHANGING??? HUH???
How do we link the new infocard information with new object huh? 
reposition objects