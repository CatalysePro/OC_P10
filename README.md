# 724 Events

## Description
L'application est le site d'une agence evenementielle.
## Pre-requis
- NodeJS  >= v16.14.1

## Installation
- `yarn install`

## Lancement de l'application
- `yarn start`

## Tests
- `yarn test`

## ======================================================

## YB OC_P10 Deliverable

## For terminal tests & console warnings : 7 corrected operational files 
- src/containers/Slider (internal ref slider_v7) --> CORRECTS SLIDER
- src/helpers/Date (internal ref helperDate_v1) --> CORRECTS SLIDER' SLIDES SORTING

- src/components/Select (internal ref select_v1) --> CORRECTS EVENTS GALLERY FILTERING
- src/containers/Events (internal ref events_v7) --> CORRECTS EVENTS GALLERY FILTERING & SORTING

- src/containers/Form (internal ref Form_v1) ---> CORRECTS FORM SUBMISSION MESSAGE

- src/pages/Home (internal ref Page_v1) --> CORRECTS LAST EVENTS IN THE FOOTER

- src/components/Logo (internal ref logo_v1) --> CORRECTS CONSOLE STYLE WARNINGS



## For end2end Tests plan : 3 test files modified &  corrected operational files ref (if existing)

All modified test files corresponds to the original ones which have been enhanced by additional tests code lines.
To make the additionnal test working, just uncomment the dedicated code lines.

For the purpose of the exercice, in this repo, none of the operational files have been corrected to pass these additionnal tests;
however, some operationnal files have been corrected and are available on demand.

- TEST MENU NAV LINKS EFFICIENCY :
            - Modified test file :      src/containers/Menu (internal ref Menu_Test_v4) 
            - correcteds components :   on demand : src/pages/Home (internal ref Page_v2)
                                        on demand : src/containers/Menu (internal ref Menu_v1 -just addition of a comment)

- TEST SOCIAL NETWORK ICONS LINKS EFFICIENCY :
            - Modified test file :      src/pages/Home (internal ref Page_Test_v1) 
            - correcteds components :   no corrected file available

- TEST WARNING MESSAGE FOR FORM FIELDS FULLFILMENT :
            - Modified test file :      src/containers/Form (internal ref Form_Test_v1) 
            - correcteds components :   no corrected file available

As a consequence, by uncommenting the additionnal code lines in the 3 corresponding test files, 
after running the test command:  
                                * on the existing 16 test suites 3 will fail,
                                * corresponding to a total of 5 failed additionnal unitary tests on a new total of 54.


The end2end Tests plan document will describe the initial tests of which the detected errors have been fixed and it 
will describe the new tests.