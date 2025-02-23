/* eslint-disable n8n-nodes-base/node-filename-against-convention */
import { NodeConnectionType, type INodeTypeDescription } from "n8n-workflow";

import * as events from "./events";

export const description: INodeTypeDescription = {
  displayName: "Kubernetes",
  name: "kubernetes",
  group: ["transform"],
  icon: "file:img.svg",
  version: 1,
  subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
  description: "Consume Kubernetes API",
  defaults: {
    name: "Kubernetes",
  },
  inputs: [NodeConnectionType.Main],
  outputs: ['main'],
  credentials: [
    {
      name: "kubernetesApi",
      required: true,
    },
  ],
  properties: [
    {
      displayName: "Resource",
      name: "resource",
      type: "options",
      noDataExpression: true,
      default: "events",
      options: [
        {
          name: 'Event',
          value: "events",
        },
      ],
    },
    ...events.description,
  ],
};
