# E-L-O-Q-U-E-N-T 

This is my journey in studying Javascript from Eloquent Book and it consists my solution for all of the exercises.

The goal is to learn JS in modern ways.

## FUNCTION
- Are the bread and butter of JavaScript programming.
- THe concept of wrapping a piece of program in a value has many uses.
- Give us a way to structure larger programs, to reduce repetition, to associate names w/ subprograms, and to isolate these subprograms from each other.

## Defining a function

A function definition: 
1. A regular binding where the valueof the bindin is a function.
2.  Function is created w/ an expression that starts w/ the keyword **_function_**.
3. The function body of a function created this way must always be wrapped by braces **{}**.
4. A **__return__** statement determines the value the function returns.
5. When control comes across such a statement it immediately jumps out of the current function and gives the returned value to the code that called the function.
6. **__Parameters__** to a function behave like regular bindings, but their initial values are given by the **__caller__** of the function, not the code in the function itself.

## BINDINGS AND SCOPES
- Each binding has a **__scope__**, which is the part of the program in which the binding is visible.
- For bindings defined outside of any function or blocks the scope is the whole program.
 --> These are called **__global__**.
