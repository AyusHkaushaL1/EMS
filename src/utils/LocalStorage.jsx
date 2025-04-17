const employees = [
  {
    "id": 1,
    "email": "e@e.com",
    "password": "123",
    "firstName": "Chhotu",
    "taskCount": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Complete onboarding",
        "description": "Finish your onboarding process including account setup and training.",
        "taskData": "2025-02-26",
        "category": "Onboarding"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare report",
        "description": "Prepare the weekly report on the team's progress.",
        "taskData": "2025-02-27",
        "category": "Work"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Attend meeting",
        "description": "Attend the weekly team meeting to discuss ongoing projects.",
        "taskData": "2025-02-20",
        "category": "Meetings"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstName": "Aisha",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update website content",
        "description": "Update the content on the company website with new product details.",
        "taskData": "2025-02-26",
        "category": "Web"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix server issue",
        "description": "Address the ongoing server downtime issue and restore services.",
        "taskData": "2025-02-27",
        "category": "Technical"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "System upgrade",
        "description": "Perform the scheduled system upgrade to the latest version.",
        "taskData": "2025-02-15",
        "category": "Technical"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstName": "Vivaan",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create marketing campaign",
        "description": "Develop a new marketing campaign for the upcoming product launch.",
        "taskData": "2025-02-26",
        "category": "Marketing"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare press release",
        "description": "Write and prepare the press release for the new product launch.",
        "taskData": "2025-02-28",
        "category": "Public Relations"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Content creation",
        "description": "Create content for the company's blog and social media platforms.",
        "taskData": "2025-02-20",
        "category": "Content"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstName": "Isha",
    "taskCount": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Data entry",
        "description": "Enter data for the company's inventory management system.",
        "taskData": "2025-02-26",
        "category": "Admin"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Review documents",
        "description": "Review and approve all incoming contracts and agreements.",
        "taskData": "2025-02-27",
        "category": "Legal"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Assist in project planning",
        "description": "Assist the team in planning the next phase of the project.",
        "taskData": "2025-02-18",
        "category": "Planning"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstName": "Aryan",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Conduct research",
        "description": "Conduct research on the latest industry trends for the management team.",
        "taskData": "2025-02-26",
        "category": "Research"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare presentation",
        "description": "Prepare a presentation for the upcoming investor meeting.",
        "taskData": "2025-02-28",
        "category": "Investors"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Organize event",
        "description": "Organize the annual company event with speakers and sponsors.",
        "taskData": "2025-02-10",
        "category": "Events"
      }
    ]
  }
];

  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  export const setLocalStorage = ()=>{
   localStorage.setItem('employees', JSON.stringify(employees))
   localStorage.setItem('admin' , JSON.stringify(admin))  
} 

  export const getLocalStorage = ()=>{
  const employees = JSON.parse( localStorage.getItem('employees'))
  const admin = JSON.parse( localStorage.getItem('admin'))
   return {employees, admin}
} 