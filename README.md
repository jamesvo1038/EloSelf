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
4. A **_return_** statement determines the value the function returns.
5. When control comes across such a statement it immediately jumps out of the current function and gives the returned value to the code that called the function.
6. **_Parameters_** to a function behave like regular bindings, but their initial values are given by the **__caller__** of the function, not the code in the function itself.

## BINDINGS AND SCOPES
- Each binding has a **_scope_**, which is the part of the program in which the binding is visible.
- For bindings defined outside of any function or blocks the scope is the whole program.
 --> These are called **_global_**.
- Bindings created for function parameters or declared inside a function can be references only in tha function.
 --> They are known as **_local bindings_**
- Bindings declared w/ **_let_** and **_const_** are in fact **local** to the block that they are declared in 
 --> So, if you create one of those inside of a loop, the code before and after the loop cannot "see" it.
- Each scope can "look out" into the scope around it, so x is visible inside the block
 --> There is an exception when multiple bindings have the same name. In that case, code can see only the innermost one.

## NESTED SCOPES
- The set of bindings visible inside a block is determined by the place of that block in the program text.
- Eachlocal scope can also see all the local scopes that contain it, and all scopes can see the global scope.
 --> This approach to binding visibility is called **_lexical scoping_**
 
## FUNCTION as VALUES
- A function value can do all the things that other values can do, you can use it in arbitray expressions, not just call it.
- It is possible to store a function value in a new binding, pass it as an argument to a function.
- A binding that holds a function is still just a regular binding, and can, if not constant, be assigned a new value.

## DECLARATION NOTATION
- When the function keyword is used at the start of a statement, this is a function **_declaration_**.
- The statement defines the binding, and points it at the given function. This declaration doesn't require a semicolon after the function.
- Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope.
