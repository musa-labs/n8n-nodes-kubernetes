import type {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods, IHttpRequestOptions,
	ILoadOptionsFunctions,
} from 'n8n-workflow';

export async function kubernetesApiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	resource: string,
	body: IDataObject = {},
	query: IDataObject = {},
	uri?: string,
	headers: IDataObject = {},
	option: IDataObject = {json: true},
) {
	const credentials = await this.getCredentials('kubernetesApi');
	const sslVerify = credentials.sslVerify === true;
	let apiURL = `${credentials.baseUrl}/api/v1/${resource}`;

	const options: IHttpRequestOptions = {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${credentials.apiToken}`,
		},
		method,
		body,
		qs: query,
		url: uri || apiURL,
		skipSslCertificateValidation: sslVerify,
	};
	try {
		Object.assign(options, option);

		if (Object.keys(headers).length !== 0) {
			options.headers = Object.assign({}, options.headers, headers);
		}

		if (Object.keys(body).length === 0) {
			delete options.body;
		}


		return await this.helpers.httpRequestWithAuthentication.call(
			this,
			'kubernetesApi',
			options,
		);
	} catch (error) {

		throw error;
	}
}
