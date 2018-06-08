# ionic3-crud-basic
A basic Create, Read, Update, Delete (CRUD) using Ionic 3 and Loopback 3 


basicCRUD is the server (loopback folder connected with mongoDB).
basicCRUD-client is the Ionic 3 client folder.

The application is a simple student entry that utilizes simple CRUD along with ionic components.


You need to have NodeJS, MongoDB, Loopback, and Ionic CLI installed as prerequisites.
Do note that I will not be providing a step by step tutorial but instead just some tips that may be helpful.



Create the server application using the following command and answer the questions;
      $ lb
      
Questions include name of your application, the version of Loopback to be used, and the kind of application.

The application can be run using the command;
      $ node .
      
Visit localhost:3000/explorer to see the SwaggerAPI.

To install mongo connector;
      $ npm install --save loopback-connector-mongodb
 
Keep MongoDB database server running alongside. Now connect the connector;
      $ lb datasource mongoDS --connector mongoDB
      
To create a data model;
      $ lb model
      
Questions include model name, datasource the model should be attached to, model's base class, and so on.
You also get to add properties for the model.

To create an ionic 3 project, input the following in the terminal;
      ionic start project-name template
i.e, for example, ionic start basicCRUD-client blank

To create an ionic 3 service or provider, input the following in terminal;
      ionic g provider service-name
For example, ionic g provider student
  
To create an ionic 3 page, input the following in terminal;
      ionic g page page-name
For example, ionic g page displayPage

Note that 'g' stands for 'generate'. You can replace 'g' with 'generate' and it will still work the same.
  
