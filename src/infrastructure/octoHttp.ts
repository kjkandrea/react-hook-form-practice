// eslint-disable-next-line node/no-extraneous-import
import {Octokit} from '@octokit/core';
import octokey from './../config/octokey';

export const octoHttp = new Octokit({
  auth: octokey.access_token,
});
