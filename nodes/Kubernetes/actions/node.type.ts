import type { AllEntities } from "n8n-workflow";

type NodeMap = {
  events: "fetch";
};

export type Kubernetes = AllEntities<NodeMap>;
