# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

   A stateful component is one that handles state changes within it, whereas a functional component does not. A stateful component will set state with either the useState hook or a constructor and will handle, at least in part, non visual changes. A functional component will strictly handle visual aspects of the app, such as what information will be displayed and where.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

   componentWillMount is called during the mounting phase before a component gets loaded into the DOM. componentWillUpdate is called during the updating phase before a component is updated or if any state or props passed to that specific component change.

3. Define stateful logic.

   Stateful logic is anything that creates or modifies state. It is generally used in reference to handling non-visual behavior of a component.

4. What are the three step of creating a successful test? What is done in each phase?

   1. Arrange: Render the component that is to be tested.
   2. Act: Select the necessary elements on the page and perform any necessary events.
   3. Assert: Check that the previously performed actions output the expected results.
