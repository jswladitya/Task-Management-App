const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Complete project report",
          taskDescription: "Prepare and submit the project report by EOD.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "2024-12-10",
          category: "Documentation",
        },
        {
          taskTitle: "Team meeting",
          taskDescription: "Attend the weekly team meeting at 3 PM.",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          date: "2024-12-09",
          category: "Meeting",
        },
        {
          taskTitle: "Code review",
          taskDescription: "Review the code submitted by junior developers.",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          date: "2024-12-11",
          category: "Development",
        },
      ],
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Update documentation",
          taskDescription: "Revise the API documentation for the new release.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "2024-12-10",
          category: "Documentation",
        },
        {
          taskTitle: "Client feedback",
          taskDescription: "Review feedback from the client and suggest improvements.",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          date: "2024-12-08",
          category: "Feedback",
        },
        {
          taskTitle: "Database backup",
          taskDescription: "Ensure database backups are updated and secure.",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          date: "2024-12-07",
          category: "Maintenance",
        },
      ],
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "UI Design",
          taskDescription: "Create a mockup for the new landing page.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "2024-12-10",
          category: "Design",
        },
        {
          taskTitle: "Bug fixing",
          taskDescription: "Resolve the reported issues in the ticketing system.",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          date: "2024-12-09",
          category: "Development",
        },
        {
          taskTitle: "Performance review",
          taskDescription: "Prepare performance review reports for your team.",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          date: "2024-12-06",
          category: "HR",
        },
      ],
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Security audit",
          taskDescription: "Perform a security audit of the application.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "2024-12-10",
          category: "Security",
        },
        {
          taskTitle: "Prepare presentation",
          taskDescription: "Prepare a presentation for the quarterly review meeting.",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          date: "2024-12-07",
          category: "Meeting",
        },
      ],
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Test automation",
          taskDescription: "Automate regression test cases for the new module.",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          date: "2024-12-11",
          category: "Testing",
        },
        {
          taskTitle: "Deploy updates",
          taskDescription: "Deploy the latest updates to the staging environment.",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          date: "2024-12-08",
          category: "Development",
        },
        {
          taskTitle: "Clean up logs",
          taskDescription: "Clear unnecessary logs from the server.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "2024-12-10",
          category: "Maintenance",
        },
      ],
    },
  ];
  
  const admin = [
    {
      id: 1,
      email: "admin@example.com",
      password: "123",
    },
  ]


  export const setLocalStorage = () => {
    // we have to pass data in string format 
    localStorage.setItem("employees" , JSON.stringify(employees))
    localStorage.setItem("admin" , JSON.stringify(admin))
  }
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    
  }
  