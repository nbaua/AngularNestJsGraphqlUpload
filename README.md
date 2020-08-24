# Angular NestJs Graphql Upload

### Prerequisites

You must have fundamental knowledge of NestJS (Node+JavaScript) and GraphQL along with some basic Angular.

### This repository contains two separate projects.

`nest-gql-upload` - Server API built using Nest JS

`ng-graphql-client` - UI built using Angular 10.0.1

> Using Node: 12.18.0

For simplicity the GraphQL resolvers and query has been implemented inline using the Code First approach. The upload scalar uses graphql-multipart-request-spec.

```
This application shows a single file upload demo.
however with minimal changes the application can be converted to upload multiple files at once, as well.

With the code first approach, Apollo Server adds a custom scalar type called Upload, automatically.

If you wish to follow the schema first approach, you must implement the Upload scalar.
```

### Application in Action

# Postman

![Upload Via API](https://github.com/nbaua/AngularNestJsGraphqlUpload/blob/master/screenshots/postman.PNG "Upload Via API")

# 1

![Uploading File](https://github.com/nbaua/AngularNestJsGraphqlUpload/blob/master/screenshots/screen1.PNG "Uploading File")

# 2

![File Uploaded](https://github.com/nbaua/AngularNestJsGraphqlUpload/blob/master/screenshots/screen2.PNG "File Uploaded")
