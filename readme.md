### 6. Answer of all questions:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   **_Answer :_** The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is getElementById selects one element by ID, getElementsByClassName selects multiple elements by class, and querySelector/querySelectorAll select elements using any CSS selector where querySelector gives us 1st matches element and querySelectorAll gives us all matches elements or node list

2. How do you **create and insert a new element into the DOM**?

   **_Answer :_** I create new element by using document.createElement() and insert a new element into the DOM using appendChild() or append()

3. What is **Event Bubbling** and how does it work?

   **_Answer :_** Event bubbling is when a child element’s event automatically moves up to its parent elements and it works by triggering the event on the target element first, then propagating it up through its parent elements.

4. What is **Event Delegation** in JavaScript? Why is it useful?

   **_Answer :_** Event delegation is a technique where a parent element handles events for its child elements and it is useful because it's works dynamically and if i added new child it also works there

5. What is the difference between **preventDefault() and stopPropagation()** methods?

   **_Answer :_** The difference between **preventDefault() and stopPropagation()** methods is
   preventDefault() stops the default browser action, while stopPropagation() stops the event from bubbling up or capturing through the DOM.
