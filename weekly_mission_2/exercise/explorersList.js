export const explorers = [
    {
        name: 'Explorer 1',
        exercisesCompleted: 10,
        rate: 99,
        city: 'CDMX',
        stack: ['js', 'C#'],
        missions: {
            onboarding: {
                isFinished: true,
                excercisesFinished: true
            },

            frontend: {
                isFinished: true,
                exercisesCompleted: true
            }
        }
    },
    {
        name: 'Explorer 2',
        exercisesCompleted: 9,
        city: 'Veracruz',
        rate: 50,
        stack: ['js'],
        missions: {
          onboarding: {
            isFinished: false,
            exercisesFinished: false
          },

          frontend: {
            isFinished: false,
            exercisesFinished: false
          }
        }
      },
      {
        name: 'Explorer 3',
        exercisesCompleted: 3,
        city: 'Sonora',
        rate: 100,
        stack: ['elixir'],
        missions: {
          onboarding: {
            isFinished: true,
            exercisesFinished: true
          },
          
          frontend: {
            isFinished: false,
            exercisesFinished: false
          }
        }
      }
]