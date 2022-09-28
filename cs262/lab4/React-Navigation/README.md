/* Germaine Hounakey */

CS 262 - Lab 04

This lab is based on https://cs.calvin.edu/courses/cs/262/kvlinden/04analysis/lab.html

I followed instructions created by React navigation to create a two-page application done


Answers to the lab questions:

What React construct is used to implement separate pages of an application (cf. separate webpages on the Web)?
    - we created a new screen in addition to home. Doing this creats an additional route to home that was created by a screen component. 
    -The name of the route along eith the name of the prop correspond to each other and are used to navigate. 

What is the React Navigation concept that is analogous to a URL/URI on the Web?
    - It is the tag that is used for when the user click on a link, it then pushes to the URL to the browswer. 
    
The onPress event handler for the home screen component is specified as () => navigation.navigate('Details'). Can we just say navigation.navigate('Details')? Why or why not?
    - No, because it the () => is referring to "this" as in the onPress even handler. And so it would not work with just navigation.navigate('Details') because it is not specifying the handler we are using it with.

Explain how the hard-coded movie list is presented as a list of titles on the homepage.
    - The movie list is working using a useState to specifying and set the reviews inclusive of the title, rating, key, and description.
Explain how the details screen presents the details of a single movie.

    - The details screen shows the details of the movie clicked using the route.params to get the specific information about the movie from the hardcoded list written in the Homescreen function.




 


