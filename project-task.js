/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15", ${/*comma after value*/''}
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson", ${/*keys need quotation marks*/''}
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null, ${/*undefined not an allowed type, use null*/''}
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"] ${/*final comma deleted*/''}
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
- I used my notes of what is allowed in JSON, and the linter to catch everything else.

2️⃣ How did you confirm that your corrected JSON file was valid?
- I pasted the json into the linter and it verified it as valid.

3️⃣ Which errors were the most difficult to spot? Why?
- I did not catch the undefined error until the linter, as I forgot that undefined isn't a valid value in JSON

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
- I like to write JSON in VSCode where the formatting indicators will automatically underline something if it isn't quite right.
- This tips me off early to any problems, so I can fix them before they become a needle in a haystack.
- It's like someone pointing out the needle when it's still on top, before it gets covered in more hay.

Bonus: I am not sure if this was intended, but I'm a little proud of my solution for adding comments within a string literal.
*/
