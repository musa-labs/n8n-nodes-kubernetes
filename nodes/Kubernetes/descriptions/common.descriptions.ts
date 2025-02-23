import { INodeProperties } from "n8n-workflow";

export const fetchOptions: INodeProperties[] = [
  {
    displayName: "Allow Watch Bookmarks",
    name: "allowWatchBookmarks",
    type: "boolean",
    default: false,
    description: 'Whether allow watch bookmarks to be sent',
  },
  {
    displayName: "Continue",
    name: "continue",
    type: "string",
    default: "",
    description: 'The continue option for retrieving paginated results',
  },
  {
    displayName: "Field Selector",
    name: "fieldSelector",
    type: "string",
    default: "",
    description: 'Selector to filter results based on field values',
  },
  {
    displayName: "Label Selector",
    name: "labelSelector",
    type: "string",
    default: "",
    description: 'Selector to filter results based on label values',
  },
  {
    displayName: "Limit",
    name: "limit",
    type: "number",
    typeOptions: {
      minValue: 1,
    },
    default: 50,
    description: 'Max number of results to return',
  },
  {
    displayName: "Pretty",
    name: "pretty",
    type: "string",
    default: "",
    description: 'If true, the output is pretty printed',
  },
  {
    displayName: "Resource Version",
    name: "resourceVersion",
    type: "string",
    default: "",
    description: 'Version of the resource to start with for the list/watch operation',
  },
  {
    displayName: "Resource Version Match",
    name: "resourceVersionMatch",
    type: "string",
    default: "",
    description: 'Determines how resourceVersion is applied to list/watch',
  },
  {
    displayName: "Send Initial Events",
    name: "sendInitialEvents",
    type: "boolean",
    default: false,
    description: 'Whether if true, sends initial events for watch instead of waiting for changes',
  },
  {
    displayName: "Timeout Seconds",
    name: "timeoutSeconds",
    type: "number",
    typeOptions: {
      minValue: 0,
    },
    default: 0,
    description: 'Timeout for the list or watch call, in seconds',
  },
  {
    displayName: "Watch",
    name: "watch",
    type: "boolean",
    default: false,
    description: 'Whether if true, watch for changes to the requested resources',
  },
];
