import {INodeProperties} from "n8n-workflow";


export const fetchOptions: INodeProperties[] = [

	{
		name: 'allowWatchBookmarks',
		displayName: 'Allow Watch Bookmarks',
		type: 'boolean',
		default: false,
		description: 'Allow watch bookmarks to be sent.'
	},
	{
		name: 'continue',
		displayName: 'Continue',
		type: 'string',
		default: '',
		description: 'The continue option for retrieving paginated results.'
	},
	{
		name: 'fieldSelector',
		displayName: 'Field Selector',
		type: 'string',
		default: '',
		description: 'Selector to filter results based on field values.'
	},
	{
		name: 'labelSelector',
		displayName: 'Label Selector',
		type: 'string',
		default: '',
		description: 'Selector to filter results based on label values.'
	},
	{
		name: 'limit',
		displayName: 'Limit',
		type: 'number',
		typeOptions: {
			minValue: 0,
		},
		default: 0,
		description: 'Limit the number of items returned by the server.'
	},
	{
		name: 'pretty',
		displayName: 'Pretty',
		type: 'string',
		default: '',
		description: 'If true, the output is pretty printed.'
	},
	{
		name: 'resourceVersion',
		displayName: 'Resource Version',
		type: 'string',
		default: '',
		description: 'Version of the resource to start with for the list/watch operation.'
	},
	{
		name: 'resourceVersionMatch',
		displayName: 'Resource Version Match',
		type: 'string',
		default: '',
		description: 'Determines how resourceVersion is applied to list/watch.'
	},
	{
		name: 'sendInitialEvents',
		displayName: 'Send Initial Events',
		type: 'boolean',
		default: false,
		description: 'If true, sends initial events for watch instead of waiting for changes.'
	},
	{
		name: 'timeoutSeconds',
		displayName: 'Timeout Seconds',
		type: 'number',
		typeOptions: {
			minValue: 0,
		},
		default: 0,
		description: 'Timeout for the list or watch call, in seconds.'
	},
	{
		name: 'watch',
		displayName: 'Watch',
		type: 'boolean',
		default: false,
		description: 'If true, watch for changes to the requested resources.'
	},

];


