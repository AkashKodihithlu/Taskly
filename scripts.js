const tasks = [
  {
    id: 1,
    title: "Draft Q3 Marketing Strategy",
    description: "Compile competitive analysis and outline channel distribution budget for next quarter.",
    priority: "high",
    dueDate: "2026-10-12",
    column: "toDo"
  },
  {
    id: 2,
    title: "Review Design System Updates",
    description: "Audit components against the new brand guidelines.",
    priority: "medium",
    dueDate: "2026-10-15",
    column: "toDo"
  },
  {
    id: 3,
    title: "Onboard New Design Lead",
    description: "Prepare accounts, intro meetings, and project context.",
    priority: "high",
    dueDate: "2026-10-13",
    column: "in-progress"
  },
  {
    id: 4,
    title: "Client Kickoff Presentation",
    description: "Finalized slides and sent follow-up notes.",
    priority: "medium",
    dueDate: "2026-10-05",
    column: "done"
  }
];
let nexttId = 5;
function renderBoard() {
  const columnIds = ['todo','in-progress','done'];
  columnIds.forEach(columnId => {
    const columnE1 = document.getElementById(columnId);
    columnE1.innerHTML = "";
  });

  tasks.forEach(task => {
    const taskColumn = document.getElementById(task.column);
    const card = document.createElement('div');
    card.innerHTML=`
    <span class="priority">${task.priority}</span>
      <h3>${task.title}</h3>
      <p>${task.dueDate}</p>
    `;
    taskColumn.appendChild(card);
  });
}
renderBoard();