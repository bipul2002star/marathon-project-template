# Hack Kosice Marathon: Bon Appétit

*A template for projects submitted to HK Marathon 2021. Check out here https://www.youtube.com/watch?v=GdtxDyjA71I
The complete code for the react app can be found in the master branch. Kindly change the branch.*

## Team

*Dynamic Duo*

### Team members

- Bipul Gautam, Indian Institute of Information Technology, Dharwad
- Divyansh Tripathi, Indian Institute of Information Technology, Dharwad

## Description

*
Challenge: How and when developers from SudoLabs order lunch. Currently, it can take them up to 30 minutes to figure this out. This is a lot of time they'd rather save and spend on building products.
There are 3 questions they need to answer each day:
1. Who is ordering today?
2. Which restaurant we want to order from?
3. When do we want to order?

Solution proposed:
We have implemented an utility that will assist them in ordering group meals. With the Edamam's reliable API, we have made a robust solution for the developers to search any dish of their choice with a custom filter and explore more about it, that is, the amount of nutrients and calories and the ingredients. If they want to prepare their lunch on some occassion, we have got that covered. We also provide the receipe if they would like to cook. They can also go with ordering online. 
Keeping a schedule of the three questions as stated in the challenges can be difficult, so we have come up with a scheduler cum reminder system which they can use to store and modify the weekly plan and save it to their system and share. We have gone a  step furthur in discussing the various problems that developers face and have also made programming solution which can be a life saver. We have made notification system as a bonus thing which notifies them about some of the very crucial things. 

Value of the Solution:
The lives of programmers is really tough. They need to stay healthy and they need to know what they should eat and what they are eating. Our prototype solves this problem. Also it can help them save their precious time which they could use in the development of new products in the sense that we have made group meal planning simple. We have also made collaboration and sharing the plan simple.

Target User:
 Basically our prototype aims to target following users: All the people who are craving for healthy and delicious single/group meal who spend most of their time in discussing and wasting time to figure out what they would eat for lunch,dinner,etc. The people who want a personalized system to help them decide what they should eat which is tasty and at the same time healthy. The people who want to keep a track of the planned meal for the week. The people who want a recommendation system to assist them in which dish they would like. The people who wish to know what they are eating, that is, the ingredients and nutrition present. The people who like to cook.




*

## Protoype

*

The user needs to login first(not mandatory). Then he(they) has(have) to navigate to the find meal section and fill in the preferences to find the most relevant nutritious and delicious food. After he(they) click(s) on submit, he(they) will be presented with the top 3 relevant results from which he(they) can choose what he(they) has(have) to eat looking at the nutrition and ingredient values. He can either choose to cook himself hence, click on get receipe or order online. He can also add the items to a scheduler and plan the weekly single/group meal. He can also export and share it. He can also make changes in the schedule and add comments.

We have implemented login/register, Custom Search, API fetching/posting, CRUD operations.

At present after clicking on order online, the user is redirected to bistro.sk. We would like to automate this process. For this we would like to 
integrate bistro's API if any or collaborate with bistro. 
*

## How to try

*Here is the link to our video of the working prototype: https://youtu.be/GdtxDyjA71I
There is a pdf file in the repository which explains the workflow.


Steps to clone:

1 . Clone the repo
2.  Go to package.json and install all dependencies using yarn add pkg_name or npm i pkg_name
3.  Get your API keys from Edamam and put it. 
4.  Run the script yarn start:dev to run it
*

## Presentation

*There is a pdf file in the repository which explains the workflow.
for instance you can check out  https://youtu.be/GdtxDyjA71I*

## Challenges and accomplishments

*We learned web scraping using python's beautiful soup. We also explored content based and collaborative filtering approaches to build recommendation engine *

*This was our first project in the modern JavaScript library React JS. We were successfully able to build a webapp with all the planned features. We were also able to work with APIs and CRUD operations.

We are undergraduate students pursuing bachelors in Computer Science and would also become developers tomorrow. We were able to do a thorough research and got proper insights on the life of a developer.*

## Next steps

*The prototype is almost ready except that we are yet to collect the data, prepare the dataset and build the engine. We have also planned to integrate the online food delivery sevice's API(bistro) if any to build the utility more robust. We have learned Web Scraping which we would like to use in our web app to make it more versatile.

*

## License

*This repository includes an [unlicense](http://unlicense.org/) statement though you may want [to choose a different license](https://choosealicense.com/).*
