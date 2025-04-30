import "./styles.css";
import { addTask, deleteTasks, toggleTask} from "./task";
import { renderTasks} from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    renderTasks();

    document.getElementById("task-form").addEventListener("submit", (e) => {
       e.preventDefault();

       const taskinput = document.getElementById("task-input").value;
       if(taskinput !== "") {
        addTask(taskinput);
        renderTasks();
        //limpiar el cuadro de texto
        document.getElementById("task-input").value = "";

       } 
    });

    document.getElementById("task-list").addEventListener("click", (e) => {
        if(e.target.classList.contains("delete")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            deleteTasks(taskId);
            renderTasks();
        }

        if(e.target.classList.contains("toggle")) {
            const taskId= e.target.parentElement.getAttribute("data-id");
            toggleTask(taskId);
            renderTasks();
        }
    });
});