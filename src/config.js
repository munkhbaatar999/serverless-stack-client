const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "appnotesuploads",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ezzunfpfhe.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_2bkC7LSEz",
    APP_CLIENT_ID: "764rs8o3erb6cg0htngqqsgnge",
    IDENTITY_POOL_ID: "us-east-1:bb1a52a1-daf0-4f3f-a3b9-31a02e5788d0",
  },
};

export default config;