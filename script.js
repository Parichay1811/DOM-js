const newDiv = document.createElement("div");

        newDiv.style.width = "300px";
        newDiv.style.height = "150px";
        newDiv.style.backgroundColor = "yellow";
        const newContent = document.createTextNode("Hello, I'm a div!");
        newDiv.appendChild(newContent);
        newDiv.style.color = "blue";
        newDiv.style.fontWeight = "bold";
        newDiv.style.padding = "20px";
        document.body.appendChild(newDiv);