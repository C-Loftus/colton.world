---
title: "The Ideal Voice Coding Language"
date: 2022-06-28T22:42:31-04:00
draft: false
summary: ""
---

When we are thinking about programming language design, we are usually thinking about qualitative metrics like runtime speed, compilation time, the type system, or things of that nature.

Yet in my experience with cursorless I've quickly realized that for accessibility, there are a whole different set of concerns. Languages with terse syntax and dynamic typing can quickly become frustrating to use with voice. While I think it is  currently unfeasible to have a general purpose programming language just for voice coding, I nonetheless think it is valuable exercise to consider what exactly makes a language appropriate for voice use? How can we design languages  that are not only easy to understand but also easy to work with for those  using alternative input methods.

## Do Less With More
In this regard there is much overlap between traditional software engineering goals and programming language accessibility. Ideally we have as many low cost abstractions as possible with the least amount of boilerplate. At the end of the day writing less code means speaking less and refactoring less when things go wrong. As a result, it makes sense to favor languages that are higher level and take as much advantage of the compiler and type system as possible. This also provides better autocompletion in our IDE, which once again allows us to do less work by preventing errors.  This is additionally important given the properties of our editor. VSCode can be made into a relatively good and accessible IDE. As a result,  we want to minimize debugging time which may require switching to the web browser, copying code or commands, and generally typing superfluous inputs. Once again, our goal is not necessarily to have the prettiest code but rather to take as much burden off us as possible.

## Reconsider Syntax
While whitespace-based programming languages are often visually appealing, they are certainly not the most efficient to use with voice. They cannot be auto formatted as easily and dictation programs can often cause incorrectly inserted white space. However on the positive side, voice allows us to quickly input essentially any character we want.  We are no longer limited to ASCII out of practicality. This opens up viability  for more symbolic types of syntax. While APL may be overwhelming to many it is a good example of how to leverage symbols  in addition to more conventional lexical approaches.

 ## Current Options
with the previous information in mind, we are essentially looking for a higher level general purpose programming language that has a  powerful compile time type system. We are also looking for it to be written with syntax that favors voice input:  use type inference when possible, use braces instead of white space, try to be syntactically concise, and maybe even experiment with symbols.

Currently, it seems that typescript fulfills these goals the best. It is not necessarily the prettiest language, nor the most academic but I have yet to find a better option. It has
*  a robust type system that can help prevent errors at compile time
*   strong tooling support from our IDE 
*    brace syntax and intelligent type inferences
*    innumerable existing libraries to prevent us needing to reinvent the wheel

In an ideal world it would be interesting to leverage some sort of compile time preprocessor alongside typescript. Σ∀i\<n can be easily typed from voice input  and might be 