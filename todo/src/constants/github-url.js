export const GITHUB_API_URL = 'http://github.o-in.dwango.co.jp/api/v3';
// export const GITHUB_API_URL = 'https://api.github.com';
export const reposUrl = (orgName) => { return `${GITHUB_API_URL}/orgs/${orgName}/repos?per_page=100`; }
export const prsUrl = (repoName) => { return `${GITHUB_API_URL}/repos/ncenq/${repoName}/pulls?per_page=100`; };

// const GITHUB_TOKEN = process.env.GHE_TOKEN;
// export  const config = { headers: {Authorization: `token ${GITHUB_TOKEN}`} };

export const ORGANIZATIONS = ['ncenq', 'dwango'];
