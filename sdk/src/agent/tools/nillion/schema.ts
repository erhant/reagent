// https://ethglobal.com/events/agents/prizes#nillion
// https://docs.nillion.com/build/secret-vault-quickstart

const nillionSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "Web3 Experience Survey",
  type: "array",
  items: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        format: "uuid",
        coerce: true,
      },
      name: {
        type: "object",
        properties: {
          $share: {
            type: "string",
          },
        },
        required: ["$share"],
      },
      years_in_web3: {
        type: "object",
        properties: {
          $share: {
            type: "string",
          },
        },
        required: ["$share"],
      },
      responses: {
        type: "array",
        items: {
          type: "object",
          properties: {
            rating: {
              type: "integer",
              minimum: 1,
              maximum: 5,
            },
            question_number: {
              type: "integer",
              minimum: 1,
            },
          },
          required: ["rating", "question_number"],
        },
        minItems: 1,
      },
    },
    required: ["_id", "name", "years_in_web3", "responses"],
  },
} as const;
