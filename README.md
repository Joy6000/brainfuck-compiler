# References
- [Promise-File-Based Brainfuck Interpreter/Compiler](#promise-file-based-brainfuck-interpretercompiler)
  - [How to set up and use](#setting-up)
  - [Usage](#usage)
    - [Accepted Characters](#accepted-characters-and-their-operations) 
    - [Doesn't Seem Too Complicated, right?](#doesnt-seem-too-complicated-right)
  - [BrainFuck](#brainfuck-code)
  - [Javascript](#javascript-code)

# Promise-File-Based Brainfuck Interpreter/Compiler!
Easily compile brainfuck code right inside your machine<br/>
This compiler was written in Javascript to fit Node Standards<br>
MIT License in effect
## Setting up
### Install
For now, we're only available on NPM
```
npm install node-bfi
```
### Usage

Let's write a simple brainfuck program to print "Hi"  
Brainfuck manipulates memory directly, and so, uses ASCII to display letters.  
Capital H: 72  
Lowercase i: 105  
Now we are tasked with figuring out how to get numbers this high without having a long string of pluses, 
and also
#### Accepted Characters and Their Operations
In brainfuck, you use pointers to select which memory slot to manipulate. These are:  
##### \>
For moving forward
##### < 
For moving backward
##### .
To Log
##### ,
To accept input
##### +
For adding 1 to the current memory slot
##### - 
For removing 1 from the current memory slot
##### [
To initialise a loop  
And finally
##### ]
To close a loop.

#### Doesn't seem too complicated, right?
Wrong.  
Anyway, back to writing 'Hi'  
Here, We can use the brainfuck code:
### Brainfuck Code
```bf
* = When pasting this, do not include these. When pasting this, remove this comment too.
You can paste everything except for this comment, the one before, and everything with a star

>++++++++++ Ok. So here we are adding 10 to the first memory slot 

Now anything between those to greater than and less than signs is what we 

will be multiplying 10 by

[-><] * 

Lets add 7 

for 70

[->*******<]> *

Wait, but now we only have 70 and we need 72! No biggie

lets add another 2

[->*******<]>++ *

Nice now we have 72

But wait; we arent logging this stuff!

No biggie again all we need to do is add a period to the end of that

[->*******<]>**.

Great! Now he have a capital H

Now for the lowercase i

remember that i was 105

lets multiply by 15

>+++++++++++++++

Great now for the loop

We can multiple by 7

[->+++++++<]>.

Thats it! Really. *
```
Awesome, now we have the brainfuck code. Let's put it in a file named 'hi.bf'<br>It also must be 
in a directory called 'bf'<br>Now Let's write this simple javascript program 
### Javascript code
```js
const bfi = require('node-bfi')
bfi('hi.bf').then(console.log) //Output: Hi
```
Remember, this is promise based. 