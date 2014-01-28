(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2014 distri\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "echo\n====\n\nA sample echo server sample.\n",
      "type": "blob"
    },
    "package.json": {
      "path": "package.json",
      "mode": "100644",
      "content": "{\n  \"name\": \"Echo\",\n  \"version\": \"0.1.0\",\n  \"dependencies\": {\n    \"coffee-script\": \"~1.6.3\",\n    \"express\": \"~3.3.5\"\n  }\n}\n",
      "type": "blob"
    },
    "Procfile": {
      "path": "Procfile",
      "mode": "100644",
      "content": "web: coffee main.coffee\n",
      "type": "blob"
    },
    "main.coffee": {
      "path": "main.coffee",
      "mode": "100644",
      "content": "{PORT} = process.env\n\nPORT ?= 5000\n\nexpress = require('express')\napp = express()\n\napp.get '/', (req, res) ->\n  res.send('hello world')\n\napp.listen(PORT)\n",
      "type": "blob"
    },
    ".travis.yml": {
      "path": ".travis.yml",
      "mode": "100644",
      "content": "deploy:\n  provider: heroku\n  api_key:\n    secure: RTMdJJWWTwgDdcmXxys5d3Gix7LMvA2hIRJM1jaELARvEDnJpQxo9OcNy/4AT0uKjLKmPHj8QXdy1G0NnszvZKknSS0NQkqV42ajb4r3fuEeDeEEkS7S0ZA/pQz8w7X56Qv1zjFB8o72hSvFded9H9trTHkCBeEyL8D5JXOu+lc=\n  app:\n    distri-heroku: gh-pages\n  on:\n    repo: distri/echo\nbranches:\n  only: gh-pages\n",
      "type": "blob"
    }
  },
  "distribution": {
    "package": {
      "path": "package",
      "content": "module.exports = {\"name\":\"Echo\",\"version\":\"0.1.0\",\"dependencies\":{\"coffee-script\":\"~1.6.3\",\"express\":\"~3.3.5\"}};",
      "type": "blob"
    },
    "main": {
      "path": "main",
      "content": "(function() {\n  var PORT, app, express;\n\n  PORT = process.env.PORT;\n\n  if (PORT == null) {\n    PORT = 5000;\n  }\n\n  express = require('express');\n\n  app = express();\n\n  app.get('/', function(req, res) {\n    return res.send('hello world');\n  });\n\n  app.listen(PORT);\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "entryPoint": "main",
  "repository": {
    "id": 16296829,
    "name": "echo",
    "full_name": "distri/echo",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/echo",
    "description": "A sample echo server sample.",
    "fork": false,
    "url": "https://api.github.com/repos/distri/echo",
    "forks_url": "https://api.github.com/repos/distri/echo/forks",
    "keys_url": "https://api.github.com/repos/distri/echo/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/echo/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/echo/teams",
    "hooks_url": "https://api.github.com/repos/distri/echo/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/echo/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/echo/events",
    "assignees_url": "https://api.github.com/repos/distri/echo/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/echo/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/echo/tags",
    "blobs_url": "https://api.github.com/repos/distri/echo/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/echo/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/echo/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/echo/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/echo/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/echo/languages",
    "stargazers_url": "https://api.github.com/repos/distri/echo/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/echo/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/echo/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/echo/subscription",
    "commits_url": "https://api.github.com/repos/distri/echo/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/echo/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/echo/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/echo/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/echo/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/echo/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/echo/merges",
    "archive_url": "https://api.github.com/repos/distri/echo/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/echo/downloads",
    "issues_url": "https://api.github.com/repos/distri/echo/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/echo/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/echo/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/echo/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/echo/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/echo/releases{/id}",
    "created_at": "2014-01-27T23:41:05Z",
    "updated_at": "2014-01-27T23:41:05Z",
    "pushed_at": "2014-01-27T23:41:05Z",
    "git_url": "git://github.com/distri/echo.git",
    "ssh_url": "git@github.com:distri/echo.git",
    "clone_url": "https://github.com/distri/echo.git",
    "svn_url": "https://github.com/distri/echo",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 2,
    "branch": "master",
    "defaultBranch": "master"
  },
  "dependencies": {}
});