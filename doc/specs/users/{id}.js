export default function () {
    let operations = {
        GET,
        PUT,
        DELETE,
    };
  
    function GET(req, res, next) {}
  
    function PUT(req, res, next) {}
  
    function DELETE(req, res, next) {}
  
    GET.apiDoc = {
        summary: "Returns a single user",
        operationId: "getOneUser",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "User data",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
        },
      };
    
      PUT.apiDoc = {
        summary: "Updates an existing user",
        operationId: "updateUser",
        parameters: [
          {
            name: "id",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Updated user",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
        },
      };
    
      DELETE.apiDoc = {
        summary: "Deletes an existing user",
        operationId: "deleteUser",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          204: {
            description: "No content",
            content: {},
          },
        },
      };
  
    return operations;
  }