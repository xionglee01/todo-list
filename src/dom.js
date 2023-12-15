import addToDo from "./todo";
import { todos } from "./todo";
const dom = (function()
{
    const container = document.querySelector("#content");
    function todoModal()
    {
        const modal = document.createElement("div");
        modal.classList.add("modal");
        const form = document.createElement("form");
        const title_label = document.createElement("label");
        const title = document.createElement("input");
        const description_label = document.createElement("label");
        const description = document.createElement("textarea");
        const date_label = document.createElement("label");
        const date = document.createElement("input");
        const priority_label = document.createElement("label");
        const priority = document.createElement("input");           
        const submit = document.createElement("button");
        
        
        
        //SET TEXT
        title_label.innerText = "TITLE: ";
        description_label.innerText = "DESCRIPTION: ";
        date_label.innerText = "DATE: ";
        priority_label.innerText = "PRIORITY: ";
        submit.innerText = "ADD";



        // SET ATTRIBUTE
        title_label.setAttribute("for", "title");
        description_label.setAttribute("for", "description");
        date_label.setAttribute("for", "date");
        priority_label.setAttribute("for", "priority");


        title.setAttribute("type", "text");
        title.setAttribute("id", "title");
        
        description.setAttribute("type", "text");
        description.setAttribute("id", "description");
        
        date.setAttribute("type","date");
        date.setAttribute("id", "date");
        
        priority.setAttribute("type", "text");
        priority.setAttribute("id", "priority");
        
        submit.setAttribute("type", "button");
        submit.setAttribute("id", "modal_add");
        

        submit.addEventListener("click", ()=>{
            addToDo();
        });

        form.append(title_label, title, date_label, date, priority_label, priority, description_label, description, submit);
        modal.append(form);
        container.append(modal);
    }
    
    const addBtn = document.querySelector("#add");

    addBtn.addEventListener("click", todoModal);

    window.addEventListener("click", function(e)
    {
        const modal = document.querySelector(".modal");
        if(e.target === modal)
            modal.remove();
    });

})();
export default dom;