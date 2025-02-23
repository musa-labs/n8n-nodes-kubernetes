//eslint-disable-next-line n8n-nodes-base/cred-filename-against-convention
import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';


export class KubernetesApi implements ICredentialType {
	name = 'kubernetesApi';
	displayName = 'Kubernetes API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	icon: Icon = 'file:icons/img.svg';
	properties: INodeProperties[] = [
		{
			displayName: 'API Token',
			name: 'apiToken',
			type: 'string',
			typeOptions: { password: true },
			description: "The API Token to access Kubernetes",
			default: "",
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			description: "Base URL of Kubernetes's API",
			default: 'https://IP:PORT',
		},
		{
			displayName: 'Ignore SSL Verifications',
			name: 'sslVerify',
			type: 'boolean',
			description: 'Whether to allow connections to servers with self-signed or invalid SSL certificates. Use carefully.',
			default: false,
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/api/v1/events',
			method: 'GET',
			skipSslCertificateValidation: '={{$credentials.sslVerify}}',
		},
	}
}
