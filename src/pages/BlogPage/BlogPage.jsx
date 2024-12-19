import React from 'react';
import { Helmet } from 'react-helmet-async';

function BlogPage() {
  return (
    <div className="bg-gray-100 p-4">
      <Helmet>
            <title>FoodieFleet|Blog</title>
            </Helmet> 
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl text-center font-bold mb-4">Understanding Data Binding, NPM, and Database Differences</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. What is One-way Data Binding?</h2>
          <p className="mb-4">
            One-way data binding is a concept in web development that refers to the unidirectional flow of data from a data source (usually the model or server) to the view (the user interface). In this approach, changes in the data source automatically update the view, but changes made in the view do not affect the data source directly. One-way data binding is commonly used in frameworks like React and Vue.js. It helps maintain a clear separation between the data and the user interface, making applications easier to manage and understand.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. What is NPM in Node.js?</h2>
          <p className="mb-4">
            NPM (Node Package Manager) is a package manager for JavaScript and Node.js that allows developers to easily manage and share packages of code. It comes bundled with Node.js and provides a command-line interface for installing, updating, and managing JavaScript libraries and tools. NPM is essential for building and maintaining Node.js applications, as it simplifies the process of adding external libraries, managing dependencies, and handling project configurations. It also includes a vast repository of open-source packages that developers can leverage to speed up development and improve code quality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Difference between MongoDB and MySQL Databases</h2>
          <p className="mb-4">
            MongoDB and MySQL are both popular database management systems, but they have significant differences in their data models and usage scenarios.
          </p>
          <p className="mb-2">
            <strong>Key Differences:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>MongoDB is a NoSQL database, while MySQL is a relational database.</li>
            <li>MongoDB stores data in a flexible, schema-less format using JSON-like documents, whereas MySQL stores data in structured tables with a predefined schema.</li>
            <li>MySQL is suitable for applications with complex, structured data and strict ACID compliance requirements, while MongoDB is well-suited for projects that require flexibility, scalability, and the ability to store semi-structured or unstructured data.</li>
            <li>MongoDB uses a flexible querying language and is great for real-time applications, while MySQL uses SQL (Structured Query Language) and is better for traditional, transactional applications.</li>
            <li>Both databases have their strengths and weaknesses, so the choice between them depends on the specific needs of your project.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default BlogPage;
