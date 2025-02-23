import type { IExecuteFunctions, INodeExecutionData } from "n8n-workflow";
import { NodeApiError, NodeOperationError } from "n8n-workflow";

import * as events from "./events";
import type { Kubernetes } from "./node.type";

export async function router(this: IExecuteFunctions) {
  const items = this.getInputData();

  const returnData: INodeExecutionData[] = [];

  const resource = this.getNodeParameter<Kubernetes>("resource", 0) as string;
  const operation = this.getNodeParameter("operation", 0);

  let responseData;

  const kubernetes = {
    resource,
    operation,
  } as Kubernetes;

  for (let i = 0; i < items.length; i++) {
    try {
      switch (kubernetes.resource) {
        case "events":
          responseData = await events[kubernetes.operation].execute.call(
            this,
            i
          );
          break;
        default:
          throw new NodeOperationError(
            this.getNode(),
            `The resource "${resource}" is not known`
          );
      }

      returnData.push(...responseData);
    } catch (error) {
      if (this.continueOnFail()) {
        const executionErrorData = this.helpers.constructExecutionMetaData(
          this.helpers.returnJsonArray({ error: error.message }),
          { itemData: { item: i } }
        );
        returnData.push(...executionErrorData);
        continue;
      }
      //NodeApiError will be missing the itemIndex, add it
      if (
        error instanceof NodeApiError &&
        error?.context?.itemIndex === undefined
      ) {
        if (error.context === undefined) {
          error.context = {};
        }
        error.context.itemIndex = i;
      }
      throw error;
    }
  }
  return [returnData];
}
