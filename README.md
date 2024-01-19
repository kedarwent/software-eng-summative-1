# software-eng-summative-1
Summative Assignment 1 for Software Engineering course

## Aims of the assignment

This assignment had 2 key aims: to test understanding of software engineering workflows, and to show ability to apply this knowledge in real life, by producing either a data product or small-scale app.

## Designing the app

Figma was used to create a series of drafts which were used to create a "final" idea of what the app should look like. This formed the basis of the idea of the requirements of the Minimum Viable Product (MVP) I then went on to build.

## Planning the project

I worked following Agile methodology, first creating a concrete idea of what the app should look like, then creating a series of issues in a Github Project which covered the atomic aspects of the MVP, e.g. the initial header, or the background colour. The Project was a work tracking space which I laid out as a Kanban board, with issues placed under one of three headings: "To do", "In progress" or "Done". At the start of the project, all these issues were in "To do".

## Building the MVP

I built the MVP in an incremental manner, working on one issue at a time in the order laid out on the Kanban board. After the code which fulfilled the requirements of an issue was completed locally, I pushed the code to Github, creating a new branch with the new developments, and if the code was acceptable, merged the new branch with the main (initial) so that the main branch contained the latest developments. I also linked each pull request to at least one issue, so that when the pull request was merged, the issue(s) it dealt with were automatically moved to a different heading in the Kanban board; especially useful was utilising "closes #[issue no.]" in the comment of the pull request, which then allowed the issue to be automatically closed. As this was an Agile project, sometimes the acceptance criteria of the issues changed and expectations of what work needed doing altered.

## Test driven development

There was a test-driven development ideology behind the project; I created a test file using JEST to test whether the main function handled negative values as expected.


