

## 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

### ans:
"getElementById" return only one element by the given unique id (ex: document.getElementById("roll01")).
"getElementsByClassName" returns a collection of elements(like array) with a same class name.
"querySelector / querySelectorAll" select element by the given css selector.
querySelector ===> it is only return first element, that match with css selector,
querySelectorAll ===> it is return node list.

---
2. How do you **create and insert a new element into the DOM**?

### ans: 
step 1:
            let h1 = document.createElement("div");
            h1.innerHTML =`
            <h1>Hello!!</h1>
            `
    step 2:
             to insert the created element, we need to select the parent element/tag.
            like- let body = document.getElementById("body");
            then we can append() or prepend() the created element, 
            like: body.append(h1); 


3. What is **Event Bubbling** and how does it work?

### ans:
Event Bubbling is when an element receives an event, and that event propagated to its parent → grandparent → document elements in the DOM tree until it gets to the root element.

---
4. What is **Event Delegation** in JavaScript? Why is it useful?

### ans:
Event Delegation is handling a child element’s event by adding the event listener to it's parent element.

It is useful because it's work fast, we can write less code and it also work in dynamically add new child elements.

---
5. What is the difference between **preventDefault() and stopPropagation()** methods?

### ans:
preventDefault() method stops the default behavior of an element.
ex: when we submit from, the web site is Automatically reload, to prevent this default behavior (page reload) we use preventDefault().

stopPropagation() method stop Event Bubbling.

