import type {
  IDataObject,
  IExecuteFunctions,
  INodeProperties,
} from "n8n-workflow";
import { kubernetesApiRequest } from "../../transport";
import { updateDisplayOptions } from "../../display";
import { fetchOptions } from "../../descriptions";

export const properties: INodeProperties[] = [
  {
    displayName: "Namespace",
    name: "namespace",
    description: "Namespace to get events from",
    type: "string",
    required: false,
    default: "",
    placeholder: "e.g. default",
  },
  {
    displayName: "Options",
    name: "options",
    type: "collection",
    placeholder: "Add option",
    default: {},
    options: fetchOptions,
  },
];

const displayOptions = {
  show: {
    resource: ["events"],
    operation: ["fetch"],
  },
};

export const description = updateDisplayOptions(displayOptions, properties);

export async function execute(this: IExecuteFunctions, index: number) {
  const namespace = this.getNodeParameter("namespace", index) as string;
  const options = this.getNodeParameter("options", index) as IDataObject;
  const body = {};

  let endpoint = "events";

  const qs: IDataObject = {
    ...options,
  };

  if (namespace !== "") {
    qs.namespace = namespace;
    endpoint = `namespaces/${namespace}/events`;
  }

  const responseData = await kubernetesApiRequest.call(
    this,
    "GET",
    endpoint,
    body,
    qs
  );

  return this.helpers.constructExecutionMetaData(
    this.helpers.returnJsonArray(responseData as IDataObject[]),
    { itemData: { item: index } }
  );
}
