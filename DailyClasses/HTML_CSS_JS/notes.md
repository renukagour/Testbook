# JS Notes

- document vs window.
 document - whole html document object
 window - window object - whole browser window like cursor
 Window object : It is the top most object and outermost element of the object hierarchy as shown in Figure 1.

Document object : Each HTML document that gets loaded into a window becomes a document object. The document contains the contents of the page. Using document object, JavaScript can modify, add and delete the HTML elements, attributes CSS styles in the page
The window object represents a window/tab containing a DOM document where as document object is property of window object that points to the DOM document loaded in that window.

You can access a document object either using window.document property or using document object directly as window is global object. In the below example, title is the property of document object.

- var let const
  in case of vas variable hoisting  // it is it consider declaration of a before console
  console.log(a); //undefined // in case of let and const error
  var a=10;       // reason id
- variable declaration and initialization
  let a; //memory allocation declaration
  a=10; //initialization
- loops
- functions
