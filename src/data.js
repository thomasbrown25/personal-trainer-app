export const trainerActivities = [
  {
    title: "New Weight Entry",
    description: "Jessica entered a new weight of 167 lbs",
    client: "Jessica",
    date: "2 days ago",
    severity: "info"
  },
  {
    title: "Workout Completed",
    description: "Jessica completed a workout",
    client: "Jessica",
    date: "3 days ago",
    severity: "info"
  },
  {
    title: "Missed Workout",
    description: "Jessica missed a workout",
    client: "Jessica",
    date: "4 days ago",
    severity: "warning"
  },
  {
    title: "New Weight Entry",
    description: "Ryan entered a new weight of 169 lbs",
    client: "Ryan",
    date: "5 days ago",
    severity: "info"
  },
  {
    title: "Milestone Achieved",
    description: "Ryan reached his goal of going under 170 lbs",
    client: "Ryan",
    date: "5 days ago",
    severity: "success"
  },
  {
    title: "New Weight Entry",
    description: "Jessica entered a new weight of 170 lbs",
    client: "Jessica",
    date: "6 days ago",
    severity: "info"
  },
  {
    title: "New Client Added",
    description: "Justin was added as a new client",
    client: "Justin",
    date: "1 week ago",
    severity: "info"
  },
  {
    title: "Workout Plan Updated",
    description: "The Basic workout plan was updated",
    client: "None",
    date: "1 week ago",
    severity: "info"
  },
  {
    title: "Workout Plan Created",
    description: "The Basic workout plan was created",
    client: "None",
    date: "1 week ago",
    severity: "info"
  },
  {
    title: "Notes Added",
    description: "Notes were added to the Basic workout plan",
    client: "None",
    date: "2 weeks ago",
    severity: "info"
  },
  {
    title: "New Video Upload",
    description: "A new video was uploaded to the Basic workout plan",
    client: "None",
    date: "2 weeks ago",
    severity: "info"
  },
  {
    title: "Over Training Alert",
    description: "Jessica has been training too much",
    client: "Jessica",
    date: "2 weeks ago",
    severity: "critical"
  },
  {
    title: "Inactivity Alert",
    description: "Ryan has been inactive",
    client: "Ryan",
    date: "2 weeks ago",
    severity: "warning"
  }
];

export const trainerPrograms = [
  {
    id: 1,
    name: "Basic",
    description:
      "14-day gym workout plan for an average person, designed to target major muscle groups, improve overall fitness, and balance strength training with cardiovascular and recovery-focused exercises. Adjust weights, reps, and intensity based on your fitness level.",
    active: "8",
    days: "14",
    plans: [
      {
        day: "Day 1",
        type: "Gym Workout",
        focus: "Chest & Triceps",
        exercises: [
          {
            name: "Warm-Up",
            sets: "",
            reps: "5-10 min treadmill or rowing (light pace)"
          },
          {
            name: "Bench Press",
            sets: "4",
            reps: "8-12"
          },
          {
            name: "Incline Dumbbell Press",
            sets: "3",
            reps: "10-12"
          },
          {
            name: "Cable Flys",
            sets: "3",
            reps: "12-15"
          },
          {
            name: "Tricep Dips",
            sets: "3",
            reps: "10-15"
          },
          {
            name: "Overhead Tricep Extension",
            sets: "3",
            reps: "12-15"
          },
          {
            name: "Cool Down",
            sets: "",
            reps: "Stretch chest and triceps (5 min)"
          }
        ]
      },
      {
        day: "Day 2",
        type: "Gym Workout",
        focus: "Back & Biceps",
        exercises: [
          {
            name: "Warm-Up",
            sets: "",
            reps: "5-10 min elliptical or cycling"
          },
          {
            name: "Deadlifts",
            sets: "4",
            reps: "6-10"
          },
          {
            name: "Pull-Ups",
            sets: "3",
            reps: "failure"
          },
          {
            name: "One-Arm Dumbbell Row",
            sets: "3",
            reps: "10-12"
          },
          {
            name: "Barbell Bicep Curls",
            sets: "3",
            reps: "10-12"
          },
          {
            name: "Hammer Curls",
            sets: "3",
            reps: "12-15"
          },
          {
            name: "Cool Down",
            sets: "",
            reps: "Stretch back and biceps (5 min)"
          }
        ]
      },
      {
        day: "Day 3",
        type: "Gym Workout",
        focus: "Cardio & Core",
        exercises: [
          {
            name: "Warm-Up",
            sets: "",
            reps: "20-30 min of HIIT (e.g., 30-sec sprint, 1-min jog, repeat)"
          },
          {
            name: "Plank",
            sets: "3",
            reps: "1 min hold"
          },
          {
            name: "Russian Twists",
            sets: "3",
            reps: "20 (10 per side)"
          },
          {
            name: "Hanging Leg Raises",
            sets: "3",
            reps: "12-15"
          },
          {
            name: "Bicycle Crunches",
            sets: "3",
            reps: "20 (10 per side)"
          },
          {
            name: "Cool Down",
            sets: "",
            reps: "Stretch core and hips (5 min)"
          }
        ]
      },
      {
        day: "Day 4",
        type: "Gym Workout",
        focus: "Legs",
        exercises: [
          {
            name: "Warm-Up",
            sets: "",
            reps: "5-10 min light cycling or stair climber"
          },
          {
            name: "Squats",
            sets: "4",
            reps: "8-12"
          },
          {
            name: "Lunges",
            sets: "3",
            reps: "10-12"
          },
          {
            name: "Romanian Deadlifts",
            sets: "3",
            reps: "10-12"
          },
          {
            name: "Leg Press",
            sets: "3",
            reps: "10-12"
          },
          {
            name: "Calf Raises",
            sets: "3",
            reps: "15-20"
          },
          {
            name: "Cool Down",
            sets: "",
            reps: "Stretch legs (5 min)"
          }
        ]
      },
      {
        day: "Day 5",
        type: "Rest",
        focus: "",
        exercises: [
          {
            name: "Activity Options",
            sets: "",
            reps: "Yoga, swimming, light cycling, or walking"
          }
        ]
      },
      {
        day: "Day 6",
        type: "Gym Workout",
        focus: "Shoulders & Abs",
        exercises: [
          {
            name: "Warm-Up",
            sets: "",
            reps: "5-10 min jump rope or rowing"
          },
          {
            name: "Overhead Barbell Press",
            sets: "4",
            reps: "8-10"
          },
          {
            name: "Lateral Raises",
            sets: "3",
            reps: "12-15"
          },
          {
            name: "Arnold Press",
            sets: "3",
            reps: "10-12"
          },
          {
            name: "Front Raises",
            sets: "3",
            reps: "12-15"
          },
          {
            name: "Hanging Knee Tucks",
            sets: "3",
            reps: "12-15"
          },
          {
            name: "Cool Down",
            sets: "",
            reps: "Stretch shoulders and core (5 min)"
          }
        ]
      },
      {
        day: "Day 7",
        type: "Gym Workout",
        focus: "Cardio & Mobility",
        exercises: [
          {
            name: "Cardio",
            sets: "",
            reps: "30-45 min steady-state (jogging, cycling, swimming)"
          },
          {
            name: "Mobility Work",
            sets: "",
            reps: "Dynamic stretching, foam rolling, yoga (15-20 min)"
          }
        ]
      },
      {
        day: "Day 8",
        type: "Gym Workout",
        focus: "Chest & Triceps",
        exercises: [
          {
            name: "Warm-Up",
            sets: "",
            reps: "5-10 min treadmill or rowing (light pace)"
          },
          {
            name: "Bench Press",
            sets: "4",
            reps: "8-12"
          },
          {
            name: "Incline Dumbbell Press",
            sets: "3",
            reps: "10-12"
          },
          {
            name: "Cable Flys",
            sets: "3",
            reps: "12-15"
          },
          {
            name: "Tricep Dips",
            sets: "3",
            reps: "10-15"
          },
          {
            name: "Overhead Tricep Extension",
            sets: "3",
            reps: "12-15"
          },
          {
            name: "Cool Down",
            sets: "",
            reps: "Stretch chest and triceps (5 min)"
          }
        ]
      },
      {
        day: "Day 9",
        type: "Gym Workout",
        focus: "Back & Biceps",
        exercises: [
          {
            name: "Warm-Up",
            sets: "",
            reps: "5-10 min elliptical or cycling"
          },
          {
            name: "Deadlifts",
            sets: "4",
            reps: "6-10"
          },
          {
            name: "Pull-Ups",
            sets: "3",
            reps: "failure"
          },
          {
            name: "One-Arm Dumbbell Row",
            sets: "3",
            reps: "10-12"
          },
          {
            name: "Barbell Bicep Curls",
            sets: "3",
            reps: "10-12"
          },
          {
            name: "Hammer Curls",
            sets: "3",
            reps: "12-15"
          },
          {
            name: "Cool Down",
            sets: "",
            reps: "Stretch back and biceps (5 min)"
          }
        ]
      },
      {
        day: "Day 10",
        type: "Gym Workout",
        focus: "Cardio & Functional Fitness",
        exercises: [
          {
            name: "Warm-Up",
            sets: "",
            reps: "5-10 min dynamic stretching"
          },
          {
            name: "Kettlebell Swings",
            sets: "3",
            reps: "15"
          },
          {
            name: "Battle Ropes",
            sets: "",
            reps: "30-sec work, 30-sec rest x 5 rounds"
          },
          {
            name: "Farmer’s Walk",
            sets: "3",
            reps: "30-sec hold with heavy dumbbells"
          },
          {
            name: "Box Jumps",
            sets: "3",
            reps: "12-15"
          },
          {
            name: "Cool Down",
            sets: "",
            reps: "Stretch full body (5 min)"
          }
        ]
      },
      {
        day: "Day 11",
        type: "Gym Workout",
        focus: "Legs",
        exercises: [
          {
            name: "Warm-Up",
            sets: "",
            reps: "5-10 min light cycling or stair climber"
          },
          {
            name: "Squats",
            sets: "4",
            reps: "8-12"
          },
          {
            name: "Lunges",
            sets: "3",
            reps: "10-12"
          },
          {
            name: "Romanian Deadlifts",
            sets: "3",
            reps: "10-12"
          },
          {
            name: "Leg Press",
            sets: "3",
            reps: "10-12"
          },
          {
            name: "Calf Raises",
            sets: "3",
            reps: "15-20"
          },
          {
            name: "Cool Down",
            sets: "",
            reps: "Stretch legs (5 min)"
          }
        ]
      },
      {
        day: "Day 12",
        type: "Rest",
        focus: "",
        exercises: [
          {
            name: "Activity Options",
            sets: "",
            reps: "Yoga, swimming, light cycling, or walking"
          }
        ]
      },
      {
        day: "Day 13",
        type: "At-Home Workout",
        focus: "Full-Body Circuit",
        exercises: [
          {
            name: "Warm-Up",
            sets: "",
            reps: "5-10 min cardio"
          },
          {
            name: "Circuit",
            type: "Circuit",
            sets: "",
            reps: "",
            circuit: [
              {
                name: "Push-Ups",
                reps: "15"
              },
              {
                name: "Goblet Squats",
                reps: "12"
              },
              {
                name: "Pull-Ups",
                reps: "8-10"
              },
              {
                name: "Kettlebell Deadlifts",
                reps: "12"
              },
              {
                name: "Mountain Climbers",
                reps: "20 reps (10 per side)"
              }
            ]
          },
          {
            name: "Cool Down",
            sets: "",
            reps: "Stretch (5 min)"
          }
        ]
      },
      {
        day: "Day 14",
        type: "At-Home Workout",
        focus: "Active Recovery or Light Cardio",
        exercises: [
          {
            name: "Activity Options",
            sets: "",
            reps: "Light jogging, cycling, swimming, or a leisurely walk (30 min)"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Intermediate",
    description: "This is an intermediate workout plan",
    active: "3",
    days: "21"
  },
  {
    id: 3,
    name: "Advanced",
    description: "This is an advanced workout plan",
    active: "2",
    days: "28"
  },
  {
    id: 4,
    name: "Athlete",
    description: "This is an athlete workout plan",
    active: "5",
    days: "28"
  },
  {
    id: 5,
    name: "Custom",
    description: "This is a custom workout plan",
    active: "3",
    days: "21"
  }
];
