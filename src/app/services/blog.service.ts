import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogs = [
    {
      id: 1,
      title: 'Introduction to Angular',
      content: `
        Angular is a platform and framework for building single-page client applications using HTML, CSS, and JavaScript. Developed by Google, Angular provides a rich ecosystem with tools and libraries that make it easy to build scalable, efficient applications. Angular uses TypeScript, a strongly typed superset of JavaScript, which improves code quality and maintainability. In this article, we’ll cover the basics of setting up an Angular project and understanding the structure of Angular applications.
        Key features include a powerful CLI, dependency injection, reactive programming with RxJS, and a component-based architecture.
      `
    },
    {
      id: 2,
      title: 'Getting Started with TypeScript',
      content: `
        TypeScript is a superset of JavaScript that adds static typing to the language. Developed by Microsoft, it helps developers catch errors early and make code easier to refactor and scale. TypeScript compiles down to JavaScript, meaning you can use it with any existing JavaScript code.
        In this article, we’ll go over how to install TypeScript, set up a basic project, and learn some key concepts like types, interfaces, and classes. By the end, you’ll understand how TypeScript can enhance your JavaScript projects, especially when working on large applications.
      `
    },
    {
      id: 3,
      title: 'Understanding Dependency Injection',
      content: `
        Dependency Injection (DI) is a design pattern that allows a class to receive its dependencies from an external source rather than creating them itself. Angular has a built-in DI system, which helps manage dependencies efficiently and allows for easier testing and code maintenance.
        In this blog post, we’ll dive into the concept of DI, its benefits, and how it’s used in Angular applications. We’ll explore how to create injectable services, configure providers, and use dependency injection to create loosely coupled and testable components in Angular.
      `
    },
    {
      id: 4,
      title: 'Building Reactive Forms in Angular',
      content: `
        Angular offers two types of forms: Template-driven and Reactive forms. Reactive forms are more powerful and provide more control over the form’s behavior, especially in large applications. Reactive forms use observables from RxJS, allowing for advanced validation, asynchronous data handling, and dynamic form control creation.
        In this article, we’ll cover the basics of setting up reactive forms, adding form controls and validators, and handling form submission. We’ll also go over advanced techniques like conditional validation and custom validators to help you create robust, reactive forms in Angular.
      `
    },
    {
      id: 5,
      title: 'Angular Routing Guide',
      content: `
        Angular’s RouterModule is a powerful feature that allows you to create a single-page application (SPA) with client-side routing. With Angular routing, users can navigate between different views or components without refreshing the entire page, improving the user experience.
        This blog post covers the essentials of setting up routing in an Angular application, defining routes, using router outlets, and configuring route guards for authentication. We’ll also explore lazy loading to improve performance and how to manage route parameters and query strings to create dynamic, data-driven pages.
      `
    }
  ];

  constructor() { }

  getAllBlogs() {
    return this.blogs;
  }

  getBlogById(id: number) {
    return this.blogs.find(blog => blog.id === id);
  }
}