
# Learning Next.js
This is the repository for the LinkedIn Learning course Learning Next.js. The full course is available from [LinkedIn Learning][lil-course-url].

![Learning Next.js][lil-thumbnail-url] 

The Next.js web development framework gives you all the benefits of a server-side rendering tool with the speed and ease of a single-page app. Using this popular, React-based tool, you can build, manage, and customize a complete web application from scratch in JavaScript.

In this course, instructor Sandy Ludosky shows you how to get the best developer experience from your Next.js project—with zero configuration, zero user headaches, and lightning fast, dynamic page speeds. Explore the benefits of server-side rendering with web frameworks like Next.js. Sandy walks you through basic features such as pages, data fetching, and layout options; advanced topics like dynamic routes and API routes; and how to build and stylize a React project from start to finish so you can create a Next.js app on your own.

## Instructions
This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches
The branches are structured to correspond to the videos in the course. The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter. 
Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:        [files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
	
    Add changes to git using this command: git add .
	Commit changes using this command: git commit -m "some message"

## Installing
1. To use these exercise files, you must have the following installed:
   - A code editor ([VS Code](https://code.visualstudio.com/) is recommended)
   - [Node.js](https://nodejs.org/en/)
 
2. Clone this repository into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.
3. Install dependencies

`npm install` or `npm i`

3. Run the development server

`npm run dev`


### Instructor

**Sandy Ludosky**

_Web Developer and Trainer_                     
                            

Check out my other courses on [LinkedIn Learning](https://www.linkedin.com/learning/instructors/sandy-ludosky).

[lil-course-url]: https://www.linkedin.com/learning/learning-next-js
[lil-thumbnail-url]: https://cdn.lynda.com/course/2491193/2491193-1661366795372-16x9.jpg
