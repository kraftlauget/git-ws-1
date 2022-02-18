# Present your work with Git and Rebase

## Exercise 1 - Create logically atomic commits

> A logically atomic commit is the smallest, most meaningful change you can make to the software. It’s big enough to add value, but small enough to be manageable.
> 
> It bundles useful changes together essentially.

source: https://benmatselby.dev/post/logical-commits/

Scenario:

- You have developed an awesome rolling rick feature.
- The development have happened over a couple of days and you've committed regularly.
- You create a pull request: https://github.com/kraftlauget/git-ws-1/pull/2
- You realize you can present it better with logically atomic commits. Something more like: https://github.com/kraftlauget/git-ws-1/pull/1

Instructions for exercise:

- Checkout branch `main` if not already there.
- Open index.html in a browser to have a look at it's state.
- Checkout branch `start`.
- Refresh index.html to visually see how the branch differs from `main`.
- Create a new branch `exercise`.
- Have a look at the commits in `solution` branch.
- Rewrite `exercise` branch to contain the same commits as seen in the `solution` branch.

Tips:

- [Soft reset](https://git-scm.com/docs/git-reset) the `exercise` branch.
- Commit only parts (hunks) of the files.
- Use a GUI client such as [GitExtensions](http://gitextensions.github.io/) (Win), [Fork](https://git-fork.com/) (Mac + Win) or [GitKraken](https://www.gitkraken.com/) (Linux, Mac, Win) so that you don't have to figure out the git cli commands for doing the above.

[Click here for next exercise](https://github.com/kraftlauget/git-ws-2)