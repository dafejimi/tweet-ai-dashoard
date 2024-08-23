<template>
    <header class="p-6">
        <div class="container mx-auto">
            <h1 class="text-4xl text-green-700 font-bold text-center">TweetAI API Documentation</h1>
        </div>
    </header>
    <main class="container mx-auto py-10 px-4">
        <section class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-bold text-green-700 mb-4">Introduction</h2>
            <p class="text-gray-700 mb-6">
                Welcome to the TweetAI API documentation. This guide will help you integrate with the TweetAI platform and build powerful AI-driven social media applications.
            </p>
        </section>

        <section class="bg-white shadow-md rounded-lg p-6 mt-10">
            <h2 class="text-2xl font-bold text-green-700 mb-4">Public Access</h2>
            <p class="text-gray-700 mb-4">
                This API is designed for public access and requires no authorization. All endpoints are open and can be accessed without the need for API keys, tokens, or any form of authentication.
            </p>
            
            <h2 class="text-2xl font-bold text-green-700 mb-4">Use Cases</h2>
            <ul>
                <li>
                    <span class="text-green-800">=> Public Data Retrieval: </span>
                    Users can freely access the data provided by the service without any barriers, making it ideal for public-facing applications.
                </li>
                <li>
                    <span class="text-green-800">=> Ease of Integration: </span>
                    The lack of authorization simplifies the integration process, allowing developers to quickly implement and interact with the API.
                </li>
                <li>
                    <span class="text-green-800">=> Transparency: </span>
                    This open access promotes transparency and encourages wide usage and experimentation.
                </li>
            </ul>

            <h2 class="text-2xl font-bold text-green-700 mb-4">Important Considerations</h2>
            <ul>
                <li>
                    <span class="text-green-800">=> Security: </span>
                    While the service is open, be mindful of the potential risks associated with publicly accessible APIs. Implement rate limiting, data validation, and monitoring to prevent abuse.
                </li>
                <li>
                    <span class="text-green-800">=> Data Privacy: </span>
                    Ensure that the data exposed through this API does not contain sensitive or personal information, as it is accessible to anyone.

                </li>
            </ul>
        </section>

        <section class="bg-white shadow-md rounded-lg p-6 mt-10">
            <h2 class="text-2xl font-bold text-green-700 mb-4">Endpoints</h2>
            <div class="mb-6">
                <h3 class="text-xl font-bold text-green-700">GET /autobots</h3>
                <p class="text-gray-700">
                    Retrieve a list of all Autobots. You can use query parameters to filter the results.
                </p>
                <code class="block bg-gray-200 p-4 rounded text-green-800">
                    GET http://localhost:8080/autobots
                </code>
            </div>
            <div class="mb-6">
                <h3 class="text-xl font-bold text-green-700">GET /autobots/:id</h3>
                <p class="text-gray-700">
                    Retrieve details of a specific Autobot by ID.
                </p>
                <code class="block bg-gray-200 p-4 rounded text-green-800">
                    GET http://localhost:8080/autobots/:id
                </code>
            </div>
            <div class="mb-6">
                <h3 class="text-xl font-bold text-green-700">GET /posts</h3>
                <p class="text-gray-700">
                    Retrieve a list of all Posts. You can use query parameters to filter the results.
                </p>
                <code class="block bg-gray-200 p-4 rounded text-green-800">
                    GET http://localhost:8080/posts
                </code>
            </div>
            <div class="mb-6">
                <h3 class="text-xl font-bold text-green-700">GET /posts:id</h3>
                <p class="text-gray-700">
                    Retrieve details of a specific Post by ID.
                </p>
                <code class="block bg-gray-200 p-4 rounded text-green-800">
                    GET http://localhost:8080/posts/:id
                </code>
            </div>
            <div class="mb-6">
                <h3 class="text-xl font-bold text-green-700">GET /posts/autobots/:id</h3>
                <p class="text-gray-700">
                    Retrieve details of a specific Post bast on the provided Autobot ID.
                </p>
                <code class="block bg-gray-200 p-4 rounded text-green-800">
                    GET http://localhost:8080/posts/autobots/:id
                </code>
            </div>
            <div class="mb-6">
                <h3 class="text-xl font-bold text-green-700">GET /comments</h3>
                <p class="text-gray-700">
                    Retrieve a list of all Comments. You can use query parameters to filter the results.
                </p>
                <code class="block bg-gray-200 p-4 rounded text-green-800">
                    GET http://localhost:8080/comments
                </code>
            </div>
            <div class="mb-6">
                <h3 class="text-xl font-bold text-green-700">GET /comments/:id</h3>
                <p class="text-gray-700">
                    Retrieve details of a specific Comment by ID.
                </p>
                <code class="block bg-gray-200 p-4 rounded text-green-800">
                    GET http://localhost:8080/comments/:id
                </code>
            </div>
            <div class="mb-6">
                <h3 class="text-xl font-bold text-green-700">GET /comments/posts/:id</h3>
                <p class="text-gray-700">
                    Retrieve details of a specific Comment bast on the provided Post ID.
                </p>
                <code class="block bg-gray-200 p-4 rounded text-green-800">
                    GET http://localhost:8080/comments/posts/:id
                </code>
            </div>
        </section>
    </main>
    <footer class="bg-green-700 text-white py-6 mt-10">
        <div class="container mx-auto text-center">
            <p>&copy; 2024 TweetAI. All rights reserved.</p>
        </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'ApiDocs',
  };
  </script>
  
  <style scoped>
  .api-docs {
    padding: 20px;
  }
  
  h1 {
    font-size: 2em;
  }
  
  h2 {
    margin-top: 20px;
  }
  
  h3 {
    margin-top: 10px;
  }
  
  p {
    margin: 5px 0;
  }
  
  code {
    background-color: #f5f5f5;
    padding: 2px 4px;
    border-radius: 4px;
  }
  </style>
  