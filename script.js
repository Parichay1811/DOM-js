const newDiv = document.createElement("div");

        // Set the style properties for the div
        newDiv.style.width = "300px";
        newDiv.style.height = "150px";
        newDiv.style.backgroundColor = "yellow";

        // Create a new text node and append it to the div
        const newContent = document.createTextNode("Hello, I'm a div!");
        newDiv.appendChild(newContent);

        // Style the text inside the div
        newDiv.style.color = "blue";
        newDiv.style.fontWeight = "bold";
        newDiv.style.padding = "20px";

        // Append the div to the body
        document.body.appendChild(newDiv);