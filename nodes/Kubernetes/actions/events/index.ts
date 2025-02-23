import type { INodeProperties } from "n8n-workflow";

import * as fetch from "./fetch.operation";

export { fetch };

export const description: INodeProperties[] = [
  {
    displayName: "Operation",
    name: "operation",
    type: "options",
    noDataExpression: true,
    displayOptions: {
      show: {
        resource: ["events"],
      },
    },
    options: [
      {
        name: 'Fetch',
        value: "fetch",
        description: 'Fetch options',
        action: 'Fetch to events with kubernetes',
      },
    ],
    default: "fetch",
  },
  ...fetch.description,
];
