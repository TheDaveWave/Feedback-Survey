# Redux Feedback Loop

## Description

_Duration: 2 Day Sprint_

This application is meant to emulate a form / feedback loop. The user may fill out inputs throughout the form and store their responses onto a database. This particular form is meant to guage how someone is doing over a period of time while in a learning environment. 

## Preview

![homepage](images/homescreen.png)

## Usage

The guages mentioned are choices between 1 meaning terrible, and 5 meaning excellent.

1. The user may fill out the form starting with the `feeling` page. Here the user may select a number from one to five and then     select the `next` button.
    [selection](images/selection.png)

2. The next two pages will have the same guage but measure level of `understanding` and level of `support` navigable through the use of the `next` and `back` buttons.
-![back_and_next](images/back-and-next.png)

3. On the fourth page the user may enter in an optional `comment` for the day.
-![comment](images/comments.png)

4. After choosing to enter a comment or not the user will be directed to the `review` page.
    - Here the selections for each part of the form are shown.
    ![review](images/feedback-review.png)

5. On the `review` page the user may select `submit` to submit the form to the database.
    - upon click of the `submit` button the user is show a confirmation modal.
    ![confirmation_submit](images/submit.png)
    - After selecting `submit` the success box will appear with three buttons.
    ![success](images/success.png)
    - Selecting `New Feedback` will allow the user to submit another form.
    - Selecting `Exit` will redirect the use to https://google.com.
    - Selecting `Meme` will promptly send the user to a page that is inescapable where they will be subjected to a clockwise spinning gorilla.
    