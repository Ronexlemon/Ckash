

export const googleCredentials = {
  type: "service_account",
  project_id: process.env.project_id as string,
  private_key_id:process.env.private_key_id as string,
  private_key:process.env.private_key?.replace(/\\n/g, '\n') as string,
  client_email: process.env.client_email as string,
  client_id: process.env.client_id as string,
  auth_uri: process.env.auth_uri as string,
  token_uri: process.env.token_uri as string,
  auth_provider_x509_cert_url:process.env.auth_provider_x509_cert_url as string,
  client_x509_cert_url:process.env.client_x509_cert_url as string,
  universe_domain: process.env.universe_domain  as string|| "googleapis.com",
};
