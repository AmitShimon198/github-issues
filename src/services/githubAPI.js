class GithubAPI {
    constructor(owner, repo) {
        this.baseUrl = `https://api.github.com`
        this.owner = owner;
        this.repo = repo;
    }

    fetchIssuesCount = async () => {
        const data = await fetch(`${this.baseUrl}/repos/${this.owner}/${this.repo}`);
        const comments = await data.json();
        return comments.open_issues_count;
    }

    fetchIssuesList = async (page_value=0, pre_page) => {

        const data = await fetch(`${this.baseUrl}/search/issues?q=repo:${this.owner}/${this.repo}+type:issue&page=${page_value}&per_page=${pre_page}`);
        const dataList = await data.json();
        return dataList.items;
    }

    fetchIssueById = async (id) => {
        const data = await fetch(`${this.baseUrl}/repos/${this.owner}/${this.repo}/issues/${id}`);
        return await data.json();
    }

    fetchIssueComments = async (id) => {
        const data = await fetch(`${this.baseUrl}/repos/${this.owner}/${this.repo}/issues/${id}/comments`);
        return await data.json();
    }
}
export default new GithubAPI('facebook', 'create-react-app');