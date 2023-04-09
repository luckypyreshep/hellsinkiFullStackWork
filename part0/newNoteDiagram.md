## 0.4 New note diagram
<p>Create a {similar} diagram depicting the situation where the user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the submit button.</p>

::: mermaid
sequenceDiagram
    participant browser
    participant server

    browser-->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: Respond with 302 code, redirect to /notes
    deactivate server


    browser->>server: GET requests for note HTML, main.css, main.js, 
    Note over browser: HTML calls in main.css and main.js, browser executes JS code, makes GET request for JSON data
    Note over browser: when JSON has been received, browser event handler renders notes to the page via DOM-API
    activate server
    server->>browser: returns note in content property of returned json
    deactivate server
:::

## 0.5 Single Page Diagram
<p>Create a diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa</p>

::: mermaid
sequenceDiagram
    participant browser
    participant server
    browser->>server: GET requests for note HTML, main.css, and main.js
    Note over browser: server sends back HTML, main.css and main.js per requests
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa, no redirect occurs
    Note over browser: doesn't rerender
    Note over browser: redrawNotes runs to append new note to DOM
    server->>browser: response with status code 201, no further HTTP requests
:::

## 0.6 New note in Single page app diagram
<p>Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.</p>

::: mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes

    Note right of browser: User enters text to input field, clicks "Save" and submit

    browser-->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    server-->>browser: return status code 201, no further HTTP requests and no redirects
    Note over browser: redrawNotes runs to append new note to DOM
:::
    