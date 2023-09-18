---
title: "Class Registration Assistant:"
subtitle: A Project Proposal
author:
- Anabelle VanDenburgh
- Connor Fitzgerald
- Matt Stewart
institute: College of Charleston
date: September 17, 2023
---

# What are we Building?

## Project Idea
assigned to Sierra

baza hint:

> what is the problem that your system solves? give statistics !!!

## Existing Works
CofC's existing registration system has several pros/cons compared to our proposed system:

#### Pros:
1. You can't sign up for classes that conflict with your schedule.
2. Shows you the fees that the classes will add to your bill.
3. Has direct CRN lookup so you don't have to search for the class you want.

#### Cons:
1. There are no recommendations for what classes to take, you instead must view degree works to see what classes you're missing.
2. No reminders about when to sign up so if you miss your sign-ups you might not get a class you need for graduation.
3. Have to compete with other students to get the classes you need for graduation.

<!-- Our system will address these limitations by being able to filter classes by major and get recommendations for what classes to take based on major these two solutions simplify the registration process for students just looking to complete what they need for their major. The registration assistant will also send the student reminders about when registration starts and the registration assistant will automatically register the student for classes they desire ahead of time which eliminates the chance of missing sign-ups. -->


## Stakeholders

### Customer: College of Charleston.
The purpose of this project is to make it easier for their customers(CofC students) to manage their classes and schedules; CofC directly benefits from any improvement in this process. Will need to ensure their current methods of maintaining their class database do not significantly alter to ensure we can capture and process the data.

### End User: Students
Our project only covers the College of Charleston, and as such the only end users for this project will be students actively enrolled at CofC or those interested in enrolling. As development progresses, potential end-users may be contacted for testing/feedback purposes to improve the end product.

### Dev Team: Our Group
Handled by the project team, with potential outsourcing of beta testing for user feedback.

## Requirements
assigned to Sierra

### Functional
- Example Functional Requirement 1
- Example Functional Requirement 2
- Example Functional Requirement 3

### Non-Functional
- Example Non-Functional Requirement 1
- Example Non-Functional Requirement 2
- Example Non-Functional Requirement 3


# How are we Building it?


## Proposed System Design
```mermaid
graph LR
    CofC[CofC's Course Database]
    SQL[Bun's Builtin SQLite DB]
    Bun[Bun Server]
    Browser[Web Browser]

    Bun -->|Query| CofC
    CofC -->|Respose| Bun
    Bun <-->|Cache Course Data| SQL
    

    Bun --> |Serve Static Webpages to| Browser
    Bun <--> |AJAX API for Section Data| Browser

```

## Process - Why use Agile?

### 1. Early and Continuous Delivery:
Agile prioritizes the delivery of working software early and often,
which helps in identifying issues, gathering feedback,
and making necessary adjustments early in the development process.

### 2. Improved Quality:
Frequent testing and quality assurance activities are integral to Agile.
This results in higher software quality,
as issues are detected and resolved promptly,
reducing the chances of delivering a buggy product.

### 3. Risk Management:
Agile encourages risk mitigation through regular assessment and adaptation. 
By breaking down the project into smaller,
manageable increments,
it becomes easier to identify and manage risks effectively.

## Process - Why use Agile? (Continued)

### 4. Customer involvement:
Agile encourages the active involvement of customers and end-users throughout the development process,
ensuring that the product aligns with their expectations and needs.


## Timeline
```mermaid
gantt
    dateFormat  YYYY-MM-DD

    section SQL
    Define Schema - User:               SQLUser, 2023-09-14, 1d
    Define Schema - Section:            SQLSection, 2023-09-14, 1d
    Define Schema - Rate my Professors: SQLRMP, 2023-09-14,1d

    section AJAX Api
    /api/sections/ schema:          APIListSectionSchema, after SQLSection, 3d
    /api/sections/ implementation:  APIListSection, after APIListSectionSchema jsonSQL, 3d
    /api/section schema:            APISingleSectionSchema, after SQLSection, 3d
    /api/section implementation:    APISingleSection, after APISingleSectionSchema jsonSQL, 3d

    section Frontend - Sections Table
    Base HTML:                  tableBaseHTML, 2023-09-14, 3d
    CSS:                        tableCSS, after tableBaseHTML, 7d
    Fetch & Store Section Data: tableFetchAndStore, after tableBaseHTML APIListSectionSchema, 3d
    Populate Table With Data:   tablePopulate, after tableFetchAndStore, 3d
    Sorting:                    tableSorting, after tablePopulate, 1d
    Filtering:                  tableFiltering, after tablePopulate, 1d

    section Frontend - Class Details
    Base HTML:                          sectionHTML, 2023-09-14, 1d
    CSS:                                sectionCSS, after sectionHTML, 1d
    Fetch & Populate Section Data:      sectionFetch, after sectionHTML
    Graph of Remaining Seats over Time: sectionGraph, after sectionHTML

    section Accounts
    /login HTML, CSS:                   authHTML
    Authentication Tokens:              authCookie
    Past Professors - user input HTML: 


    fetchAllData():                done, 2023-09-14, 3d
    getRemainingSeats(CRN) -> int: 2023-09-14, 3d

    section WebScraper
    Rewrite auth code in node.js:    scraperRewriteNode
    JSON <-> SQL Helper Functions:   jsonSQL, after scraperRewriteNode
    

```

## Risk Analysis, 1-2/4

### Time Risk: 
All projects suffer the inherent risk of going over their alloted development time.
Whether it be due to troubleshooting, difficulty in implementation/launching,
or changes to the project based on feedback causing it to extend past deadlines,
there is continual risk of not being able to follow our projected timeline.
To mitigate time issues, the project will be developed using an Agile development
model, as covered previously.

### Database Risk: 
As no personal user data will be stored on an external server, 
there is minimal risk to stakeholders in the event of a database breach;
all personally-identifiable information(PII) will be maintained at the user-level.
As such, no mitigation is needed for this risk.

## Risk Analysis, 3/4

### Resource Risk:
To prevent development from being delayed or outright stopped due to lack of proper development tools or funds,
this project will be run using public, open-source software on personal equipment, developed primarily in a Linux environment. 
In the event of individual personal equipment failure, there are backup laptops available for use in development as needed, 
with all project data being stored on the cloud to prevent catastrophic data loss in the event of equipment damage or loss. 
Any additional costs for the project (such as server-related costs of hosting, domain name registration, etc.)
will be handled by the development team on an as-needed basis.

## Risk Analysis, 4/4

### Functionality Risk:
The goal of this project is to create an easier process for CofC students to
determine their class schedule, find appropriate classes, and overall improve
the registration process we currently have access to via MyPortal. Due to the
availability of base registration functionality already being accessible to end
users, there is a risk involved in this project that it either does not bring
any additional functionality to this process than what is currently available
or is presented in a manner that makes it unintuitive or too difficult for end
users to want to use it. As such, as end-users ourselves, the development team
have our own list of additional functionality we want to implement to help 
mitigate this risk. In addition, as part of the agile development process,
implementing additional functionality, removing unused functionality, or 
improving accessibility to the end user will be done based on feedback or 
timing constraints on a rolling basis.

## Development Tools
- [Bun](?)
- [Hono]
- [SQLite]
- [Python]
- [jQuery]
- [Pandoc]

## Budget
- Nothing Required
- Domain name
  - classes.anabelle.dev - Free
  - cougarclass.es - $20
  - cougarclasses.org - $8
- Hosting:
  - Self-Hosting with own computer - Free
  - AWS Free Tier - Free

## Contingency Plans
- We could probably use Apache, SQLITE, and Node.js if [Bun] becomes unstable

<!--Links-->
[Bun]:             bun.sh
[Hono]:            hono.dev
[SQLite]:          sqlite.org
[Python]:          python.org
[jQuery]:          jquery.com
[Pandoc]:          pandoc.org