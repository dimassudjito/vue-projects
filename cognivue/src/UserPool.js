import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_aAsYgiLVO',
  ClientId: '4dnrdar6652q46fipde433mavp'
};

export default new CognitoUserPool(poolData);