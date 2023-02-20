# JSON Based Questionnaire Rendering

Website Link - https://json-rendering.netlify.app/

Generate questionnaire forms on the fly with a JSON

- Can use different components based on element field in JSON (for normal components - "input", "textArea", "radio", "select", for Material UI components prefix with "material-", for eg: "material-input")
- Can hide or show additional questions based on selected answer
- Can perform mandatory fields, min input length, max input length and regex pattern validations as well as use validation messages from JSON. Additional rules can also be setup and scaled easily
- Can render different length question fields by specifying colSize parameter for each question
- Can change order of questions by modifying questionOrder array
- Can perform validation at input change or at time of submission based on requirement

<br></br>
To see questions hiding and showing in action -
1) Select Yes and then No for "Have you used Product 1?" question (or)
2) Select a rating from 0-5 for "How would you rate Product 2?" question
