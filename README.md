### Concat

```bash
const ourStr = "I come first. " + "I come second.";
// I come first. I come second.
```

concat two string using `+`sign
**Concatenating Strings with the Plus Equals Operator**

```bash
let ourStr = "I come first. ";
ourStr += "I come second.";
// I come first. I come second.
```

**Find the Length of a String**

```bash
console.log("Alan Peter".length);
```

```bash
let myStr = "Bob";
myStr[0] = "J"; 🚫 // we cannot directly change character using this technique
myStr = "Job"; ✅
```

**Use Bracket Notation to Find the Nth Character in a String**
start counting at 0, so the first character is actually the zeroth character.

```bash
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1]; // d
const lastLetterOfFirstName = firstName[firstName.length - 1]; // a
```
